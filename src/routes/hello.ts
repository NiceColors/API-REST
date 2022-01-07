import express, { Router } from "express";
import userController from "../app/controllers/userController";
import authController from "../app/controllers/authController";
import authMiddleware from "../app/middlewares/authMiddleware";
// import { checkJwt } from "../app/middlewares/checkMiddleware";

const app = express();
const router = Router();

app.use(express.json());

router.post("/", userController.create);
router.get("/", userController.index);
// router.get("/", authMiddleware, userController.index);

router.get("/login", authController.login);

export const hello: Router = router;
