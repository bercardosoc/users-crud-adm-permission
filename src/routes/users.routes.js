import { Router } from "express"
import { createUserController, deleteUserController, loginUserController, updatedUserController } from "../controllers"
import verifyEmailDisponibility from "../middlewares/verifyEmailDisponibility.middleware"
import verifyAuthToken from "../middlewares/verifyAuthToken.middleware"

const router = Router()

router.post("/users", verifyEmailDisponibility, createUserController)
router.post("/login", loginUserController)
router.get("/users")
router.get("/users/profile")
router.patch("/users/:id", verifyAuthToken, updatedUserController)
router.delete("/users/:id", verifyAuthToken, deleteUserController)

export default router