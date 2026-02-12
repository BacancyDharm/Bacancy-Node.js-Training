import { User } from "../models/user.model";

interface CreateUserInput {
  name: string;
  email: string;
  password: string;
}

export const createUserService = async (data: CreateUserInput) => {
  const { name, email, password } = data;

  const existingUser = await User.findOne({
    where: {
      email,
    },
  });

  if (existingUser){
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  return user;
};
