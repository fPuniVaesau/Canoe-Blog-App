import bcrypt from "bcrypt";

const saltRounds = 10;

//we are creating a helper function to hash users porvided passowrds before creating and saving to the database.
export const hashPassword = async (password) => {
  const generatedSaltRounds = await bcrypt.genSalt(saltRounds);
  console.log(generatedSaltRounds);
  return await bcrypt.hash(password, generatedSaltRounds);
}