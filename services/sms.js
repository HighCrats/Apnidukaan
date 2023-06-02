import twilio from 'twilio';

function sms(name, contact) {
    var sid = "AC4a68c6a838a29253a49a1f23e8f318c8";
    var auth_token = "334d0e67dcdbb3219e849b113c559ab7";

    twilio(sid, auth_token).messages.create({
        from: "+15674853774",
        to: "+917879634560",
        body: " Hello , This side " + name + " from Indore. Actually I want to buy your product so can we talk when you are free. It is my contact number " + contact
    }).then(message => {
        console.log("Message Sent Successfully");
    }).catch(err => {
        console.log(err);
    });
}

export default sms;
