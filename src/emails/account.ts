import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendWelcomeEmail = (email: string, name: string) => {
  sgMail.send({
    to: email,
    from: "gabriel3212006@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

export const sendCancellationEmail = (email: string, name: string) => {
  sgMail.send({
    to: email,
    from: "gabriel3212006@gmail.com",
    subject: "Sorry to see you go",
    text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
  });
};
