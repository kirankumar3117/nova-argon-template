<template>
  <aside
    id="sidenav-main"
    class="sidenav navbar navbar-vertical navbar-expand-xs  border-0 border-radius-xl my-3"
    :class="`fixed-start ms-3 ${navStore.sidenavType}`"
  >
    <div class="sidenav-header">
      <!-- <i
        id="iconSidenav"
        class="top-0 p-3 cursor-pointer fas fa-times text-secondary opacity-5 position-absolute end-0 d-none d-xl-none"
        aria-hidden="true"
      ></i> -->
      <NuxtLink class="m-0 navbar-brand d-flex justify-content-center" to="/">
        <img :src="logo" class="navbar-brand-img " alt="main_logo" />

        <span
          class="ms-2 font-weight-bold h6"
          :class="
            navStore.sidenavType === 'bg-default bg-transparent' && 'text-white'
          "
          ></span
        >
      </NuxtLink>
    </div>
    <hr class="mt-0 horizontal dark" />
    <SidenavList />
  </aside>
</template>

<script setup>
import SidenavList from "./SidenavList.vue";
import logo from "@/assets/nova_logo.png";
import { useNavStore } from "@/stores/NavStore";
const navStore = useNavStore();
</script>
<style scoped>
.router-link-active {
  color: "#212529";
}
</style>
