import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'

// Create a list of components you want to use, excluding VAutocomplete
const vuetifyComponents = {}
for (const [key, value] of Object.entries(components)) {
  if (key !== 'VAutocomplete') {
    vuetifyComponents[key] = value
  }
}

export default createVuetify({
  components: vuetifyComponents
}) 