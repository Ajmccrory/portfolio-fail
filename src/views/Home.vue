<template>
  <v-container class="text-left">
    <div class="profile-section">
      <v-avatar size="200" class="profile-image">
        <v-img :src="require('@/assets/rileyboondocks.png')" alt="Profile Picture"></v-img>
      </v-avatar>
      
      <h2 class="username" :style="{ color: colors.textLight }">
        AJ McCrory (@Ajmccrory)
      </h2>
      
      <p class="bio" :style="{ color: colors.textDark }">
        I am a motivated software development enthusiast currently working as a Full Stack Developer with Advocara. 
        I am also a full-time student at James Madison University, majoring in Integrated Sciences and Technology 
        with a concentration in Applied Computing. My passion is in developing interesting projects and solving 
        problems that don't want to be solved.
      </p>
      
      <p class="contact-intro" :style="{ color: colors.textDark }">
        Want to see more, or get in touch? Check out the links below:
      </p>
      
      <div class="social-links">
        <v-btn icon :color="colors.textDark" href="https://github.com/Ajmccrory" target="_blank">
          <v-icon>mdi-github</v-icon>
        </v-btn>
        <v-btn icon :color="colors.textDark" href="mailto:aj@advocara.org" target="_blank">
          <v-icon>mdi-email</v-icon>
        </v-btn>
        <v-btn icon :color="colors.textDark" href="https://www.linkedin.com/in/aj-mccrory" target="_blank">
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import colors from '@/theme/colors'

onMounted(() => {
  gsap.from('.profile-image', {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: 'power3.out'
  })
  
  gsap.from('.username, .bio, .contact-intro, .social-links', {
    duration: 1,
    y: 20,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out',
    delay: 0.5
  })
})
</script>

<style scoped>
.profile-section {
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.profile-image {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.username {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  margin-bottom: 1rem;
}

.bio, .contact-intro {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  max-width: 800px;
}

.social-links {
  display: flex;
  gap: 1rem;
}
</style> 