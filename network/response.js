exports.success = (req, res, message, status) => {
  //
  res.status(status || 200).send({
    error: "",
    message,
  });
};

exports.error = (req, res, error, status, detail) => {
  //
  let message = "ERROR: " + detail;
  console.error(message);
  res.status(status || 500).send({
    error,
    message: "",
  });
};
