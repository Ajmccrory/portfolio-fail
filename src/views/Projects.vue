<template>
  <v-container class="projects-container">
    <div class="projects-list">
      <v-card
        v-for="project in filteredProjects"
        :key="project.id"
        :color="colors.greenTintGrey"
        class="project-card mb-6"
        elevation="0"
        rounded="lg"
      >
        <v-card-title class="text-h5 pb-2" :style="{ color: colors.textLight }">
          {{ project.name }}
        </v-card-title>
        <v-card-text>
          <div class="project-content">
            <div class="language-icon mb-4" :style="{ color: colors.textDark }">
              <v-icon size="24" class="mr-2">{{ getLanguageIcon(project.language) }}</v-icon>
              {{ project.language }}
            </div>
            
            <p class="project-description mb-4" :style="{ color: colors.textDark }">
              {{ project.description || 'No description available' }}
            </p>

            <div class="project-stats mb-4" :style="{ color: colors.textDark }">
              <span class="mr-4">
                <v-icon size="18" class="mr-1">mdi-star</v-icon>
                {{ project.stargazers_count }} stars
              </span>
              <span class="mr-4">
                <v-icon size="18" class="mr-1">mdi-source-fork</v-icon>
                {{ project.forks_count }} forks
              </span>
              <span>
                <v-icon size="18" class="mr-1">mdi-clock-outline</v-icon>
                Created: {{ new Date(project.created_at).toLocaleDateString() }}
              </span>
            </div>

            <v-btn
              :href="project.html_url"
              target="_blank"
              :color="colors.darkGrey"
              elevation="2"
              class="view-button"
            >
              <v-icon left class="mr-2">mdi-github</v-icon>
              View on GitHub
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Octokit } from '@octokit/rest'
import colors from '@/theme/colors'

const projects = ref([])
const octokit = new Octokit()

const filteredProjects = computed(() => {
  const currentYear = new Date().getFullYear()
  return projects.value.filter(project => {
    const createdYear = new Date(project.created_at).getFullYear()
    return createdYear === currentYear
  })
})

const getLanguageIcon = (language) => {
  const icons = {
    JavaScript: 'mdi-language-javascript',
    Python: 'mdi-language-python',
    Java: 'mdi-language-java',
    TypeScript: 'mdi-language-typescript',
    HTML: 'mdi-language-html5',
    CSS: 'mdi-language-css3',
    PHP: 'mdi-language-php',
    Ruby: 'mdi-language-ruby',
    Swift: 'mdi-language-swift',
    Kotlin: 'mdi-language-kotlin',
    Go: 'mdi-language-go',
    Rust: 'mdi-language-rust',
    C: 'mdi-language-c',
    'C++': 'mdi-language-cpp',
    'C#': 'mdi-language-csharp',
    Shell: 'mdi-console',
    Vue: 'mdi-vuejs',
    React: 'mdi-react',
    Angular: 'mdi-angular',
    Docker: 'mdi-docker',
    Markdown: 'mdi-language-markdown',
    R: 'mdi-language-r',
    SQL: 'mdi-database'
  }
  return icons[language] || 'mdi-code-tags'
}

onMounted(async () => {
  try {
    const response = await octokit.repos.listForUser({
      username: 'Ajmccrory',
      type: 'public',
      sort: 'created',
      direction: 'desc'
    })
    projects.value = response.data
  } catch (error) {
    console.error('Error fetching GitHub projects:', error)
  }
})
</script>

<style scoped>
.projects-container {
  max-width: 800px;
  margin: 0 auto;
}

.projects-list {
  padding: 2rem 0;
}

.project-card {
  transition: transform 0.2s ease;
  border: none;
  overflow: hidden;
  padding: 1rem;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-content {
  display: flex;
  flex-direction: column;
}

.language-icon {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.project-description {
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
}

.project-stats {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.9rem;
}

.view-button {
  align-self: flex-start;
  text-transform: none;
  letter-spacing: normal;
}

:deep(.v-card) {
  border: none !important;
  box-shadow: none !important;
}
</style> 