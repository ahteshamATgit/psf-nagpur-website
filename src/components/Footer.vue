<script setup>
import { nextTick, onMounted, ref } from 'vue'
import AOS from 'aos'

const currentYear = ref(new Date().getFullYear())

const whatsappLink = 'https://chat.whatsapp.com/your-invite-link'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About PSF', to: '/about' },
  { label: 'Events & Activities', to: '/events' },
  { label: 'Social Initiatives', to: '/initiatives' },
  { label: 'Our Team', to: '/team' }
]

const communityLinks = [
  { label: 'Join Community', href: whatsappLink, external: true, badge: 'WhatsApp' },
  { label: 'Upcoming Events', to: '/events#upcoming-events' },
  { label: 'Past Events', to: '/events#past-events' },
  { label: 'Volunteer with PSF', to: '/initiatives' }
]

const socialLinks = [
  { label: 'LinkedIn', icon: 'bi-linkedin', href: '#' },
  { label: 'Instagram', icon: 'bi-instagram', href: '#' },
  { label: 'Facebook', icon: 'bi-facebook', href: '#' },
  { label: 'YouTube', icon: 'bi-youtube', href: '#' }
]

const handleNewsletterSubmit = (event) => {
  event.preventDefault()
}

onMounted(async () => {
  await nextTick()
  AOS.refresh()
})
</script>

<template>
  <!-- ======= Footer ======= -->
  <footer class="footer pt-5 pb-5 bg-primary-lightest">
    <div class="container">
      <div class="row mb-5 pb-4 align-items-center">
        <div class="col-md-7">
          <h2 class="fs-5">Stay connected with PSF Nagpur</h2>
          <p class="mb-md-0">
            Get updates about events, initiatives, community activities, and opportunities to
            contribute.
          </p>
        </div>

        <div class="col-md-5">
          <form class="d-flex gap-2" @submit="handleNewsletterSubmit">
            <input class="form-control" type="email" placeholder="Enter your email"
              aria-label="Enter your email for PSF Nagpur updates" required />
            <button class="btn btn-primary fs-6" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div class="row justify-content-between mb-5 g-xl-5">
        <div class="col-md-4 mb-5 mb-lg-0">
          <RouterLink class="d-inline-block mb-3" to="/" aria-label="PSF Nagpur home">
            <img class="img-fluid" src="/assets/images/psf.png" alt="PSF Nagpur logo" style="max-width: 200px; border-radius: 12px;" />
          </RouterLink>

          <h3 class="mb-3">Professionals Solidarity Forum Nagpur</h3>

          <p class="mb-4">
            A growing community of professionals in Nagpur committed to growth, collaboration,
            meaningful relationships, and social responsibility.
          </p>

          <div class="d-flex gap-2">
            <a v-for="social in socialLinks" :key="social.label" :href="social.href" target="_blank" rel="noopener"
              :aria-label="social.label">
              <i :class="['bi', social.icon]"></i>
            </a>
          </div>
        </div>

        <div class="col-md-7">
          <div class="row g-2">
            <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <h3 class="mb-3">Explore</h3>

              <ul class="list-unstyled">
                <li v-for="link in quickLinks" :key="link.to">
                  <RouterLink :to="link.to">
                    {{ link.label }}
                  </RouterLink>
                </li>
              </ul>
            </div>

            <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <h3 class="mb-3">Community</h3>

              <ul class="list-unstyled">
                <li v-for="link in communityLinks" :key="link.label">
                  <a v-if="link.external" :href="link.href" target="_blank" rel="noopener">
                    {{ link.label }}
                    <span v-if="link.badge" class="badge ms-1">{{ link.badge }}</span>
                  </a>

                  <RouterLink v-else :to="link.to">
                    {{ link.label }}
                  </RouterLink>
                </li>
              </ul>
            </div>

            <div class="col-md-6 col-lg-4 mb-4 mb-lg-0 quick-contact">
              <h3 class="mb-3">Contact</h3>

              <p class="d-flex mb-3">
                <i class="bi bi-geo-alt-fill me-3"></i>
                <span>Nagpur, Maharashtra, India</span>
              </p>

              <a class="d-flex mb-3" href="mailto:connect@psfnagpur.org">
                <i class="bi bi-envelope-fill me-3"></i>
                <span>connect@psfnagpur.org</span>
              </a>

              <a class="d-flex mb-3" :href="whatsappLink" target="_blank" rel="noopener">
                <i class="bi bi-whatsapp me-3"></i>
                <span>Join WhatsApp Community</span>
              </a>

              <RouterLink class="d-flex mb-3" to="/team">
                <i class="bi bi-people-fill me-3"></i>
                <span>Meet our core team</span>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>

      <div class="row credits pt-3">
        <div class="col-xl-8 text-center text-xl-start mb-3 mb-xl-0">
          &copy; {{ currentYear }} Professionals Solidarity Forum Nagpur. All rights reserved.
        </div>

        <div
          class="col-xl-4 justify-content-start justify-content-xl-end quick-links d-flex flex-column flex-xl-row text-center text-xl-start gap-3">
          <RouterLink to="/about">
            About
          </RouterLink>

          <RouterLink to="/events">
            Events
          </RouterLink>

          <RouterLink to="/initiatives">
            Initiatives
          </RouterLink>
        </div>
      </div>
    </div>
  </footer>
  <!-- End Footer -->
</template>