let nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: "Sashabaz1996@gmail.com",
        pass: "allo2861"
    }
});

let mailOption = {
    from: "sashabaz1996@gmail.com",
    to: "ultimate.max18@gmail.com",
    subject: "Sending e-mail",
    text: "Hello, I'am PC-master"
};
transporter.sendMail(mailOption, function(error, info){
    if (error){
        console.log(error);
    }
        else{
            console.log("E-mail sent" + info.response);


        }
    })
