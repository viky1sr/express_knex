class ApiError {
    constructor(code, message) {
        this.message = message ;
        this.code = code;
    }

    static badRequest(msg){
        return new ApiError(422, msg);
    }
}

module.exports = ApiError;