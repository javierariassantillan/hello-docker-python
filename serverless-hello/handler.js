// handler.js
// Función Serverless que responde al GET /hello?name=Ana

module.exports.hello = async (event) => {
  const name =
    event?.queryStringParameters?.name && event.queryStringParameters.name.trim() !== ""
      ? event.queryStringParameters.name
      : "mundo";

  const message = `Hola ${name} desde Serverless`;

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  };
};
