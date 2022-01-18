const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Telephone: ${body.tel}\r\n
  Company: ${body.company}\r\n
  Website: ${body.website}\r\n
  Message: ${body.message}
  `;

  await mail.send({
    to: "hello@gigawaffle.co.uk",
    from: "hello@gigawaffle.co.uk",
    subject: `New Contact Form Submission from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  });

  res.status(200).json({ status: "Ok" });
};
