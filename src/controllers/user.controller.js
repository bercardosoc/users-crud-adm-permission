import createUserService from "../services/createUser.service";
import loginUserService from "../services/loginUser.service"

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

export { createUserController, loginUserController }