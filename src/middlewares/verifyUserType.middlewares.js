import users from "../database";

const verifyUserType = (request, response, next) => {

    const isNotAdm = users.find((user) => user.isAdm === false)

    if (isNotAdm) {
        return response
        .status(401)
        .json({
            message: "You should be an adm to see this route"
        })
    }
    next()
}

export default verifyUserType