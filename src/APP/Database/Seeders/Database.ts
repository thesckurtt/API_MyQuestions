import { Questions } from "./Questions.js";
import { User } from "./User.js";

async function run_seeds() {
  // Questions();
  // User();
}
const start = performance.now();
run_seeds();
const end = performance.now();
console.log(`Execution time: ${end - start} ms`);
