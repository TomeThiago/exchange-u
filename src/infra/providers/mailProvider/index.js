const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  secure: false,
  auth: {
    user: "195f20e40b1ee3",
    pass: "f04d0c78f70721",
  },
});

module.exports = {
  async sendEmail({ email, subject, body, html }) {
    const info = await transporter.sendMail({
      from: "no-reply@exchange.com.br",
      to: email,
      subject: subject,
      text: body,
      html: html,
    });

    console.log("Message sent: %s", info.messageId);
  },
};
