<template>
  <v-app style="background-color: white; padding-right: 0;">

    <v-navigation-drawer style="color: white; font-size: 1em; margin: 0;padding: 0px;border: 0;" color="rgba(43,49,61)"
      v-model="drawer" app>
      <v-sheet color="white" style="width:100%; " class="pa-2">

        <div style="width:200px;  text-align: center; ">
        </div>

      </v-sheet>
      <v-divider></v-divider>
      <v-list density="compact" nav style=" margin: 0;padding: 0px;">
      <!--  <v-list-item :to="{ name: 'crearTicket' }" prepend-icon="mdi-text-box-plus" type="mdi" title="Crear Ticket"
          value="crearTicket">
        </v-list-item>-->
        <v-list-item :to="{ name: 'misTickets' }" prepend-icon="mdi-archive-search" title="Mis Tickets"
          value="misTickets">
        </v-list-item>
        <v-list-item :to="{ name: 'misTickets' }" prepend-icon="mdi-book-open" title="Directorio"
          value="misTickets">
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-app-bar style="background:#2890CD ;">
      <v-app-bar-nav-icon style="color: white;" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="color: white;">{{ $route.meta.title }}</v-toolbar-title>

    </v-app-bar>


    <v-main>

      <routerView>
      </routerView>
    </v-main>
  </v-app>
</template>
          
<script>

import router from '@/main';
import routerView from "./components/router-view";
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiTagPlus } from '@mdi/js';

export default ({

  components: {

    routerView,
    SvgIcon
  },

  name: "iconoTicket",

  data() {
    return {
      drawer: false,
      path: mdiTagPlus,
    }
  },

  methods:
  {


  }
});
</script>