import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Clients from "../views/Clients/Clients.vue";
import ClientsList from "../views/Clients/ClientsLists.vue";
import Products from "../views/Products.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/clients",
      name: "clients",
      component: Clients,
    },
    {
      path: "/clients/list",
      name: "clients-list",
      component: ClientsList,
    },
    {
      path: "/products",
      name: "products",
      component: Products,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
