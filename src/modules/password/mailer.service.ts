import { Injectable } from '@nestjs/common';
import nodemailer from 'nodemailer';
import { createTransport, Transporter } from 'nodemailer';

@Injectable()
export class MailerService {
  private transporter: Transporter;

  constructor() {
    this.transporter = createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 587,
      auth: {
        user: 'fece9a0822b8b2',
        pass: '1636061bb6fa64',
      },
    });
  }

  async sendPasswordResetEmail(email: string, token: string): Promise<void> {
    const resetPasswordUrl = `http://localhost:3000/reset/${token}`;

    const mailOptions: nodemailer.SendMailOptions = {
      from: 'nandita07@gmail.com',
      to: email,
      subject: 'Password Reset',
      text: `Reset your password using the following link: ${resetPasswordUrl}`,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
