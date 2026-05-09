<script setup>
import { nextTick, onMounted, ref } from 'vue'
import AOS from 'aos'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Keyboard, A11y } from 'swiper/modules'

import { socialInitiatives } from '../data/socialInitiatives'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const showAllInitiatives = ref(false)

const swiperModules = [Navigation, Pagination, Keyboard, A11y]

const initiativeBreakpoints = {
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
    connect: '/contact'
}

const heroImage =
    'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80'

const initiativeStats = [
    {
        value: '5+',
        label: 'Initiative areas'
    },
    {
        value: '70+',
        label: 'Professionals connected'
    },
    {
        value: '1',
        label: 'Purpose-led community'
    }
]

const processSteps = [
    {
        icon: 'bi-search',
        title: 'Identify needs',
        text: 'We listen to community needs and member suggestions.'
    },
    {
        icon: 'bi-people',
        title: 'Mobilize members',
        text: 'Professionals contribute time, skills, networks, or resources.'
    },
    {
        icon: 'bi-heart',
        title: 'Create impact',
        text: 'Initiatives are shaped around practical and meaningful support.'
    }
]

const toggleInitiativesView = async () => {
    showAllInitiatives.value = !showAllInitiatives.value

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
    <div class="site-wrap social-initiatives-page">
        <main>
            <!-- ======= Hero ======= -->
            <section class="hero__v6 section first-section initiatives-hero" id="initiatives-hero">
                <div class="container">
                    <div class="row align-items-center g-5">
                        <div class="col-lg-6">
                            <div class="initiatives-hero-copy">
                                <span class="hero-subtitle text-uppercase bg-primary-light" data-aos="fade-up" data-aos-delay="0">
                                    Social Initiatives
                                </span>

                                <h1 class="hero-title mb-3" data-aos="fade-up" data-aos-delay="100">
                                    Creating Meaningful Impact Through Collective Action
                                </h1>

                                <p class="hero-description mb-4" data-aos="fade-up" data-aos-delay="200">
                                    PSF Nagpur brings professionals together to support education, health, skill
                                    development, relief work, and community well-being.
                                </p>

                                <div class="cta d-flex flex-wrap gap-2 mb-4 mb-lg-5" data-aos="fade-up"
                                    data-aos-delay="300">
                                    <a class="btn" :href="links.whatsapp" target="_blank" rel="noopener">
                                        Join as Volunteer
                                    </a>

                                    <a class="btn btn-white-outline" href="#initiatives-list">
                                        Explore Initiatives
                                        <i class="bi bi-arrow-up-right ms-1"></i>
                                    </a>
                                </div>

                                <div class="initiatives-hero-stats" data-aos="fade-up" data-aos-delay="400">
                                    <div v-for="item in initiativeStats" :key="item.label"
                                        class="initiatives-stat-card">
                                        <strong>{{ item.value }}</strong>
                                        <span>{{ item.label }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="initiatives-hero-visual" data-aos="fade-in" data-aos-delay="500">
                                <img class="img-main img-fluid rounded-4" :src="heroImage"
                                    alt="Volunteers working together for a social initiative" />

                                <div class="initiatives-floating-card initiatives-floating-card--top">
                                    <span class="initiatives-floating-card__icon">
                                        <i class="bi bi-heart"></i>
                                    </span>

                                    <div>
                                        <strong>Purpose-led action</strong>
                                        <span>Professionals contributing beyond work</span>
                                    </div>
                                </div>

                                <div class="initiatives-floating-card initiatives-floating-card--bottom">
                                    <span
                                        class="initiatives-floating-card__icon initiatives-floating-card__icon--orange">
                                        <i class="bi bi-stars"></i>
                                    </span>

                                    <div>
                                        <strong>Community impact</strong>
                                        <span>Education, support, mentorship, and relief</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End Hero -->

            <!-- ======= Initiatives List ======= -->
            <section class="section initiatives-list" id="initiatives-list">
                <div class="container">
                    <div class="row align-items-end mb-5 g-4">
                        <div class="col-lg-7">
                            <span class="initiatives-subtitle text-uppercase" data-aos="fade-up" data-aos-delay="0">
                                Our Initiatives
                            </span>

                            <h2 class="mb-3" data-aos="fade-up" data-aos-delay="100">
                                Social initiatives led by PSF Nagpur
                            </h2>

                            <p class="section-lead section-lead--left mb-0" data-aos="fade-up" data-aos-delay="200">
                                Each initiative is shaped around real community needs, member participation, and
                                purposeful contribution.
                            </p>
                        </div>

                        <div class="col-lg-5 text-lg-end" data-aos="fade-up" data-aos-delay="250">
                            <button class="btn btn-white-outline" type="button" @click="toggleInitiativesView">
                                {{ showAllInitiatives ? 'Back to Carousel' : 'Show All Initiatives' }}
                                <i :class="[
                                    'bi',
                                    showAllInitiatives ? 'bi-arrow-left-short' : 'bi-grid-3x3-gap',
                                    'ms-1'
                                ]"></i>
                            </button>
                        </div>
                    </div>

                    <div v-if="!showAllInitiatives" class="initiatives-carousel" data-aos="fade-up"
                        data-aos-delay="300">
                        <Swiper class="initiatives-swiper" :modules="swiperModules" :slides-per-view="1"
                            :space-between="18" :navigation="true" :pagination="{ clickable: true }"
                            :keyboard="{ enabled: true }" :breakpoints="initiativeBreakpoints">
                            <SwiperSlide v-for="initiative in socialInitiatives" :key="initiative.slug">
                                <article class="initiative-card rounded-4 h-100">
                                    <div class="initiative-card__media">
                                        <img :src="initiative.cardImage || initiative.heroImage"
                                            :alt="initiative.title" />

                                        <div class="initiative-card__category">
                                            {{ initiative.category }}
                                        </div>

                                        <div v-if="initiative.website?.url" class="initiative-card__website-badge">
                                            <i class="bi bi-box-arrow-up-right"></i>
                                            Website
                                        </div>
                                    </div>

                                    <div class="initiative-card__body">
                                        <div class="initiative-card__status mb-3">
                                            <i class="bi bi-heart"></i>
                                            <span>{{ initiative.status }}</span>
                                        </div>

                                        <h3>{{ initiative.title }}</h3>

                                        <p>{{ initiative.summary }}</p>

                                        <div class="initiative-card__meta">
                                            <span>
                                                <i class="bi bi-bullseye"></i>
                                                {{ initiative.focus }}
                                            </span>
                                            <span>
                                                <i class="bi bi-geo-alt"></i>
                                                {{ initiative.location }}
                                            </span>
                                        </div>

                                        <RouterLink
                                            class="special-link d-inline-flex gap-2 align-items-center text-decoration-none"
                                            :to="{ name: 'social-initiative-details', params: { slug: initiative.slug } }"
                                            :aria-label="`Know more about ${initiative.title}`">
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

                        <p class="carousel-hint mb-0">
                            Swipe or use arrows to explore more initiatives.
                        </p>
                    </div>

                    <div v-else class="row g-4">
                        <div v-for="(initiative, index) in socialInitiatives" :key="initiative.slug"
                            class="col-md-6 col-lg-4" data-aos="fade-up" :data-aos-delay="index * 80">
                            <article class="initiative-card rounded-4 h-100">
                                <div class="initiative-card__media">
                                    <img :src="initiative.cardImage || initiative.heroImage" :alt="initiative.title" />

                                    <div class="initiative-card__category">
                                        {{ initiative.category }}
                                    </div>

                                    <div v-if="initiative.website?.url" class="initiative-card__website-badge">
                                        <i class="bi bi-box-arrow-up-right"></i>
                                        Website
                                    </div>
                                </div>

                                <div class="initiative-card__body">
                                    <div class="initiative-card__status mb-3">
                                        <i class="bi bi-heart"></i>
                                        <span>{{ initiative.status }}</span>
                                    </div>

                                    <h3>{{ initiative.title }}</h3>

                                    <p>{{ initiative.summary }}</p>

                                    <div class="initiative-card__meta">
                                        <span>
                                            <i class="bi bi-bullseye"></i>
                                            {{ initiative.focus }}
                                        </span>
                                        <span>
                                            <i class="bi bi-geo-alt"></i>
                                            {{ initiative.location }}
                                        </span>
                                    </div>

                                    <RouterLink
                                        class="special-link d-inline-flex gap-2 align-items-center text-decoration-none"
                                        :to="{ name: 'social-initiative-details', params: { slug: initiative.slug } }"
                                        :aria-label="`Know more about ${initiative.title}`">
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
            <!-- End Initiatives List -->

            <!-- ======= Process ======= -->
            <section class="section initiatives-process" id="initiatives-process">
                <div class="container">
                    <div class="process-wrap rounded-4">
                        <div class="row align-items-center g-5">
                            <div class="col-lg-5" data-aos="fade-up" data-aos-delay="0">
                                <span class="initiatives-subtitle text-uppercase">
                                    How We Create Impact
                                </span>

                                <h2 class="mb-3">Simple, practical, community-backed action</h2>

                                <p class="mb-0">
                                    PSF initiatives are shaped through member participation, local needs, and the
                                    belief that professionals can create change together.
                                </p>
                            </div>

                            <div class="col-lg-7">
                                <div class="row g-4">
                                    <div v-for="(step, index) in processSteps" :key="step.title" class="col-md-4"
                                        data-aos="fade-up" :data-aos-delay="index * 100">
                                        <article class="process-card h-100">
                                            <span class="process-card__icon">
                                                <i :class="['bi', step.icon]"></i>
                                            </span>

                                            <h3>{{ step.title }}</h3>
                                            <p class="mb-0">{{ step.text }}</p>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End Process -->

            <!-- ======= Final CTA ======= -->
            <section class="section initiatives-final-cta" id="initiatives-final-cta">
                <div class="container">
                    <div class="initiatives-final-cta__wrap rounded-4 bg-secondary">
                        <div class="row align-items-center g-4">
                            <div class="col-lg-8" data-aos="fade-up" data-aos-delay="0">
                                <span class="initiatives-subtitle initiatives-subtitle--light text-uppercase">
                                    Contribute with purpose
                                </span>

                                <h2 class="mb-2">Want to support a PSF Nagpur initiative?</h2>

                                <p class="mb-0">
                                    Join as a volunteer, suggest a community need, support an existing initiative, or
                                    help us shape the next one.
                                </p>
                            </div>

                            <div class="col-lg-4 text-lg-end" data-aos="fade-up" data-aos-delay="120">
                                <RouterLink class="btn btn-white hover-outline" :to="links.connect">
                                    Connect with Us
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End Final CTA -->
        </main>
    </div>
</template>
