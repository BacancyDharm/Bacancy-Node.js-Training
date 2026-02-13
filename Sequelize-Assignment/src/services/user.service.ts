import { User } from "../models/user.model";
import bcrypt from "bcrypt";
interface CreateUserInput {
  name: string;
  email: string;
  password: string;
}

interface UserData{
  email: string;
  password: string;
}

const createUser = async (data: CreateUserInput) => {
  const { name, email, password } = data;

  const existingUser = await User.findOne({
    where: {
      email,
    },
  });

  if (existingUser){
    throw new Error("User already exists");
  }

  if(password.length < 8 || password.length > 20){
    throw new Error("Password must be between 8 and 20 characters");
  }

  const hashedPassword = await bcrypt.hash(password, 5);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  const userData = user.toJSON();

  let {password: _password, ...safeUser} = userData;

  return safeUser;
};

const userSignIn = async (data: UserData) => {
  const {email, password} = data
  const user = await User.findOne({
    where: {
      email,
    }
  });
  if(!user){
    throw new Error("User does not exist");
  }
  const comapredPassword = await bcrypt.compare(password, user.password);
  if(user && !comapredPassword){
    throw new Error("Invalid password");
  }

  const {password: _password, ...safeUser} = user.toJSON();

  return safeUser;
};

const deleteUser = async () => {
}

const editUser = async () => {
}

export {
  createUser,
  userSignIn,
  deleteUser,
  editUser
}