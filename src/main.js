import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vendor CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'aos/dist/aos.css'
import 'glightbox/dist/css/glightbox.min.css'
import 'glightbox/dist/css/glightbox.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Main custom styles
import './assets/css/style.css'
import './assets/css/main.scss'

// Vendor JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import AOS from 'aos'
// import GLightbox from 'glightbox'
// import PureCounter from '@srexi/purecounterjs'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// AOS.init({
//   duration: 800,
//   easing: 'ease-in-out',
//   once: true,
//   mirror: false,
// })

// GLightbox({
//   selector: '.glightbox',
// })

// new PureCounter()