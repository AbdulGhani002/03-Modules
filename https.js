import {send} from "./modules/request.mjs";
import {read} from "./modules/response.mjs";

function request(url, data) {
  send(url, data);

  return read();
}

const response = request("https://google.com", "Hello Motherfucker");

console.log(response);
console.log(request("https://yahoo.com", "I am Abdul Ghani"));
