const nodemailer = require("nodemailer")

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method == "POST") {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'beqamaisuradze912@gmail.com',
        pass: 'comacuttuzgipxfv'
      }
    });
    
    // Compose and send the email
    const mailOptions = {
      from: `${req.body.name} <${req.body.email}>`,
      to: 'beqamaisuradze912@gmail.com',
      subject: `Portfolio Response from ${req.body.name}`,
      text: `${req.body.message}`
    };

    const mailOptions2 = {
      from: 'Beka Maisuradze <beqamaisuradze912@gmail.com>',
      to: `${req.body.email}`,
      subject: 'Thank you for your Response',
      text: `Hi ${req.body.name} , thanks for your Response. I will contact you as soon as I can`
    };
    
    transporter.sendMail(mailOptions, function(error: Error, info: { response: any; }) {
      if (error) {
        console.log('Error occurred:', error.message);
      } else {
        console.log('Email sent successfully!', info.response);
      }
    });

    transporter.sendMail(mailOptions2, function(error: Error, info: { response: any; }) {
      if (error) {
        console.log('Error occurred:', error.message);
      } else {
        console.log('Email sent successfully!', info.response);
      }
    });
  }

  
}
