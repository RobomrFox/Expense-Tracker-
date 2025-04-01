import express from "express";
import session from 'express-session';
import authRoutes from './routes/authentication.js'
import cors from 'cors'
import userRoutes from './routes/users.js'

const app = express();


app.use(cors({
  credentials: true
}));

app.use(express.json());

app.use(session({
  secret: "guessTheSecret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 15, //15 mins
    sameSite: 'Lax',
    secure: false
  }
}))

app.use("/api/users", userRoutes);
app.use("/auth/", authRoutes);


app.listen(3000);
