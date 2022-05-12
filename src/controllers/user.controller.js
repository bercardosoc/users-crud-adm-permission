import createUserService from "../services/createUser.service";
import deleteUserService from "../services/deleteUser.service";
import loginUserService from "../services/loginUser.service"
import updateUserService from "../services/updateUser.service";

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

export { createUserController, loginUserController, updatedUserController, deleteUserController }

