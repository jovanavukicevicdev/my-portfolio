import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Create transporter using Gmail's SMTP and app password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Set up email options
    const mailOptions = {
      from: email, // The user's email address (who is submitting the form)
      to: process.env.GMAIL_USER, // My Gmail address (where the email will be sent)
      subject: `New Message from ${name}: ${subject}`,
      text: `Message from: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Error sending message', error });
    }
  } else {
    // If the request method is not POST, send a 405 Method Not Allowed
    res.status(405).json({ message: 'Method not allowed' });
  }
}
