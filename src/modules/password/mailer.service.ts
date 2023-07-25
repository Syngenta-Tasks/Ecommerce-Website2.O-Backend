import { Injectable } from '@nestjs/common';
import { url } from 'inspector';
import nodemailer from 'nodemailer';
import { createTransport, Transporter } from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class MailerService {
  private transporter: Transporter;
  private baseUrl: string;

  constructor() {
    this.transporter = createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 587,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });
    this.baseUrl = process.env.BASE_URL;
  }

  async sendPasswordResetEmail(email: string, token: string): Promise<void> {
    const url = `${this.baseUrl}/reset/${token}`;

    const mailOptions: nodemailer.SendMailOptions = {
      from: process.env.MAIL_SENDER,
      to: email,
      subject: 'Password Reset',
      html: `Click <a href="${url}">here</a>to reset password!`,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
