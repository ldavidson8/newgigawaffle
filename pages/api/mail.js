// const mail = require("@sendgrid/mail");

// mail.setApiKey(process.env.SENDGRID_API_KEY);

// export default async (req, res) => {
//   const body = JSON.parse(req.body);

//   const message = `
//   Name: ${body.name}\r\n
//   Email: ${body.email}\r\n
//   Telephone: ${body.tel}\r\n
//   Company: ${body.companyName}\r\n
//   Website: ${body.siteurl}\r\n
//   Message: ${body.message}\r\n
//   `;

//   const data = {
//     to: "hello@gigawaffle.co.uk",
//     from: "hello@gigawaffle.co.uk",
//     subject: `Email from ${body.name}`,
//     text: message,
//     html: message.replace(/\r\n/g, "<br />"),
//   };

//   await mail.send(data);

//   res.status(200).json({ status: "Ok" });
// };

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Telephone: ${body.tel}\r\n
    Website: ${body.website}\r\n
    Company: ${body.company}\r\n
    Message: ${body.message}\r\n
  `;

  const data = {
    to: "hello@gigawaffle.co.uk",
    from: "hello@gigawaffle.co.uk",
    subject: `Email from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };

  sgMail
    .send(data)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    })
    .catch((error) => {
      console.error(error);
    });

  return res.status(200).json({ status: "Ok" });
};
