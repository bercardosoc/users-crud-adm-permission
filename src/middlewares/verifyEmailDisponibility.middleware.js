import users from "../database"

const verifyEmailDisponibility = (request, response, next) => {
    const { email } = request.body

    const emailAlreadyTaken = users.find((user) => user.email === email)

    if (emailAlreadyTaken) {
        return response
        .status(400)
        .json({
            message: "This email is already taken"
        })
    }
    next()
}

export default verifyEmailDisponibility