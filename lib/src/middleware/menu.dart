library dart_jsdaddy_school.src.middleware.menu;

import 'package:angel_framework/angel_framework.dart';

getMenu(String page) {
  return (Angel app, RequestContext req, res, {String lang, languages}) async {
    try {
      Map query = {'section': page};
      lang != null ? query.addAll({'lang': 'ru'}) : null;
      var headerArr = await app.service('api/menu').index({'query': query});
      var header = headerArr.first;
      languages is List ? header['languages'] = languages : null;
      req.params['header'] = header;
      return true;
    } catch (err) {
      print(err);
      return false;
    }
  };
}
