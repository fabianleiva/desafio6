import express from "express";
import {
  addUser,
  getUser,
  userLogin,
} from "../../src/api/v1/controllers/usersControllers.js";
import { validateLoginParameters } from "../../middlewares/validateLoginParameters.js";
import { validateRegisterParameters } from "../../middlewares/validateRegisterParameters.js";
import { reportQuery } from "../../middlewares/reportQuery.js";
import { validateToken } from "../../middlewares/validateToken.js";

const router = express.Router();

router.post("/usuarios", reportQuery, validateRegisterParameters, addUser);
router.post("/login", reportQuery, validateLoginParameters, userLogin);
router.get("/usuarios", reportQuery, validateToken, getUser);

export default router;
