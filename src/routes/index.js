import { createRouter, createWebHistory } from "vue-router";

import MainPage from "../view/MainPage.vue"
import ItemPage from "../view/ItemPage.vue"

const routes = [
    {
        path: "/",
        name: "home",
        component: MainPage,
    },
    {
        path: "/jobs/:id",
        name: "item",
        component: ItemPage,
    },
    {
        path: "/search",
        name: "search",
        component: MainPage,
    }
];

const router = createRouter({
    history: createWebHistory(),

    scrollBehavior() {
        return { top: 0 };
    },

    routes,
});

export default router;