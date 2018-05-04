library dart_jsdaddy_school.routes.controllers.mailer_controller;

import 'dart:async';
import 'package:angel_framework/angel_framework.dart';
import 'package:mailer/mailer.dart';
import 'package:mustache/mustache.dart';
import 'dart:io';

@Expose('/mail')
class MailerController extends Controller {
  @Expose('/contacts', method: 'POST')
  Future sendEmail(SmtpTransport emailTransport, RequestContext req, ResponseContext res) async {
    var file = await new File('views/email-templates/email.mustache').readAsString();
    var template = new Template(file, name: 'template-filename.html');
    try {
      Map<String, String> body = await req.lazyBody();
      var output = template.renderString({'name': body['name']});

      var envelope = new Envelope()
        ..from = 'info.jsdaddy@gmail.com'
        ..recipients.add(body['email'])
        ..subject = 'JSDaddy contacts'
        ..html = output;
      
      var envelope2 = new Envelope()
        ..from = 'info.jsdaddy@gmail.com'
        ..recipients.add('info@jsdaddy.io')
        ..subject = 'JSDaddy contacts'
        ..text = body.toString();

      await app.service('/api/contacts').create(body);

      await emailTransport.send(envelope);
      await emailTransport.send(envelope2);
      
      return res.json({'message': 'Email sent', 'type': 'Success'});
    } catch (err) {
      return  res.json({'message': 'Something went wrong', 'type': 'Error'});
    }
  }

  @Expose('/course', method: 'POST')
  Future sendCourseEmail(SmtpTransport emailTransport, RequestContext req, ResponseContext res) async {
    var lang = req.headers['content-language'].toList().first;
    var file = await new File('views/email-templates/course.${lang}.mustache').readAsString();
    var template = new Template(file, name: 'template-filename.html');
    try {
      Map<String, String> body = await req.lazyBody();
      var output = template.renderString({'name': body['name']});

      var envelope = new Envelope()
        ..from = 'info.jsdaddy@gmail.com'
        ..recipients.add(body['email'])
        ..bccRecipients.add('info@jsdaddy.io')
        ..subject = 'JSDaddy course'
        ..html = output;

      var envelope2 = new Envelope()
        ..from = 'info.jsdaddy@gmail.com'
        ..recipients.add('info@jsdaddy.io')
        ..subject = 'JSDaddy course'
        ..text = body.toString();

      await app.service('/api/participant').create(body);

      await emailTransport.send(envelope);
      await emailTransport.send(envelope2);
      
      return res.json({'message': 'Email sent', 'type': 'Success'});
    } catch (err) {
      return res.json({'message': 'Something went wrong', 'type': 'Error'});
    }
  }
}
