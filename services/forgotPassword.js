import nodemailer from 'nodemailer';

function forgotPassword(email, subject, name, otp) {

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
        text: " Hey Dear, " + name + " This is the mail regarding to Your forgot password. " + " Your OTP is :- " + " " + otp
    };

    transporter.sendMail(mailOptions, function (error, info) {
        error ? console.log(error) : response.send("Email has been sent to the user")
    });
    return true;
}

export default forgotPassword;