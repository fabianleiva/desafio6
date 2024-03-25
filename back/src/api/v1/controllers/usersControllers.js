import jwt from "jsonwebtoken";
import {
  userRegister,
  verifyUser,
  getUserByEmail,
} from "../models/usersQueries.js";

const addUser = async (req, res) => {
  try {
    const user = req.body;
    await userRegister(user);
    res.send("Usuario registrado con éxito");
  } catch (error) {
    res.status(500).send(error);
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    await verifyUser(email, password);
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: 60,
    });
    res.send({ token });
  } catch (error) {
    console.log(error);
    res.status(error.code || 500).send(error);
  }
};

const getUser = async (req, res) => {
  try {
    // Extraer el token de autorización del encabezado de la solicitud
    const token = req.headers.authorization.split(" ")[1];
    // Verificar el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Utilizar la información del token para obtener los datos del usuario
    const user = await getUserByEmail(decoded.email);

    res.status(200).json([user]);
  } catch (error) {
    console.log(error);
    res.status(error.code || 500).send(error);
  }
};

export { addUser, userLogin, getUser };
