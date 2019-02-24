import Vue from 'nativescript-vue';

import Parking from './components/Parking';

import Database from './components/database';
var database = new Database();
Vue.prototype.$database = database;

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new Vue({

    render: h => h('frame', [h(Parking)])

}).$start();
