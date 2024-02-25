const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USERNAME,
    pass: process.env.PASSWORD,
  },
});

// async..await is not allowed in global scope, must use a wrapper
const mailer = async (email, subject, text) => {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `User Authentication App ${process.env.USERNAME}`, // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
    html: `<b><h1>CONGRATULATIONS!!</h1><br>${text}</b>`, // html body
  });

  return info;

  //
};

module.exports = { mailer };
