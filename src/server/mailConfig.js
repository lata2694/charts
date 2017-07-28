/**
 * Created by Lata Tiwari on 7/27/2017.
 */

let nodemailer = require('nodemailer');

let transporter, sendingMail;

// message = {
//     from: 'lata.tiwari@tothenew.com',
//     to : params.to,
//     subject : params.subject,
//     html: params.html,
// };

transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'lata.tiwari@tothenew.com',
        pass: 'miyanhaeabha'
    },
    logger: true, // log to console
    debug: true // include SMTP traffic in the logs
});

// transporter.sendMail( message, (error, info) => {
//     if (error) {
//         return console.log(error);
//     }
//     console.log('Message %s sent: %s', info.messageId, info.response);
// });


sendingMail = ( params ) => {
    console.log("-------------inside sendingMail------------------------------------------------------------");
    // this.from = 'lata.tiwari@tothenew.com';

    // this.send = function() {
        let options = {
            from : 'lata.tiwari@tothenew.com',
            to : params.to,
            subject : "chart",
            html : params.html
        };

        transporter.sendMail(options);
    // }
};

export default sendingMail;

