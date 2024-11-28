<template>
  <v-container>
    <div class="experience-section">
      <h2 class="section-title" :style="{ color: colors.textLight }">Professional Experience</h2>
      
      <div class="linkedin-card" :style="{ backgroundColor: colors.greenTintGrey }">
        <v-icon size="64" color="white" class="mb-4">mdi-linkedin</v-icon>
        <h3 class="mb-4" :style="{ color: colors.textLight }">View My Full Experience on LinkedIn</h3>
        <p class="mb-6" :style="{ color: colors.textDark }">
          For a detailed look at my professional experience, education, and certifications, 
          please visit my LinkedIn profile.
        </p>
        <v-btn
          href="https://www.linkedin.com/in/aj-mccrory"
          target="_blank"
          :color="colors.darkGrey"
          size="large"
          elevation="2"
          class="linkedin-button"
        >
          <v-icon left class="mr-2">mdi-open-in-new</v-icon>
          Visit LinkedIn Profile
        </v-btn>
      </div>

      <!-- Current Position Preview -->
      <div class="current-position mt-8" :style="{ backgroundColor: colors.greenTintGrey }">
        <h3 class="position-title mb-4" :style="{ color: colors.textLight }">
          Current Position
        </h3>
        <div class="position-details">
          <h4 :style="{ color: colors.textLight }">Full Stack Developer</h4>
          <p :style="{ color: colors.textDark }">Advocara</p>
          <p class="mt-2" :style="{ color: colors.textDark }">
            Working on developing and maintaining full-stack web applications using modern technologies.
          </p>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import colors from '@/theme/colors'
</script>

<style scoped>
.experience-section {
  padding: 2rem 0;
}

.section-title {
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.linkedin-card, .current-position {
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.2s ease;
}

.linkedin-card:hover, .current-position:hover {
  transform: translateY(-5px);
}

.linkedin-button {
  text-transform: none;
  letter-spacing: normal;
  padding: 0 2rem;
}

.position-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
}

.position-details {
  text-align: left;
}

.position-details h4 {
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}
</style> 