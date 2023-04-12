/* CODIGO ORIGINAL
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 

// Components
import App from './App.vue'
import VueRouter from 'vue-router'
import crearTicket from './views/tickets/crearTicket.vue'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'

Vue.use(VueRouter)


const routes = [

    {
    
        name: 'crearTicket',
        path:'/crearTicket',
        component: crearTicket 

    },
    {   



        
    }


]
const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
  })





const app = createApp(App)

registerPlugins(app)

app.mount('#app')

export default router
*/


import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import inicio from './App.vue'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import crearTicket from './views/tickets/crearTicket.vue'
import misTickets from './views/tickets/misTickets.vue';

const routes = [
    {
        path: '/',
        redirect: '/crearTicket',

    },
    {
        name: 'crearTicket',
        path: '/crearTicket',
        component: crearTicket,
        meta:{
            title:'CREAR TICKET'

        }
    },
    {
        name: 'misTickets',
        path: '/misTickets',
        component: misTickets,
        meta:{
            title: 'MIS TICKETS'
        }
    },
]


const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes: routes,
    linkActiveClass: 'active' // short for `routes: routes`
});

const app = createApp(inicio)
//app.use(BootstrapVue)
app.use(router)
//app.use(BootstrapVue)
registerPlugins(app)

app.mount('#app')
/*import "bootstrap/dist/js/bootstrap.js"   
*/

export default router;