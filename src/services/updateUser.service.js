import users from "../database"

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

export default updateUserService