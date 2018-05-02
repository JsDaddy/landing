library dart_jsdaddy_school.src.middleware.form;

// import 'dart:convert';
import 'package:angel_framework/angel_framework.dart';

getForm(String page) {
  return (Angel app, RequestContext req, res, {String lang, languages}) async {
    try {
      Map query = {'section': page};
      lang != null ? query.addAll({'lang': lang}) : null;
      var formArr = await app.service('api/form').index({'query': query});
      var form = formArr.first;
      languages is Iterable ? form['languages'] = languages : null;
      req.params['form'] = form;
      return true;
    } catch (err) {
      print(err);
      return false;
    }
  };
}
