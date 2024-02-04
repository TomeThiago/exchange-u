const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE,
  auth: {
    user: process.env.SMTP_AUTH_USER,
    pass: process.env.SMTP_AUTH_PASSWORD,
  },
});

module.exports = {
  async sendEmail({ email, subject, body }) {
    try {
      await transporter.sendMail({
        from: process.env.SMTP_SENDER,
        to: email,
        subject: subject,
        text: body,
        html: body,
      });
    } catch (e) {
      console.log(e);
    }
  },
};
