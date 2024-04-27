const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USERNAME,
    pass: process.env.PASSWORD,
  },
});

// async..await is not allowed in global scope, must use a wrapper
const mailer = async (email, subject, message) => {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"Menshion Store" ${process.env.USERNAME}`, // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    text: message, // plain text body
    html: `<b>${message}</b>`, // html body
  });

  return info;
};

module.exports = { mailer };
