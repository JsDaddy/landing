library dart_jsdaddy_school.routes.controllers.mailer_controller;

import 'dart:async';
import 'package:angel_framework/angel_framework.dart';
import 'package:mailer/mailer.dart';
import 'package:mustache/mustache.dart';
import 'dart:io';

@Expose('/mail')
class MailerController extends Controller {
  @Expose('/contacts', method: 'POST')
  Future sendEmail(SmtpTransport emailTransport, RequestContext req,
      ResponseContext res) async {
    var file =
        await new File('views/email-templates/email.mustache').readAsString();
    var template = new Template(file, name: 'template-filename.html');
    try {
      Map<String, String> body = await req.lazyBody();
      var output = template.renderString({'name': body['name']});

      var envelope = new Envelope()
        ..from = 'icosupport@tokenize.exchange'
        ..recipients.add(body['email'])
        ..bccRecipients.add('info@jsdaddy.io')
        ..subject = 'JSDaddy contacts'
        ..html = output;

      await app.service('/api/contacts').create(body);

      await emailTransport.send(envelope);
      return res.json({'message': 'Email sent'});
    } catch (err) {
      return 'Something went wrong';
    }
  }

  @Expose('/course', method: 'POST')
  Future sendCourseEmail(SmtpTransport emailTransport, RequestContext req,
      ResponseContext res) async {
    var file =
        await new File('views/email-templates/course.mustache').readAsString();
    var template = new Template(file, name: 'template-filename.html');
    try {
      Map<String, String> body = await req.lazyBody();
      var output = template.renderString({'name': body['name']});

      var envelope = new Envelope()
        ..from = 'icosupport@tokenize.exchange'
        ..recipients.add(body['email'])
        ..bccRecipients.add('info@jsdaddy.io')
        ..subject = 'JSDaddy course'
        ..html = output;

      await app.service('/api/participant').create(body);

      await emailTransport.send(envelope);
      return res.json({'message': 'Email sent'});
    } catch (err) {
      return 'Something went wrong';
    }
  }
}
