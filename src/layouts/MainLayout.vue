<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> AMMS App </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> BANK OF AFRICA (U) LTD </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          v-ripple
          class="pb-2 d-flex"
          clickable
          dense
          @click.prevent="menuItemHandler(link)"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "ASSETS",
    icon: "school",
    path:'/home'
  },
  {
    title: "MAINTANCE",
    icon: "settings",
    path: "/maintance",
  },
  {
    title: "MOVEMENTS",
    icon: "trending_up",
    path: "/movement",
  },
  {
    title: "Users",
    icon: "people",
    path:"/users"
  },
];
import { useRouter } from "vue-router";
export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const router = useRouter()

    const menuItemHandler = async (item) => {
      if (item?._call) {
        item._call();
      } else {
        router.push(`${item.path}`);
      }
    };

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      menuItemHandler,
    };
  },
});
</script>
