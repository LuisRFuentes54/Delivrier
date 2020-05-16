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

    async sendWelcomeEmail(email: string) {
        this.logger.info(`Enviando el correo de bienvenida al correo [${email}]`);
        await this.sendGrid.send({
            to: email,
            from: 'c2.delivrier@gmail.com',
            subject: 'Delivrier',
            templateId: 'd-c81eb33093ce4b5c96a463b21bc9de9b',
        });
    }
}
