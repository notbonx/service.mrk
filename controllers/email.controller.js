const nodemailer = require("nodemailer");

class EmailController {

    postEmail = async (req, res) => {
        const {study, computer, description} = req.body;
        const to = process.env.MAIL_TO;

        console.log(Boolean(+process.env.MAIL_SECURE))

        let transporter = nodemailer.createTransport({
            service: process.env.MAIL_SERVICE,
            host: process.env.MAIL_HOST,
            port: Number(process.env.MAIL_PORT),
            secure: Boolean(+process.env.MAIL_SECURE),
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
            from: process.env.MAIL_USER
        });

        await transporter.sendMail({
            from: process.env.MAIL_USER,
            to,
            subject: "Письмо в тех. поддержку",
            text: `${study} ${computer} ${description}`,
            html: `<b>${study} ${computer} ${description}</b>`,
        }, (error) => {
            if (error) {
                console.log(error);
            } else {
                res.send('Mail has bees sanded');
            }
        });

    }

}

module.exports = EmailController