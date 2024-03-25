import pool from "../../../../config/database/conectionDb.js";
import format from "pg-format";
import bcrypt from "bcryptjs";

const userRegister = async (user) => {
  let { email, password, rol, lenguage } = user;
  const encryptedPassword = bcrypt.hashSync(password);
  const formatQquery = format(
    "INSERT INTO usuarios (id, email, password, rol, lenguage) VALUES (DEFAULT, %L, %L, %L, %L)",
    email,
    encryptedPassword,
    rol,
    lenguage
  );
  const response = await pool.query(formatQquery);
  return response.rows;
};

const verifyUser = async (email, password) => {
  const SQLquery = "SELECT * FROM usuarios WHERE email = $1";
  const values = [email];
  const response = await pool.query(SQLquery, values);
  const usuario = response.rows[0];
  const passwordCorrecta = bcrypt.compareSync(password, usuario.password);

  if (!passwordCorrecta)
    throw {
      code: 401,
      message: "Email o contraseña incorrecta",
    };
  return usuario;
};

const getUserByEmail = async (email) => {
  const SQLquery = "SELECT * FROM usuarios WHERE email = $1";
  const values = [email];
  const response = await pool.query(SQLquery, values);
  const usuario = response.rows[0];
  return usuario;
};

export { userRegister, verifyUser, getUserByEmail };
