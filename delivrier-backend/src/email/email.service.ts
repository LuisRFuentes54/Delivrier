import { Injectable, Inject } from '@nestjs/common';
import { SendGridService } from "@anchan828/nest-sendgrid";
import { Logger } from 'winston';

@Injectable()
export class EmailService {
  constructor(
    private readonly sendGrid: SendGridService,
    @Inject('winston')
    private readonly logger: Logger,
  ) {}

  async sendEmail(emailTo:string, emailFrom: string, template: string): Promise<void>{
    await this.sendGrid.send({
      to: emailTo,
      from: emailFrom,
      subject: 'Delivrier',
      templateId: template,
    });
  }

  async sendWelcomeEmail(email: string): Promise<void> {
    this.logger.info(`Enviando el correo de bienvenida al correo [${email}]`);
    await this.sendEmail(email,process.env.SENDGRID_ADDRESS_FROM,process.env.SENDGRID_WELCOME_EMAIL);
  }
}
