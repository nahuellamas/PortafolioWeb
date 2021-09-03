const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

router.get('/' , (req, res) => {
    res.render('index');
} );

router.get('/about' , (req, res) => {
    res.render('about');
} );

router.get('/portfolio' , (req, res) => {
    res.render('portfolio');
} );

router.get('/contact' , (req, res) => {
    res.render('contact');
} );

router.post('/send-email' , (req, res) => {
    const { email, name, message } = req.body;
    contentHTML = `
        <h1>Informacion del Contacto</h1>
        <ul>
            <li>Nombre: ${name}</li>
            <li>Email: ${email}</li>
        </ul>
        <p>${message}</p>
    `;
    const cliente_id = "664192966875-m3n37er4i5ljalarac9nf09980pgrnbs.apps.googleusercontent.com"
    const cliente_secret = "ae__kY_D4ayLUCWjamawJL_5"
    const redirect_uris = "https://developers.google.com/oauthplayground";
    const refresh_token = "1//04K98PG38psxhCgYIARAAGAQSNwF-L9IrizXJwHCvyyuHnTtA2xrAiy5YTZGeu4yvV1TvDHkBBCu4HsUzhVA9Latvv3Z9HNRqXok"
    const oauth2Client = new google.auth.OAuth2(
        cliente_id,
        cliente_secret,
        redirect_uris
    );
    oauth2Client.setCredentials({
        refresh_token: refresh_token
    });

    const sendMail = async () => {
        const accessToken = await oauth2Client.getAccessToken()
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: "nahuellamas@gmail.com",
                clientId: cliente_id,
                clientSecret: cliente_secret,
                refreshToken: refresh_token,
                accessToken: accessToken
            }
        });
        const info = await transporter.sendMail({
            from: "Portafolio Web",
            to: "marketing.nahuel@gmail.com",
            subject: "Contacto desde Portafolio Web",
            html: contentHTML
        });
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
    sendMail();
    res.redirect('/');

});

module.exports = router;