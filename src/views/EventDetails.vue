<script setup>
import { computed, nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import AOS from 'aos'

import EventDetailsTemplate from '../components/events/EventDetailsTemplate.vue'
import { getEventBySlug } from '../data/events'

const route = useRoute()

const event = computed(() => {
    return getEventBySlug(route.params.slug)
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
    <div class="site-wrap event-details-page">
        <main>
            <EventDetailsTemplate v-if="event" :event="event" />

            <section v-else class="section first-section event-detail-not-found">
                <div class="container">
                    <div class="not-found-card rounded-4 text-center">
                        <span class="event-details-subtitle text-uppercase">
                            Event Not Found
                        </span>

                        <h1 class="mb-3">This event could not be found</h1>

                        <p class="mb-4">
                            The event you are looking for may have been moved, renamed, or removed.
                        </p>

                        <RouterLink class="btn" to="/events">
                            Back to Events
                        </RouterLink>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>
