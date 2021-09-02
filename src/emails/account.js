const sgMail = require("@sendgrid/mail");

const sendgridAPIKey =
  "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";

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "gabriel3212006@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "gabriel3212006@gmail.com",
    subject: "Sorry to see you go",
    text: `Goodbye, ${name}. I hope to see you back sometime soon.`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
}
