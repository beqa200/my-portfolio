const nodemailer = require("nodemailer");

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  error?: string;
  message?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == "POST") {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "beqamaisuradze912@gmail.com",
        pass: "comacuttuzgipxfv",
      },
    });

    // Compose and send the email
    const mailForMe = {
      from: `${req.body.name} <${req.body.email}>`,
      to: "beqamaisuradze912@gmail.com",
      subject: `Portfolio Response from ${req.body.name}`,
      text: `${req.body.message}`,
    };

    const mailForUser = {
      from: "Beka Maisuradze <beqamaisuradze912@gmail.com>",
      to: `${req.body.email}`,
      subject: "Thank you for your Response",
      text: `Hi ${req.body.name} , thanks for your Response. I will contact you as soon as I can`,
    };

    transporter.sendMail(
      mailForMe,
      function (error: Error, info: { response: any }) {
        if (error) {
          return res.status(500).json({ error: "Failed to send email" });
        } else {
          console.log("Email sent successfully!", info.response);
        }
      }
    );

    transporter.sendMail(
      mailForUser,
      function (error: Error, info: { response: any }) {
        if (error) {
          return res.status(500).json({ error: "Failed to send email" });
        } else {
          return res.status(200).json({ message: "Emails sent successfully" });
        }
      }
    );
  }
}
