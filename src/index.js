import Vue from "./js/vendor/vue.min.js";
import VueRouter from "./js/vendor/vue-router.min.js";

Vue.use(VueRouter);

const userComponent = {
  template: `<div>User {{ $route.params.xx }}</div>`
};

const adminComponent = {
  template: `<div>Admin {{ $route.params.xx }}</div>`
};

const router = new VueRouter({
  routes: [{
    path: '/user/:xx',
    component: userComponent
  }, {
    path: '/admin/:xx',
    component: adminComponent
  }]
});

const app = new Vue({
  router
}).$mount('#app');