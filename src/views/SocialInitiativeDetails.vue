<script setup>
import { computed, nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import AOS from 'aos'

import SocialInitiativeDetailsTemplate from '../components/initiatives/SocialInitiativeDetailsTemplate.vue'
import { getSocialInitiativeBySlug } from '../data/socialInitiatives'

const route = useRoute()

const initiative = computed(() => {
  return getSocialInitiativeBySlug(route.params.slug)
})

onMounted(() => {
  AOS.init({
    duration: 800,
    easing: 'slide',
    once: true
  })

  AOS.refresh()
})

watch(
  () => route.params.slug,
  async () => {
    await nextTick()

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

    AOS.refresh()
  }
)
</script>

<template>
  <div class="site-wrap social-initiative-details-page">
    <main>
      <SocialInitiativeDetailsTemplate
        v-if="initiative"
        :initiative="initiative"
      />

      <section
        v-else
        class="section first-section initiative-detail-not-found"
      >
        <div class="container">
          <div class="not-found-card rounded-4 text-center">
            <span class="initiative-details-subtitle text-uppercase">
              Initiative Not Found
            </span>

            <h1 class="mb-3">This initiative could not be found</h1>

            <p class="mb-4">
              The initiative you are looking for may have been moved, renamed, or removed.
            </p>

            <RouterLink class="btn" to="/initiatives">
              Back to Initiatives
            </RouterLink>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
