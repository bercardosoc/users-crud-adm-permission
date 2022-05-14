import { 
    createUserService, 
    loginUserService, 
    updateUserService, 
    deleteUserService, 
    profileUserService,
    allUsersService } from "../services"

import jwt from "jsonwebtoken"
import 'dotenv/config' 

const createUserController = async (request, response) => {
    
    const { name, email, password } = request.body

    const user = await createUserService(name, email, password)

    return response.json(user)
}

const loginUserController = (request, response) => {
    const { email, password } = request.body

    const userLogin = loginUserService(email, password)

    return response.json(userLogin)
}

const updatedUserController = (request, response) => {
    const { id } = request.params
    const { name, email } = request.body

    const updatedUser = updateUserService(id, name, email)

    return response.json(updatedUser)
}

const deleteUserController = (request, response) => {
    const { id } = request.params

    const deletedUser = deleteUserService(id)

    return response.json(deletedUser)
}
 
const profileUserController = (request, response) => {
    
    let token = request.headers.authorization
    const decoded = JSON.stringify(jwt.verify(token, "SECRET_KEY"))
    let userEmail = decoded.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi)
    
    const usersProfile = profileUserService(userEmail)

    return response.json(usersProfile)
}

const allUsersControllers = (request, response) => {
    
    const users = allUsersService()

    return response.json(users)
}

export { 
    createUserController, 
    loginUserController, 
    updatedUserController, 
    deleteUserController, 
    profileUserController,
    allUsersControllers 
}

