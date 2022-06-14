exports.handler = async function (event, context, callback) {
  // Pulling out the payload from the body
  const { payload } = JSON.parse(event.body);

  console.log("PayLoad from Function", payload);

  callback(null, {
    statusCode: 200,
  });
};
