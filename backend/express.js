import express from "express";
import User from "./db.js";

const app = express();
const Port = 3000;

app.use(express.json());

app.get("/users", async function (req, res) {
  const users = await User.find();

  if (!users) {
    return res.status(400).json({
      msg: "User doesn't exist",
    });
  }

  res.status(200).json(users);
});

app.post("/user/login", async function (req, res) {

  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({
      msg: "User not found",
    });
  }
  if (user.password !== password) {
    return res.status(401).json({
      msg: "Invalid password",
    });
  }

  res.status(200).json({
    msg: "Login successful",
    user,
  });
});

app.put("/user", async function (req, res) {

  const { id, username, age, email } = req.body;
  const updatedUser = await User.findByIdAndUpdate(
    id,
    { username, age, email },
    { new: true }
  );

  if (!updatedUser) {
    return res.status(404).json({
      msg: "User not found",
    });
  }

  res.status(200).json(updatedUser);
});

app.post("/user", async function(req, res) {

    const username = req.body.username;
    const password = req.body.password;
    const age = req.body.age;
    const email = req.body.email;

    const newUser = await User.create({username, password, age, email});

    res.status(201).json(newUser);
})

app.delete("/user", async function (req, res) {
  const { id } = req.body;

  const deletedUser = await User.findByIdAndDelete(id);

  if (!deletedUser) {
    return res.status(404).json({
      msg: "User not found",
    });
  }

  res.status(200).json({
    msg: "User deleted successfully",
  });
});

app.listen(Port, () => {
  console.log(`${Port} is running!`);
});
