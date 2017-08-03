/**
 * Created by Lata Tiwari on 7/27/2017.
 */

let nodemailer = require('nodemailer');
let transporter, sendingMail;

transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'charts731@gmail.com',
        pass: 'igdefault@'
    },
});
sendingMail = ( params ) => {
        let options = {
            attachments: [
                {
                    filename: 'chart.png',
                    path: params.imgSrc,
                    cid: params.imgSrc,
                }
            ],
            from : 'charts731@gmail.com',
            to : params.to,
            subject : "CHARTS",
            html: `<img src="cid:${ params.imgSrc }" alt="chart is here"/>`,
        };

        transporter.sendMail(options);
};

export default sendingMail;

