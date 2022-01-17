// const mail = require("@sendgrid/mail");

// mail.setApiKey(process.env.SENDGRID_API_KEY);

// export default (req, res) => {
//   const body = JSON.parse(req.body);

//   const message = `
//     Name: ${body.name}\r\n
//     Email: ${body.email}\r\n
//     Tel: ${body.tel}\r\n
//     Company Name: ${body.companyName}\r\n
//     Website URL: ${body.siteurl}\r\n
//     Message: ${body.message}`;

//   const data = {
//     to: "hello@gigawaffle.co.uk",
//     from: "hello@gigawaffle.co.uk",
//     subject: "New Contact Form Submission!",
//     text: message,
//     html: message.replace(/\r\n/g, "<br>"),
//   };

//   mail.send(data);

//   res.status(200).json({ status: "Ok" });
// };

const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Telephone: ${body.tel}\r\n
  Company: ${body.companyName}\r\n
  Website: ${body.siteurl}\r\n
  Message: ${body.message}\r\n
  `;

  const data = {
    to: "hello@gigawaffle.co.uk",
    from: "hello@gigawaffle.co.uk",
    subject: `Email from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };

  await mail.send(data);

  res.status(200).json({ status: "Ok" });
};
