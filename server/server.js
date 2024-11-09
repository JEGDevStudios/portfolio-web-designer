// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Configura el transportador de nodemailer
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // O usa el servicio de correo que prefieras
        auth: {
            user: process.env.EMAIL_USER, // Tu correo electrónico
            pass: process.env.EMAIL_PASS,  // Tu contraseña de correo electrónico
        },
    });

    // Configura el correo electrónico
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, // Tu correo electrónico para recibir mensajes
        subject: `Nuevo mensaje de ${name}`,
        text: `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`
    };

    // Envía el correo electrónico
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ error: 'Error al enviar el correo electrónico' });
        }
        res.status(200).json({ message: 'Correo enviado con éxito' });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
