const messages = [
  "Alberth",
  "Carlos",
  "Viviana",
  "Pedro",
  "Camila",
  "Jorge",
  "Eduardo",
  "Felipe"
];

const randomMsg = () => {
  const message = messages [Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };