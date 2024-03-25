import express from "express";
import {
  addUser,
  getUser,
  userLogin,
} from "../../src/api/v1/controllers/usersControllers.js";

const router = express.Router();

router.post("/usuarios", addUser); //registro de nuevos usuarios
router.post("/login", userLogin); //reciba las credenciales de un usuario y devuelva un token generado con JWT
router.get("/usuarios", getUser); //para devolver los datos de un usuario en caso de que esté autenticado

export default router;
