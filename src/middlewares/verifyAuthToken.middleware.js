import jwt from "jsonwebtoken"

const verifyTokenMiddleware = (request, response, next) => {
    let token = request.headers.authorization

    if (!token) {
        return response 
        .status(401)
        .json({ message: "Missing Authorization Token." })
    }

        jwt.verify(token, "SECRET_KEY", (error, decoded) => {
            if (error) {
                return response.status(401).json({ message: "Invalid Token."})
            }
            next()
        })

    }

export default verifyTokenMiddleware