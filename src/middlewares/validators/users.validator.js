const Joi = require('joi');

const userSchemaValidation = (req, res, next) => {

    const userValidationSchema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email(),
        password: Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$')).required(),
        tel: Joi.number(),
        adress: Joi.string().required(),
        isAdmin: Joi.boolean().required()
        
    });
    
    const validation = userValidationSchema.validate(req.body);

    if (validation.error) {
        return res.status(400).send({
            error: validation.error
        })
    }

    next();

}


module.exports = userSchemaValidation;