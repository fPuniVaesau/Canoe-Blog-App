import bcrypt, { genSalt, hash } from "bcrypt";

//we are creating a helper function to hash users porvided passowrds before creating and saving to the database.
export const hashPassword = async(password) => {
  const saltRounds = 10;
  const salt = await genSalt(saltRounds);
  const saltedPassword = await hash(password, salt);
  return saltedPassword;
}

export const comparePassword = async(plain, hashedPassword) => {
  const results = await bcrypt.compare(plain, hashedPassword);
  return results
};