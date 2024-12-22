import bcrypt from "bcrypt";

async function generate_hash(plain_password: string) {
  const result = await bcrypt.hash(plain_password, 0);
  console.log(result);
}

generate_hash("admin");

async function compare(plain_password:string, password_hash: string){
  const result = await bcrypt.compare(plain_password, password_hash)
  console.log(`A senha é: ${result ? "Verdadeira" : "Falsa"}`);
}

compare("admin","$2b$10$hoVYpHIloDBkwj4EMld5R.1lcc124YwWKcuvEI6FIwc41BDjl6yaq")