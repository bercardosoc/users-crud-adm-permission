import { Router } from "express"
import createUserController from "../controllers/createUser.controller"
import loginUserController from "../controllers/loginUser.controller"
import verifyEmailDisponibility from "../middlewares/verifyEmailDisponibility.middleware"

const router = Router()

router.post("/users", verifyEmailDisponibility, createUserController)
router.post("/login", loginUserController)
router.get("/users")
router.get("/users/profile")
router.patch("/users/:id")
router.delete("/users/:id")

export default router