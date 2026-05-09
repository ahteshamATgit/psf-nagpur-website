<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import AOS from 'aos'

const route = useRoute()
const isScrolled = ref(false)

const whatsappLink = 'https://chat.whatsapp.com/your-invite-link'

const mainLinks = [
  // { label: 'Home', to: '/', match: ['landing'] },
  { label: 'About', to: '/about', match: ['about'] },
  { label: 'Events', to: '/events', match: ['events', 'event-details'] },
  {
    label: 'Social Initiatives',
    to: '/initiatives',
    match: ['social-initiatives', 'social-initiative-details']
  },
  { label: 'Our Team', to: '/team', match: ['team'] }
]

const isNavActive = (item) => item.match.includes(route.name)

const navbarClasses = computed(() => [
  'fbs__net-navbar',
  'navbar',
  'navbar-expand-lg',
  'dark',
  { active: isScrolled.value }
])

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const closeOffcanvas = () => {
  const offcanvasElement = document.getElementById('fbs__net-navbars')

  if (!offcanvasElement) return

  const bootstrapOffcanvas = window.bootstrap?.Offcanvas?.getInstance(offcanvasElement)

  if (bootstrapOffcanvas) {
    bootstrapOffcanvas.hide()
    return
  }

  offcanvasElement.classList.remove('show')
  document.body.classList.remove('offcanvas-active')
  document.body.style.removeProperty('overflow')

  const backdrop = document.querySelector('.offcanvas-backdrop')
  if (backdrop) backdrop.remove()
}

onMounted(async () => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })

  await nextTick()
  AOS.refresh()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <!-- ======= Header ======= -->
  <header :class="navbarClasses" aria-label="PSF Nagpur main navigation">
    <div class="container d-flex align-items-center justify-content-between">
      <!-- Start Logo -->
      <RouterLink class="navbar-brand w-auto" to="/" aria-label="PSF Nagpur home" @click="closeOffcanvas">
        <img class="logo dark img-fluid" src="/assets/images/logo-dark.svg" alt="PSF Nagpur logo" />

        <img class="logo light img-fluid" src="/assets/images/logo-light.svg" alt="PSF Nagpur logo" />
      </RouterLink>
      <!-- End Logo -->

      <!-- Start Offcanvas -->
      <div class="offcanvas offcanvas-start w-75" id="fbs__net-navbars" tabindex="-1"
        aria-labelledby="fbs__net-navbarsLabel">
        <div class="offcanvas-header">
          <div class="offcanvas-header-logo">
            <RouterLink class="logo-link" id="fbs__net-navbarsLabel" to="/" aria-label="PSF Nagpur home"
              @click="closeOffcanvas">
              <img class="logo dark img-fluid" src="/assets/images/logo-dark.svg" alt="PSF Nagpur logo" />

              <img class="logo light img-fluid" src="/assets/images/logo-light.svg" alt="PSF Nagpur logo" />
            </RouterLink>
          </div>

          <button class="btn-close btn-close-black" type="button" data-bs-dismiss="offcanvas"
            aria-label="Close navigation menu"></button>
        </div>

        <div class="offcanvas-body align-items-lg-center">
          <ul class="navbar-nav nav me-auto ps-lg-5 mb-2 mb-lg-0">
            <li v-for="item in mainLinks" :key="item.to" class="nav-item">
              <RouterLink class="nav-link scroll-link" :class="{ active: isNavActive(item) }"
                :aria-current="isNavActive(item) ? 'page' : null" :to="item.to" @click="closeOffcanvas">
                {{ item.label }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <!-- End Offcanvas -->

      <div class="ms-auto w-auto">
        <div class="header-social d-flex align-items-center gap-1">
          <a class="btn btn-primary py-2" :href="whatsappLink" target="_blank" rel="noopener">
            Join Community
          </a>

          <button class="fbs__net-navbar-toggler justify-content-center align-items-center ms-auto" type="button"
            data-bs-toggle="offcanvas" data-bs-target="#fbs__net-navbars" aria-controls="fbs__net-navbars"
            aria-label="Toggle navigation" aria-expanded="false">
            <svg class="fbs__net-icon-menu" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" aria-hidden="true">
              <line x1="21" x2="3" y1="6" y2="6"></line>
              <line x1="15" x2="3" y1="12" y2="12"></line>
              <line x1="17" x2="3" y1="18" y2="18"></line>
            </svg>

            <svg class="fbs__net-icon-close" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" aria-hidden="true">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
  <!-- End Header -->
</template>