import * as config from 'config';
import * as nodemailer from 'nodemailer';
import * as path from 'path';
const { pass, user } = config.get('mailer');
import * as fs from 'fs';
import * as mustache from 'mustache';
import * as util from 'util';
// tslint:disable-next-line: typedef
const readFile = util.promisify(fs.readFile);

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

  public async sendMail(body: any, type: string, lang = 'en'): Promise<{}> {
    switch (type) {
      case 'course': {

        const file = await readFile(path.join(process.cwd(), `views/email-templates/course.${lang}.mustache`));
        const output: string =  mustache.render(file.toString(), {name: body.name});

        return await this._sendMail({
          html: output,
          subject: 'JSDaddy course',
          to: body.email,
        });
      }

      case 'contacts': {

        const file = await readFile(path.join(process.cwd(), 'views/email-templates/email.mustache'));
        const output: string =  mustache.render(file.toString(), {name: body.name});
        return await this._sendMail({
          html: output,
          subject: 'JSDaddy contacts',
          to: body.email,
        });
      }

      case 'copy': {
        return await this._sendMail({
          subject: 'JSDaddy',
          text: text: 'Name: ' + body.email + ' Name: ' + body.name + ' Text: ' + body.message,
          to: body.copyEmail,
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
