const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = Joi.object({
            name: Joi.string().required(),
            lastname: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string()
                .pattern(/^[a-zA-Z0-9]{8,32}$/)
                .required(),
            status: Joi.string().optional()
        })

        const { error } = schema.validate(req.body)

        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    return res.status(400).send({
                        error: 'รูปแบบอีเมลไม่ถูกต้อง'
                    })
                case 'password':
                    return res.status(400).send({
                        error: 'รหัสผ่านต้องเป็นตัวอักษรภาษาอังกฤษหรือตัวเลข และมีความยาว 8-32 ตัวอักษร'
                    })
                default:
                    return res.status(400).send({
                        error: 'ข้อมูลในการลงทะเบียนไม่ถูกต้อง'
                    })
            }
        }

        next()
    }
}
