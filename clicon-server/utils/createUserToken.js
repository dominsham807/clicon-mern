const createUserToken = (user) => {
    return {
        userId: user._id,
        name: user.lastName + " " +user.firstName,
        role: user.role 
    }
}

export default createUserToken