library dart_jsdaddy_school.routes.controllers.mailer_controller;

import 'dart:async';
import 'package:angel_framework/angel_framework.dart';
import 'package:mailer/mailer.dart';

@Expose('/mail')
class MailerController extends Controller {
  @Expose('/', method: 'POST')
  Future sendEmail(SmtpTransport emailTransport, RequestContext req, ResponseContext res) async {
    try {
      Map<String,String> body = await req.lazyBody();
      var envelope = new Envelope()
        ..from = 'icosupport@tokenize.exchange'
        ..recipients.add(body['email'])
        ..subject = 'Testing the Dart Mailer library 語'
        ..text = 'This is a cool email message. Whats up? 語'
        ..html = '<h1>Test</h1><p>Hey!</p>';

      await app.service('/api/contacts').create(body);

      await emailTransport.send(envelope);
      return res.json({'message': 'Email sent'});
    } catch (err){
      return 'Something went wrong';
    }
  }
}
