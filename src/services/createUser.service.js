import { v4 as uuidv4 } from "uuid"
import users from "../database"
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

export default createUserService