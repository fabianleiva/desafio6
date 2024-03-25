const reportQuery = (req, res, next) => {
  console.log(`Solicitud recibida: ${req.method} ${req.url} - ${new Date()}`);
  next();
};

export { reportQuery };
