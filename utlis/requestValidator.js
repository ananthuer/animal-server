const {validationResult} = require('express-validator');
const path = require('path')
const readXlsxFile = require('read-excel-file/node')

const sanitizeError = (errors, req) => {
    let error_array = {};
   
    errors.forEach(error => {
        if (error.msg != null) {
            error_array[error.param] = error.msg;
        } 
       
    });

    return error_array;
}

validateRequest = req => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed');
        error.statusCode = 422;
        error.data = sanitizeError(errors.array(), req);
        throw error;
    }
}

processError = (err, next) => {
    if (!err.statusCode) {
        err.statusCode = 500;
    }

    next(err);
}

exports.dummy = () => {

}

exports.handleRequest = async (req, next, body) => {
    try {

        validateRequest(req);

        await body();

    } catch (err) {
        processError(err, next);
    }
}

