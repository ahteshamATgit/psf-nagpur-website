<script setup>
import { nextTick, onMounted, ref } from 'vue'
import AOS from 'aos'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Keyboard, A11y } from 'swiper/modules'
import { pastEvents } from '../data/events'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const showAllPastEvents = ref(false)

const swiperModules = [Navigation, Pagination, Keyboard, A11y]

const pastEventsBreakpoints = {
    576: {
        slidesPerView: 1.1,
        spaceBetween: 18
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 22
    },
    1200: {
        slidesPerView: 3,
        spaceBetween: 24
    }
}

const links = {
    whatsapp: 'https://chat.whatsapp.com/your-invite-link',
    connect: '/contact',
    initiatives: '/initiatives'
}

const heroImage =
    'https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=1200&q=80'

const engagementStats = [
    {
        value: '70+',
        label: 'Professionals connected'
    },
    {
        value: '3+',
        label: 'Activity formats'
    },
    {
        value: '1',
        label: 'Purpose-led community'
    }
]

// const pastEvents = [
//     {
//         title: 'Leadership Workshop',
//         date: 'Date to be updated',
//         category: 'Learning & Growth',
//         image:
//             'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
//         summary:
//             'A focused workshop designed to help members build leadership mindset, communication clarity, and professional confidence.',
//         detailsLink: '#'
//     },
//     {
//         title: 'Sports Connect',
//         date: 'Date to be updated',
//         category: 'Community Engagement',
//         image:
//             'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=900&q=80',
//         summary:
//             'A refreshing sports-based activity where members connected outside work and strengthened informal community bonds.',
//         detailsLink: '#'
//     },
//     {
//         title: 'Spiritual Retreat — 2 Day Camp',
//         date: 'Date to be updated',
//         category: 'Reflection & Well-being',
//         image:
//             'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80',
//         summary:
//             'A two-day retreat experience focused on reflection, inner growth, meaningful conversations, and deeper connection.',
//         detailsLink: '#'
//     },
//     {
//         title: 'Community Discussion Meet',
//         date: 'Date to be updated',
//         category: 'Networking & Dialogue',
//         image:
//             'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
//         summary:
//             'An interactive gathering where professionals exchanged ideas, discussed challenges, and explored ways to grow together.',
//         detailsLink: '#'
//     },
//     {
//         title: 'Career Growth Circle',
//         date: 'Date to be updated',
//         category: 'Career Development',
//         image:
//             'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80',
//         summary:
//             'A member-focused session around career direction, practical guidance, mentorship, and professional opportunities.',
//         detailsLink: '#'
//     },
//     {
//         title: 'Social Initiative Planning Meet',
//         date: 'Date to be updated',
//         category: 'Social Impact',
//         image:
//             'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80',
//         summary:
//             'A planning meet where members discussed meaningful ways to contribute to society through collective action.',
//         detailsLink: '#'
//     }
// ]

const togglePastEventsView = async () => {
    showAllPastEvents.value = !showAllPastEvents.value

    await nextTick()
    AOS.refresh()
}

onMounted(() => {
    AOS.init({
        duration: 800,
        easing: 'slide',
        once: true
    })

    AOS.refresh()
})
</script>

<template>
    <div class="site-wrap events-page">
        <main>
            <!-- ======= Events Hero ======= -->
            <section class="hero__v6 section first-section events-page-hero" id="events-hero">
                <div class="container">
                    <div class="row align-items-center g-5">
                        <div class="col-lg-6">
                            <div class="events-hero-copy">
                                <span class="hero-subtitle text-uppercase bg-primary-light" data-aos="fade-up" data-aos-delay="0">
                                    Events & Activities
                                </span>

                                <h1 class="hero-title mb-3" data-aos="fade-up" data-aos-delay="100">
                                    Bringing People Together Through Meaningful Engagement
                                </h1>

                                <p class="hero-description mb-4" data-aos="fade-up" data-aos-delay="200">
                                    PSF Nagpur creates spaces where professionals can meet, learn, collaborate, and
                                    contribute through purposeful activities.
                                </p>

                                <div class="cta d-flex flex-wrap gap-2 mb-4 mb-lg-5" data-aos="fade-up"
                                    data-aos-delay="300">
                                    <a class="btn" :href="links.whatsapp" target="_blank" rel="noopener"
                                        aria-label="Join PSF Nagpur WhatsApp community">
                                        Join WhatsApp Community
                                    </a>

                                    <a class="btn btn-white-outline" href="#past-events">
                                        View Past Events
                                        <i class="bi bi-arrow-up-right ms-1"></i>
                                    </a>
                                </div>

                                <div class="events-hero-stats" data-aos="fade-up" data-aos-delay="400">
                                    <div v-for="item in engagementStats" :key="item.label" class="events-stat-card">
                                        <strong>{{ item.value }}</strong>
                                        <span>{{ item.label }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="events-hero-visual" data-aos="fade-in" data-aos-delay="500">
                                <img class="img-main img-fluid rounded-4" :src="heroImage"
                                    alt="Professionals participating in a community event" />

                                <div class="events-floating-card events-floating-card--top">
                                    <span class="events-floating-card__icon">
                                        <i class="bi bi-calendar-event"></i>
                                    </span>

                                    <div>
                                        <strong>Purposeful activities</strong>
                                        <span>Learning, networking, and community engagement</span>
                                    </div>
                                </div>

                                <div class="events-floating-card events-floating-card--bottom">
                                    <span class="events-floating-card__icon events-floating-card__icon--orange">
                                        <i class="bi bi-whatsapp"></i>
                                    </span>

                                    <div>
                                        <strong>Stay updated</strong>
                                        <span>Updates happen through our WhatsApp group</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End Events Hero -->

            <!-- ======= Past Events ======= -->
            <section class="section events-past" id="past-events">
                <div class="container">
                    <div class="row align-items-end mb-5 g-4">
                        <div class="col-lg-7">
                            <span class="events-subtitle text-uppercase" data-aos="fade-up" data-aos-delay="0">
                                Past Events
                            </span>

                            <h2 class="mb-3" data-aos="fade-up" data-aos-delay="100">
                                Our journey so far
                            </h2>

                            <p class="section-lead section-lead--left mb-0" data-aos="fade-up" data-aos-delay="200">
                                Meetups, discussions, workshops, retreats, and initiatives that have strengthened
                                the PSF Nagpur community.
                            </p>
                        </div>

                        <div class="col-lg-5 text-lg-end" data-aos="fade-up" data-aos-delay="250">
                            <button class="btn btn-white-outline" type="button" @click="togglePastEventsView">
                                {{ showAllPastEvents ? 'Back to Carousel' : 'Show All Past Events' }}
                                <i :class="[
                                    'bi',
                                    showAllPastEvents ? 'bi-arrow-left-short' : 'bi-grid-3x3-gap',
                                    'ms-1'
                                ]"></i>
                            </button>
                        </div>
                    </div>

                    <div v-if="!showAllPastEvents" class="past-events-carousel" data-aos="fade-up" data-aos-delay="300">
                        <Swiper class="past-events-swiper" :modules="swiperModules" :slides-per-view="1"
                            :space-between="18" :navigation="true" :pagination="{ clickable: true }"
                            :keyboard="{ enabled: true }" :breakpoints="pastEventsBreakpoints">
                            <SwiperSlide v-for="event in pastEvents" :key="event.slug">
                                <article class="event-card rounded-4 h-100">
                                    <div class="event-card__media">
                                        <img :src="event.cardImage || event.heroImage" :alt="event.title" />

                                        <div class="event-card__category">
                                            {{ event.category }}
                                        </div>
                                    </div>

                                    <div class="event-card__body">
                                        <div class="event-card__date mb-3">
                                            <i class="bi bi-calendar-event"></i>
                                            <span>{{ event.date }}</span>
                                        </div>

                                        <h3>{{ event.title }}</h3>

                                        <p>{{ event.summary }}</p>

                                        <RouterLink
                                            class="special-link d-inline-flex gap-2 align-items-center text-decoration-none"
                                            :to="{ name: 'event-details', params: { slug: event.slug } }"
                                            :aria-label="`Know more about ${event.title}`">
                                            <span class="icons">
                                                <i class="icon-1 bi bi-arrow-right-short"></i>
                                                <i class="icon-2 bi bi-arrow-right-short"></i>
                                            </span>
                                            <span>Know more</span>
                                        </RouterLink>
                                    </div>
                                </article>
                            </SwiperSlide>
                        </Swiper>

                        <!-- <p class="carousel-hint mb-0">
              Swipe or use arrows to explore more activities.
            </p> -->
                    </div>

                    <div v-else class="row g-4">
                        <div v-for="(event, index) in pastEvents" :key="event.slug" class="col-md-6 col-lg-4"
                            data-aos="fade-up" :data-aos-delay="index * 80">
                            <article class="event-card rounded-4 h-100">
                                <div class="event-card__media">
                                    <img :src="event.cardImage || event.heroImage" :alt="event.title" />

                                    <div class="event-card__category">
                                        {{ event.category }}
                                    </div>
                                </div>

                                <div class="event-card__body">
                                    <div class="event-card__date mb-3">
                                        <i class="bi bi-calendar-event"></i>
                                        <span>{{ event.date }}</span>
                                    </div>

                                    <h3>{{ event.title }}</h3>

                                    <p>{{ event.summary }}</p>

                                    <RouterLink
                                        class="special-link d-inline-flex gap-2 align-items-center text-decoration-none"
                                        :to="{ name: 'event-details', params: { slug: event.slug } }"
                                        :aria-label="`Know more about ${event.title}`">
                                        <span class="icons">
                                            <i class="icon-1 bi bi-arrow-right-short"></i>
                                            <i class="icon-2 bi bi-arrow-right-short"></i>
                                        </span>
                                        <span>Know more</span>
                                    </RouterLink>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End Past Events -->

            <!-- ======= Upcoming Events ======= -->
            <section class="section events-upcoming" id="upcoming-events">
                <div class="container">
                    <div class="upcoming-wrap rounded-4">
                        <div class="row align-items-center g-4">
                            <div class="col-lg-7" data-aos="fade-up" data-aos-delay="0">
                                <span class="events-subtitle text-uppercase">
                                    Upcoming Events
                                </span>

                                <h2 class="mb-3">Upcoming activities are being crafted</h2>

                                <p class="mb-0">
                                    New learning, networking, and community activities are in planning. Join our
                                    WhatsApp community or connect with us to get updates first.
                                </p>
                            </div>

                            <div class="col-lg-5" data-aos="fade-up" data-aos-delay="120">
                                <div class="upcoming-status-card rounded-4">
                                    <div class="upcoming-status-card__top">
                                        <span class="upcoming-status-card__icon">
                                            <i class="bi bi-hourglass-split"></i>
                                        </span>

                                        <div>
                                            <span class="upcoming-status-card__label">In development</span>
                                            <h3>Next activity coming soon</h3>
                                        </div>
                                    </div>

                                    <div class="upcoming-tags">
                                        <span>Learning</span>
                                        <span>Networking</span>
                                        <span>Community</span>
                                    </div>

                                    <div class="d-flex flex-wrap gap-2 mt-4">
                                        <a class="btn" :href="links.whatsapp" target="_blank" rel="noopener">
                                            Join for Updates
                                        </a>

                                        <RouterLink class="btn btn-white-outline" :to="links.connect">
                                            Connect with Us
                                        </RouterLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End Upcoming Events -->

            <!-- ======= Final CTA ======= -->
            <section class="section events-final-cta" id="events-final-cta">
                <div class="container">
                    <div class="events-final-cta__wrap rounded-4 bg-secondary">
                        <div class="row align-items-center g-4">
                            <div class="col-lg-8" data-aos="fade-up" data-aos-delay="0">
                                <span class="events-subtitle events-subtitle--light text-uppercase">
                                    Participate with purpose
                                </span>

                                <h2 class="mb-2">Want to be part of the next PSF Nagpur activity?</h2>

                                <p class="mb-0">
                                    Join the community, volunteer for an initiative, or suggest an activity that can
                                    help professionals grow together.
                                </p>
                            </div>

                            <div class="col-lg-4 text-lg-end" data-aos="fade-up" data-aos-delay="120">
                                <a class="btn btn-white hover-outline" :href="links.whatsapp" target="_blank"
                                    rel="noopener">
                                    Join WhatsApp Community
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End Final CTA -->
        </main>
    </div>
</template>
