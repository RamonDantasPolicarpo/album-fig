import { createRouter, createWebHistory} from 'vue-router';

import Home from '../views/HomeView.vue';

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;