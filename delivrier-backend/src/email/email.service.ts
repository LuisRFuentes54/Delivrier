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

  async sendWelcomeEmailSendGrid(emailTo:string, emailFrom: string, template: string, dinamicData: {}): Promise<void>{
    await this.sendGrid.send({
      to: emailTo,
      from: emailFrom,
      subject: 'Delivrier',
      templateId: template,
      dynamicTemplateData: dinamicData,
    });
  }

  async sendInvoiceEmailSendGrid(emailTo:string, emailFrom: string, template: string, dinamicData, file): Promise<void>{
    await this.sendGrid.send({
      to: emailTo,
      from: emailFrom,
      subject: 'Delivrier',
      templateId: template,
      dynamicTemplateData: dinamicData,
      attachments: [
        {
          filename: `invoice_ship_${dinamicData.ship_num}_${dinamicData.username}.pdf`,
          type: file.mimetype,
          content: file.buffer.toString("base64")
        }
      ],
    });
  }

  async sendWelcomeEmail(email: string, username: string): Promise<void> {
    this.logger.info(`[EmailService] Sending the welcome email to the email address [${email}]`);
    await this.sendWelcomeEmailSendGrid(email,process.env.SENDGRID_ADDRESS_FROM,process.env.SENDGRID_WELCOME_EMAIL,{ username: username });
  }

  async sendInvoiceByEmail(file, email: string, username: string, numberTrack: number): Promise<void> {
    this.logger.info(`[EmailService] Sending the mail with the invoice of the shipment made to the email address [${email}]`);
    await this.sendInvoiceEmailSendGrid(email,process.env.SENDGRID_ADDRESS_FROM,process.env.SENDGRID_INVOICE_EMAIL,{
      ship_num: numberTrack,
      username: username
    }, file);
  }
}
