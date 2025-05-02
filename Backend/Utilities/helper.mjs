import bcrypt from "bcrypt";

//we are creating a helper function to hash users porvided passowrds before creating and saving to the database.
export const hashPassword = async (password) => {
  const saltRounds = 10;
  const generatedSaltRounds = await bcrypt.genSalt(saltRounds);
  console.log(generatedSaltRounds);
  const hashedPassword =  await bcrypt.hash(password, generatedSaltRounds);
  return hashedPassword;
}