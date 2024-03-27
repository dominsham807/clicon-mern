import { StatusCodes } from "http-status-codes"
import CustomAPIError from "./custom-error.js"

class UnauthenticatedError extends CustomAPIError {
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.FORBIDDEN
    }
}

export default UnauthenticatedError