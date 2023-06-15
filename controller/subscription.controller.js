import { Subscription } from "../model/subscription.model.js";


export const subscription = async (request, response, next) => {
    try {
        let takeSubscription = Subscription.create({ userId: request.body.userId, subscriptionPrice: request.body.subscriptionPrice });
        if (takeSubscription)
            return response.status(200).json({ message: "subscription taken ", status: true });
        return response.status(400).json({ message: "something went wrong ", status: false });
    } catch (error) {
        console.log(error);
        return response.status(500).json({ message: "internal server error ", status: false });
    }
}

export const expireSubscription = async (request, response, next) => {
    let subscriptionList = await Subscription.findOne({ userId: request.body.userId });
    if (today > subscriptionList.subscriptionExpiry) {
        let data = await Subscription.findOneAndDelete({ userId: request.body.userId });
    }
}

export const showSubscriptions = async (request, response, next) => {
    try {
        let subscriptionList = await Subscription.findOne({ userId: request.body.userId });
        if (subscriptionList)
            return response.status(200).json({ message: "subscription is here", status: true, subscriptionList });


        return response.status(200).json({ massage: "please take subscription first", status: false });
    } catch (error) {
        console.log(error);

        return response.status(500).json({ error: "Internal Server Error", status: false });
    }
}

export const updateBalance = async (request, response, next) => {
    try {
        let result = await Admin.updateOne(
            {
                email: "bhawnajadam9@gmail.com"

            },
            {
                balance:request.body.balance
            }
        );
        return response.status(200).json({ message: "successfully credited to the admin account .....", result, status: true });

    }
    catch (err) {
        return response.status(500).json({ message: "internal server error", status: false });

    }
}

export const sendOtp = async(request,response,next)=>{
    try{
      console.log(request.body)
          var transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
              user: 'rajputmohit2134@gmail.com',
              pass: 'drxyrqbrxikerqfn'
              }
          }); 
  
          var mailOptions = {
              from: 'rajputmohit2134@gmail.com',
              to: request.body.email,
              subject: 'Sending Email using Node.js',
              html: '<p> Kiraye Wala ..!<br/>'+request.body.otp+'</p>'
          };
        
           transporter.sendMail(mailOptions, function(error, info){
              if (error)
              console.log(error);
              else 
              console.log('Email sent: ' + info.response);
          });
      
      return response.status(200).json({message:"Otp Send successfully",status:true});
      }
      catch(err){
          console.log(err);
          return response.status(500).json({err:"internal server error",status:false});
      }
  }