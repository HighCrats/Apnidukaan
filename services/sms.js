import twilio from 'twilio';

function sms(name, contact) {
    var sid = "AC4a68c6a838a29253a49a1f23e8f318c8";
    var auth_token = "c83523fba50ca40790c6b0374dc9155c";

    twilio(sid, auth_token).messages.create({
        from: "+15674853774",
        to: "+919301184511",
        body: " Hello , This side " + name + " from Indore. Actually I want to buy your product so can we talk when you are free. It is my contact number " + contact
    }).then(message => {
        console.log("Message Sent Successfully");
    }).catch(err => {
        console.log(err);
    });
}

export default sms;
