class CustomError extends Error {
    constructor(message) {
        super(message)
        this.name = 'Custom Error'
        Error.captureStackTrace(this, this.constructor)
    }
}
function one() {
    two()
}
function two() {
    three()
}
function three() {
    throw new CustomError('Something went wrong!!!')
}
try {
    one()
}
catch (error) {
    console.error(error.stack)
}