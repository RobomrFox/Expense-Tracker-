import express from "express";
import session from 'express-session';


app.use(cors());
app.use(express.json());
app.use(session({
  secret: "guessTheSecret",
  resave: false,
  saveUninitialized: false,
}))

app.use("/api/users", userRoutes);
