import nodemailer from 'nodemailer';

function email(email, subject, name) {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'harshitasisodiya94@gmail.com',
            pass: 'ucuskkfemmrbifir'
        }
    });

    var mailOptions = {
        from: 'harshitasisodiya94@gmail.com',
        to: email,
        subject: subject,
        text: "Welcome in APNI DUKAAN" + name + "Thanks for Your Contact , We had Successfully Recieved Your Message."
    };

    transporter.sendMail(mailOptions, function (error, info) {
        error ? console.log(error) : response.send("Email has been sent to the user")
    });
    return true;
}

export default email;