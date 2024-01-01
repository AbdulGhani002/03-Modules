function encrypt() {
  return "Data is encrypted";
}

export function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`Sending ${encryptedData} to ${url}`);
}