const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const mysql = require('mysql2/promise');

// Configure MySQL connection
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Configure passport-local strategy
passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [username]);
      if (rows.length === 0) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      const user = rows[0];
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    if (rows.length === 0) {
      return done(new Error('User not found'));
    }
    done(null, rows[0]);
  } catch (err) {
    done(err);
  }
});
