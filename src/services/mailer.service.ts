import * as config from 'config';
import * as nodemailer from 'nodemailer';
const { pass, user } = config.get('mailer');

export class MailerService {
  private _transporter: nodemailer.Transporter;

  public constructor() {
    this._transporter = nodemailer.createTransport({
      auth: {
        pass,
        user,
      },
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL
    });
  }

  public async sendMail(body: any, type: string, _lang = 'en'): Promise<{}> {
    switch (type) {
      case 'course': {
        return await this._sendMail({
          html: `
            <h2>Hello</h2>
            <p>Thaks for applying our course. We will contact you as soon as possible to clarify the details.</p>
          `,
          subject: 'JSDaddy course',
          to: body.email,
        });
      }
      // Dear name thanks for contacting us
      case 'contacts': {
        return await this._sendMail({
          html: `
            <h2>Hello</h2>
            <p>Thanks for contacting us. We will contact you as soon as possible to clarify the details</p>
          `,
          subject: 'JSDaddy contacts',
          to: body.email,
        });
      }
      case 'copy': {
        // body.toString()
        return await this._sendMail({
          subject: 'JSDaddy',
          text: body.toString(),
          to: body.email,
        });
      }
      default: {
        return {};
      }
    }
  }

    // tslint:disable-next-line: no-any
    private async _sendMail(mailOptions: any): Promise<{}> {
      return new Promise((res: any, rej: any) => {
        this._transporter.sendMail({
          ...mailOptions,
          from: `<${user}>`,
        }, (err: Error | null, info: nodemailer.SentMessageInfo) => {
          if (err) {
            return rej(err);
          }
          return res(info);
        });
      });
    }
}
