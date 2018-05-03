library dart_jsdaddy_school.src.middleware.advantages;

import 'package:angel_framework/angel_framework.dart';

getAdvantages(String page) {
  return (Angel app, RequestContext req, res, {String lang, languages}) async {
    try {
      Map query = {'section': page};
      lang != null ? query.addAll({'lang': lang}) : null;
      var advantagesArr = await app.service('api/advantages').index({'query': query});
      var advantages = advantagesArr.first;
      languages is Iterable ? advantages['languages'] = languages : null;
      req.params['advantages'] = advantages;
      return true;
    } catch (err) {
      print(err);
      return false;
    }
  };
}
