import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PasswordReset } from './password-reset.entity';

@Injectable()
export class PasswordResetService {
  constructor(
    @InjectRepository(PasswordReset)
    private passwordResetRepository: Repository<PasswordReset>,
  ) {}

  async createPasswordResetRequest(
    email: string,
    token: string,
  ): Promise<void> {
    const passwordReset = this.passwordResetRepository.create({
      email,
      token,
    });
    await this.passwordResetRepository.save(passwordReset);
  }

  async markPasswordResetAsUsed(email: string): Promise<void> {
    await this.passwordResetRepository.update({ email }, { used: true });
  }
}
