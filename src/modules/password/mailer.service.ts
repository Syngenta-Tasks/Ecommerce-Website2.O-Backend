import { Injectable } from '@nestjs/common';
import nodemailer from 'nodemailer';
import { createTransport, Transporter } from 'nodemailer';
// import * as dotenv from 'dotenv';

// dotenv.config();

@Injectable()
export class MailerService {
  private transporter: Transporter;
  // private baseUrl: string;

  constructor() {
    this.transporter = createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 587,
      auth: {
        // user: process.env.MAILTRAP_USER,
        // pass: process.env.MAILTRAP_PASSWORD,

        user: 'fece9a0822b8b2',
        pass: '1636061bb6fa64',

      },
    });
    // this.baseUrl = process.env.BASE_URL;
  }

  async sendPasswordResetEmail(email: string, token: string): Promise<void> {
    const url = `http://localhost:3000/reset/${token}`;

    const mailOptions: nodemailer.SendMailOptions = {
      // from: process.env.MAIL_SENDER,
      from: 'nandita07@gmail.com',
      to: email,
      subject: 'Password Reset',
      html: `Click <a href="${url}">here</a>to reset password!`,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
