/**
 * Created by Lata Tiwari on 7/27/2017.
 */

let nodemailer = require('nodemailer');

let transporter, sendingMail;

transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'lata.tiwari@tothenew.com',
        pass: 'miyanhaeabha'
    },
    logger: true, // log to console
    debug: true // include SMTP traffic in the logs
});

sendingMail = ( params ) => {
        let options = {
            from : 'lata.tiwari@tothenew.com',
            to : params.to,
            subject : "chart",
            html : params.html
        };

        transporter.sendMail(options);
};

export default sendingMail;

