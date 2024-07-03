import { NextResponse } from 'next/server';
import { SMTPClient } from 'emailjs';

const client = new SMTPClient({
  user: process.env.SMTP_USER,
  password: process.env.SMTP_PASSWORD,
  host: process.env.SMTP_HOST,
  ssl: false,
  port: process.env.SMTP_PORT,
});

export async function POST(req, res) {
  try {
    const { email, subject, message } = await req.json();
    console.log('Email:', email, 'Subject:', subject, 'Message:', message);

    const sendEmail = await new Promise((resolve, reject) => {
      client.send(
        {
          text: message,
          from: process.env.FROM_EMAIL,
          to: email,
          subject: subject,
        },
        (err, message) => {
          if (err) reject(err);
          else resolve(message);
        }
      );
    });

    console.log('EmailJS Response:', sendEmail);
    return NextResponse.json(sendEmail);
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error });
  }
}
