import bcrypt, { genSalt, hash } from "bcrypt";

//we are creating a helper function to hash users porvided passowrds before creating and saving to the database.
//used in the registration router for implementation when creating a new user. Password is hashed before saving it to the database so we dont store raw passwords. Provides exta level of security.
export const hashPassword = async(password) => {
  const saltRounds = 10;
  const salt = await genSalt(saltRounds);
  const saltedPassword = await hash(password, salt);
  return saltedPassword;
}
//used in the local stategy file to help authenticate login by comparing hashed password to the password provided by the client.
export const comparePassword = async(plain, hashedPassword) => {
  const results = await bcrypt.compare(plain, hashedPassword);
  return results
};