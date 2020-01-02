import Vue from "vue";
import VueRouter from "vue-router";
import Todos from "../views/Layout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/all'
  },
  {
    path: "/:filter",
    name: "Todos",
    component: Todos
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
