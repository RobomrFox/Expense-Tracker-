import express from "express";
import session from 'express-session';
import authRoutes from './routes/authentication.js'
import cors from 'cors'
import categoryRoutes from './routes/categories.js'
import expenseRoutes from './routes/expenses.js'

const app = express();


app.use(cors({
  credentials: true,
  origin: true
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

app.use("/auth/", authRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/expenses', expenseRoutes);


app.listen(3000);
