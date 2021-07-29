const {body} = require('express-validator')


exports.validationCheck = [
    body('email','Please enter a valid email ').isEmail(),
    body('password','please should be at least 6 characters').isLength({min:6})
]

