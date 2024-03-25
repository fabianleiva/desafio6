const validateRegisterParameters = (req, res, next) => {
  const { email, password, rol, lenguage } = req.body;
  if (!email || !password || !rol || !lenguage) {
    return res
      .status(400)
      .json({
        error:
          "Email, password, rol y lenguage deben estar presentes para realizar el registro",
      });
  }
  next();
};

export { validateRegisterParameters };
