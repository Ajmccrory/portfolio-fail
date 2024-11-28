<template>
  <v-app :style="{ background: colors.darkGrey }">
    <!-- Navigation Menu -->
    <v-app-bar :elevation="2" :color="colors.darkGrey" class="px-2">
      <v-app-bar-nav-icon @click="toggleMenu" color="white"></v-app-bar-nav-icon>
      
      
      <v-spacer></v-spacer>
    </v-app-bar>

    <!-- Dropdown Menu -->
    <transition name="menu-fade">
      <div v-if="menuOpen" class="menu-dropdown">
        <v-btn
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          block
          class="mb-2 text-white"
          :color="colors.greenTintGrey"
          @click="toggleMenu"
        >
          {{ item.name }}
        </v-btn>
      </div>
    </transition>

    <!-- Main Content -->
    <v-main :style="{ background: colors.darkGrey }">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import colors from './theme/colors'

const menuOpen = ref(false)
const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' }
]

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

.menu-dropdown {
  position: fixed;
  top: 64px;
  left: 0;
  width: 200px;
  padding: 1rem;
  background-color: v-bind('colors.darkGrey');
  z-index: 100;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: all 0.3s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

:deep(.v-btn) {
  text-transform: none;
  letter-spacing: normal;
}
</style>
