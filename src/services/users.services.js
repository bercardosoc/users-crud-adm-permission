import { v4 as uuidv4 } from "uuid"
import users from "../database"
import jwt from "jsonwebtoken"
import * as bcrypt from "bcryptjs"

const createUserService = async (name, email, password) => {

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = {
        id: uuidv4(),
        name,
        email,
        isAdm: false,
        password: hashedPassword,
        createdOn: Date.now().toString(),
        updatedOn: Date.now().toString()
    }

    users.push(newUser)

    return newUser

}

const loginUserService = (email, password) => {
    const user = users.find((element) => element.email === email)

    if (!user) {
        return "Email ou senha inválidos"
    }

    const passwordMatch = bcrypt.compareSync(password, user.password)

    if (!passwordMatch) {
        return "Email ou senha inválidos"
    }

    const token = jwt.sign({ email: email }, "SECRET_KEY", { expiresIn: "1h" })

    return { token }
}

const updateUserService = (id, name, email) => {
    const userUpdated = {
        id,
        name,
        email,
        updatedOn: Date.now().toString(),
    }

    const userIndex = users.findIndex((e) => e.id === id)

    if (userIndex === -1) {
        return "User not found"
    }

    users[userIndex] = {...users[userIndex], ...userUpdated}

    return users[userIndex]
}

const deleteUserService = (id) => {

    const userIndex = users.findIndex((e) => e.id === id)

    if (userIndex === -1) {
        return "User not found"
    }

    users.splice(userIndex, 1)

    return "Usuário excluído"
}

const profileUserService = (userEmail) => {
    
    return `Perfil do usuário de id ${userEmail}`   
}

export { createUserService, loginUserService, updateUserService, deleteUserService, profileUserService }