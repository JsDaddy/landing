library dart_jsdaddy_school.src.middleware.language_menu;

import 'dart:async';
import 'package:angel_framework/angel_framework.dart';

Future<bool> addLanguagesMenu(Angel app, String lang,RequestContext req, res,{String id}) async {
  try {
    var languages = await app.service('api/languages').index();
    req.params['languages'] = languages.map((language) {
      var current_lang = language['name'].toLowerCase();
      if (current_lang == lang) {
        language['active'] = 'active';
      }
      language['href'] = id == null
          ? '/$current_lang/courses'
          : '/$current_lang/courses/$id';
      return language;
    });
    return true;
  } catch (err) {
    print(err);
    return false;
  }
}