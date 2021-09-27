var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nguyencongquangnhat4@gmail.com',
    pass: 'dqyo ghbo dvrb gjzm'
  }
});

var mailOptions = {
  from: 'nguyencongquangnhat4@gmail.com',
  to: 'nhatncq@rikkeisoft.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 