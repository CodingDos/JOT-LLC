import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// for development purposes
export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body; //destructor the info sent from FE

    //Check to see if unique username is taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    //Check if password reaches minimum length
    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters long" });
    }

    //Once password passes length check then it will hash
    const password_digest = await bcrypt.hash(
      password,

      Number(process.env.SALT_ROUNDS)
    );
    console.log(process.env.SALT_ROUNDS);

    //Creates new user
    const user = new User({
      username,
      email,
      password_digest,
    });

    await user.save();

    const payload = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    const token = jwt.sign(payload, process.env.TOKEN_KEY);
    console.log(token);
    res.status(201).json({ token });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username }).select(
      "username email password_digest"
    );
    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        id: user._id,
        username: user.username,
        email: user.email,
        exp: parseInt(exp.getTime() / 1000),
      };

      const token = jwt.sign(payload, TOKEN_KEY);
      res.status(201).json({ token });
    } else {
      res.status(401).send("Invalid Credentials");
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
  // try {
  //   const { username, password } = req.body; //Obtain username and password from FE
  //   if (username) {
  //     return res.json(username);
  //   }

  //   // Check if the user exists in the database
  //   const user = await User.findOne({ username: username }).select(
  //     "username email password_digest"
  //   );

  //   // Check if the user object is found
  //   // if (!user) {
  //   //   return res.status(401).json({ message: "Invalid username or password" });
  //   // }

  //   //First, check if both username and password were filled in
  //   // if (!username || !password) {
  //   //   return res.status(400).json({ message: "Please fill out all fields" });
  //   // }

  //   // Then check if the user exists
  //   // if (!user) {
  //   //   return res.status(401).json({ message: "Invalid username or password" });
  //   // }

  //   // Will compare password sent from request to the user encoded password digest
  //   if (await bcrypt.compare(password, user.password_digest)) {
  //     const payload = {
  //       id: user._id,
  //       username: user.username,
  //       email: user.email,
  //     };

  //     const token = jwt.sign(payload, process.env.TOKEN_KEY);
  //     res.status(201).json({ token });
  //   } else {
  //     res.status(401).send("Invalid Credentials");
  //   }
  // } catch (error) {
  //   console.log(error.message);
  //   res.status(500).json({ error: error.message });
  // }
};

export const verify = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, TOKEN_KEY);
    if (payload) {
      res.json(payload);
    }
  } catch (error) {
    console.log(error.message);
    res.status(401).send("Not Authorized");
  }
};

//ADMIN
export const getUsers = async (req, res) => {
  try {
    const oneUser = await User.find();
    res.status(201).json(oneUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
