import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import VueAwesomeSwiper from 'vue-awesome-swiper'
require('../public/src/js/promise.js')
require('../public/src/js/fetch.js')
//require('../public/src/js/cashdyn.js')
require('../public/src/js/idb.js')
require('../public/src/js/material.min.js')
require('../public/src/js/utility.js')
// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */ )
Vue.config.productionTip = false
window.Idd = ''
window.TagN = 0
window.GeoL = {
    lat: 0,
    log: 0
}
window.CodTree = 0
window.UsrN = ''
window.TimeStp = ''
window.PicI = ''

var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {

        resolve('This is executed once the timer is done!');
        reject({
            code: 500,
            message: 'An error occurred!'
        });
        //console.log('This is executed once the timer is done!');
    }, 100);
});
if (!window.Promise) {
    window.Promise = promise;
}

function updateUI(data) {

    for (var i = 0; i < data.length; i++) {
        writeData('trees', data[i]);
        //console.log(data);

    }
}

var url = 'http://192.168.0.8/trash/trees';
var networkDataReceived = false;
fetch(url)
    .then(function (res) {
        console.log(res);
        return res.json();
    })
    .then(function (data) {
        networkDataReceived = true;
        window.furlf = data;

        // console.log(data.foto + '<???>' + jhg);
        console.log('From web FETCH 1 >', data);
        var dataArray = [];
        var uio = [];
        for (var key in data) {
            dataArray.push(data[key]);
            uio.push(data[key]);
            // writeData('trees', data[key]);
        }
        updateUI(uio[0]);
        //window.ltt = uio[0];
        window.dados1 = uio;
        // console.log(uio.length + '<???>' + jhg);

        return window.dados1, window.furlf;
    }).catch(function (err) {
        console.log(err);
    });



//export const list = postData;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')


promise.then(function (text) {
    return text;
}).then(function (newText) {
    console.log(newText);
}).catch(function (err) {
    console.log(err.code, err.message);
});

console.log('This is executed right after setTimeout()');
