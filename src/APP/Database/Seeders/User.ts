import bcrypt from "bcrypt";

async function encrypt(plain_password: string) {
  const result = await bcrypt.hash(plain_password, 4);
  console.log(result);
  return result;
}

async function compare(plain_password: string) {
  const start = performance.now();

  const result = await bcrypt.compare(
    plain_password,
    await encrypt(plain_password)
  );

  const end = performance.now();
  
  console.log(result);
  console.log(`Execution time: ${end - start} ms`);
}

compare("admin");
