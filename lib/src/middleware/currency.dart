library dart_jsdaddy_school.src.middleware.currency;

import 'dart:async';
import 'package:angel_framework/angel_framework.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

Future<bool> addCurrencyRate(Angel app,RequestContext req, res) async {
  try {
    String currency = await http.read(app.configuration['nbu_rate']);
    req.params['rate'] = json.decode(currency).first['rate'];
    return true;
  } catch (err) {
    print(err);
    return false;
  }
}
