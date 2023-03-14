import { registerMicroApps, start } from 'qiankun';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes,
});

registerMicroApps([
    {
        name: 'child-app-1', // app name registered
        entry: '//localhost:9010',
        container: '#child-container',
        activeRule: '/child-app-1',
    },
    {
        name: 'child-app-2',
        entry: '//localhost:9020',
        container: '#child-container',
        activeRule: '/child-app-2',
    },
]);

start();

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#main-app');
