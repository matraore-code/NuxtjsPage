const nodemailer = require('nodemailer');
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

const sendEmail = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new HttpError("Invalid Inputs, Please check Your Data!", 442);
        return next(error);
    }
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, 
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    
      let info = await transporter.sendMail({
        from: '<foo@example.com>',
        to: "aminelachheb456@gmail.com",
        subject: "Message From Contact Page:", // Subject line
        text: req.body.message, // plain text body
        html: `<b>${req.body.message}</b>`, // html body
      });
    
      console.log("Message sent: %s", info.messageId);

      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.status(200).json({ message: "Message Send With Success." });
};

exports.sendEmail = sendEmail;