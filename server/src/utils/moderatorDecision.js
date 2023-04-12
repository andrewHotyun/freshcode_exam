const nodemailer = require('nodemailer'); // Цей рядок підключає бібліотеку Nodemailer для відправки електронної пошти

module.exports.sendMailFromModerator = async (data) => { // Це експортує функцію з модуля з іменем sendMailFromModerator. Ця функція приймає об'єкт data як параметр і повертає обіцянку
  const {description, email, title} = data; // Цей рядок розгортає об'єкт data і витягує з нього властивості command, email та title
  const moderatorEmail = 'kapitansoup200047@gmail.com'; // Цей рядок визначає email-адресу модератора

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: moderatorEmail,
        pass: '123456789'
      }
    }); // Цей рядок створює об'єкт транспорту Nodemailer з використанням сервісу Gmail та відповідних облікових даних модератора

    const mailOptions = {
      from: moderatorEmail,
      to: email,
      subject: description === 'pending' ? 'Offer accepted by the moderator' : 'Offer bloked by the moderator',
      text: `Your offer of the Project ${title} has been ${description === 'pending' ? 'accepted' : 'blocked'} by the moderator`,
    }; // Цей рядок визначає параметри для електронної пошти, включаючи адресу відправника, адресу отримувача, тему та текст повідомлення

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

  }; // Цей рядок відправляє електронне повідомлення з використанням об'єкту транспорту та параметрів електронної пошти. Коли відправлення успішне, він виводить повідомлення у консоль з підтвердженням, що лист був успішно відправлений. Якщо сталася помилка, вона виводиться у консоль