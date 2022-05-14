import { Router } from "express"
import { createUserController, deleteUserController, loginUserController, updatedUserController, profileUserController, allUsersControllers } from "../controllers"
import verifyEmailDisponibility from "../middlewares/verifyEmailDisponibility.middleware"
import verifyAuthToken from "../middlewares/verifyAuthToken.middleware"
import verifyUserType from "../middlewares/verifyUserType.middlewares"

const router = Router()

router.post("/users", verifyEmailDisponibility, createUserController)
router.post("/login", loginUserController)
router.get("/users", verifyUserType, allUsersControllers)
router.get("/users/profile", verifyAuthToken, verifyUserType, profileUserController)
router.patch("/users/:id", verifyAuthToken, verifyUserType, updatedUserController)
router.delete("/users/:id", verifyAuthToken, verifyUserType, deleteUserController)

export default router