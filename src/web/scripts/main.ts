import * as $ from 'jquery';
import './contact-form';
import './navigation.ts';
import './scroll.ts';
import './slider.ts';

// tslint:disable-next-line:no-var-requires
const wowJs = require('wowjs');

$(document).ready(() => {
  new wowJs.WOW().init();
});
