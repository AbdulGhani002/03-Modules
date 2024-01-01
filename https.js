import {send} from "./modules/request.mjs";
import {read} from "./modules/response.mjs";

function request(url, data) {
  send(url, data);

  return read();
}

const response = request("https://google.com", "Hi");

console.log(response);
