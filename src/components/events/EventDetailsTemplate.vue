<script setup>
import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination, Keyboard, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const props = defineProps({
    event: {
        type: Object,
        required: true
    }
})

const event = computed(() => props.event)

const galleryModules = [Autoplay, Navigation, Pagination, Keyboard, A11y]

const galleryBreakpoints = {
    576: {
        slidesPerView: 1.1,
        spaceBetween: 18
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 22
    },
    1200: {
        slidesPerView: 2.65,
        spaceBetween: 24
    }
}

const hasGallery = computed(() => {
    return Array.isArray(event.value.gallery) && event.value.gallery.length > 0
})

const galleryLoop = computed(() => {
    return Array.isArray(event.value.gallery) && event.value.gallery.length > 3
})

const eventInfo = computed(() => {
    return [
        {
            icon: 'bi-calendar-event',
            label: 'Date',
            value: event.value.date
        },
        {
            icon: 'bi-clock',
            label: 'Duration',
            value: event.value.duration
        },
        {
            icon: 'bi-grid',
            label: 'Format',
            value: event.value.format
        },
        {
            icon: 'bi-geo-alt',
            label: 'Location',
            value: event.value.location
        }
    ].filter((item) => item.value)
})
</script>

<template>
    <div class="event-details-template">
        <!-- ======= Event Detail Hero ======= -->
        <section class="hero__v6 section first-section event-detail-hero" id="event-detail-hero">
            <div class="container">
                <RouterLink class="event-detail-back-link" to="/events" data-aos="fade-up" data-aos-delay="0">
                    <i class="bi bi-arrow-left-short"></i>
                    Back to Events
                </RouterLink>

                <div class="row align-items-center g-5">
                    <div class="col-lg-6">
                        <div class="event-detail-hero-copy">
                            <slot name="eyebrow" :event="event">
                                <span class="hero-subtitle text-uppercase bg-primary-light" data-aos="fade-up" data-aos-delay="50">
                                    {{ event.category }}
                                </span>
                            </slot>

                            <h1 class="hero-title mb-3" data-aos="fade-up" data-aos-delay="100">
                                {{ event.title }}
                            </h1>

                            <p class="hero-description mb-4" data-aos="fade-up" data-aos-delay="200">
                                {{ event.lead || event.summary }}
                            </p>

                            <div class="event-detail-meta mb-4" data-aos="fade-up" data-aos-delay="300">
                                <div v-for="item in eventInfo" :key="item.label" class="event-detail-meta__item">
                                    <span class="event-detail-meta__icon">
                                        <i :class="['bi', item.icon]"></i>
                                    </span>

                                    <span>
                                        <small>{{ item.label }}</small>
                                        <strong>{{ item.value }}</strong>
                                    </span>
                                </div>
                            </div>

                            <slot name="heroActions" :event="event">
                                <div class="cta d-flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="400">
                                    <!-- <a v-if="event.cta?.primaryHref" class="btn" :href="event.cta.primaryHref"
                                        :target="event.cta.primaryExternal === false ? null : '_blank'"
                                        :rel="event.cta.primaryExternal === false ? null : 'noopener'">
                                        {{ event.cta?.primaryLabel || 'Join Community' }}
                                    </a>

                                    <RouterLink v-else class="btn" to="/contact">
                                        Connect with Us
                                    </RouterLink> -->

                                    <a class="btn" href="#event-gallery">
                                        View Gallery
                                        <i class="bi bi-arrow-down-short ms-1"></i>
                                    </a>
                                </div>
                            </slot>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="event-detail-hero-visual" data-aos="fade-in" data-aos-delay="500">
                            <img class="img-main img-fluid rounded-4" :src="event.heroImage || event.cardImage"
                                :alt="event.title" />

                            <div class="event-detail-floating-card event-detail-floating-card--top">
                                <span class="event-detail-floating-card__icon">
                                    <i class="bi bi-calendar-check"></i>
                                </span>

                                <div>
                                    <strong>{{ event.date }}</strong>
                                    <span>{{ event.format || 'PSF activity' }}</span>
                                </div>
                            </div>

                            <div class="event-detail-floating-card event-detail-floating-card--bottom">
                                <span class="event-detail-floating-card__icon event-detail-floating-card__icon--orange">
                                    <i class="bi bi-geo-alt"></i>
                                </span>

                                <div>
                                    <strong>{{ event.location || 'Nagpur' }}</strong>
                                    <span>{{ event.audience || 'PSF members and professionals' }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Event Detail Hero -->

        <!-- ======= Event Content ======= -->
        <section class="section event-detail-body" id="event-content">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-8">
                        <article class="event-article-card rounded-4" data-aos="fade-up" data-aos-delay="0">
                            <slot name="intro" :event="event">
                                <div class="event-intro-box rounded-4 mb-5">
                                    <span class="event-details-subtitle text-uppercase">
                                        Event Overview
                                    </span>

                                    <p class="mb-0">
                                        {{ event.summary }}
                                    </p>
                                </div>
                            </slot>

                            <slot name="content" :event="event">
                                <section v-for="section in event.content || []" :key="section.heading"
                                    class="event-content-section">
                                    <h2 v-if="section.heading">{{ section.heading }}</h2>

                                    <p v-for="paragraph in section.paragraphs || []" :key="paragraph">
                                        {{ paragraph }}
                                    </p>

                                    <ul v-if="section.points?.length" class="event-content-list list-unstyled">
                                        <li v-for="point in section.points" :key="point">
                                            <i class="bi bi-check2"></i>
                                            <span>{{ point }}</span>
                                        </li>
                                    </ul>
                                </section>
                            </slot>

                            <slot name="afterContent" :event="event"></slot>
                        </article>
                    </div>

                    <div class="col-lg-4">
                        <aside class="event-detail-sidebar" data-aos="fade-up" data-aos-delay="120">
                            <slot name="sidebar" :event="event">
                                <div class="event-sidebar-card rounded-4">
                                    <span class="event-details-subtitle text-uppercase">
                                        Event Details
                                    </span>

                                    <div class="sidebar-info-list">
                                        <div v-for="item in eventInfo" :key="item.label" class="sidebar-info-item">
                                            <span class="sidebar-info-item__icon">
                                                <i :class="['bi', item.icon]"></i>
                                            </span>

                                            <div>
                                                <small>{{ item.label }}</small>
                                                <strong>{{ item.value }}</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="event-sidebar-card rounded-4">
                                    <span class="event-details-subtitle text-uppercase">
                                        Address
                                    </span>

                                    <h3 class="mb-3">
                                        {{ event.address?.venue || 'Address to be updated' }}
                                    </h3>

                                    <p v-if="event.address?.street" class="mb-2">
                                        {{ event.address.street }}
                                    </p>

                                    <p v-if="event.address?.note" class="address-note mb-4">
                                        {{ event.address.note }}
                                    </p>

                                    <a v-if="event.address?.mapUrl"
                                        class="special-link d-inline-flex gap-2 align-items-center text-decoration-none"
                                        :href="event.address.mapUrl" target="_blank" rel="noopener">
                                        <span class="icons">
                                            <i class="icon-1 bi bi-arrow-right-short"></i>
                                            <i class="icon-2 bi bi-arrow-right-short"></i>
                                        </span>
                                        <span>Open in Maps</span>
                                    </a>
                                </div>

                                <div class="event-sidebar-card event-sidebar-card--cta rounded-4 bg-secondary">
                                    <h3>Want to join future activities?</h3>

                                    <p>
                                        Stay connected with PSF Nagpur for upcoming events, discussions, and community
                                        initiatives.
                                    </p>

                                    <a v-if="event.cta?.primaryHref" class="btn btn-white hover-outline"
                                        :href="event.cta.primaryHref"
                                        :target="event.cta.primaryExternal === false ? null : '_blank'"
                                        :rel="event.cta.primaryExternal === false ? null : 'noopener'">
                                        {{ event.cta?.primaryLabel || 'Join Community' }}
                                    </a>
                                </div>
                            </slot>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Event Content -->

        <slot name="beforeGallery" :event="event"></slot>

        <!-- ======= Event Gallery ======= -->
        <section v-if="hasGallery" class="section event-gallery-section" id="event-gallery">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-lg-7 mx-auto text-center">
                        <slot name="galleryHeader" :event="event">
                            <span class="event-details-subtitle text-uppercase" data-aos="fade-up" data-aos-delay="0">
                                Event Gallery
                            </span>

                            <h2 class="mb-3" data-aos="fade-up" data-aos-delay="100">
                                {{ event.galleryTitle || `Moments from ${event.title}` }}
                            </h2>

                            <p class="section-lead mb-0" data-aos="fade-up" data-aos-delay="200">
                                {{ event.galleryIntro || 'A quick look at moments from this PSF Nagpur activity.' }}
                            </p>
                        </slot>
                    </div>
                </div>

                <div class="event-gallery-carousel" data-aos="fade-up" data-aos-delay="250">
                    <Swiper class="event-gallery-swiper" :modules="galleryModules" :slides-per-view="1"
                        :space-between="18" :loop="galleryLoop" :speed="850" :autoplay="{
                            delay: 2600,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }" :navigation="true" :pagination="{ clickable: true }" :keyboard="{ enabled: true }"
                        :breakpoints="galleryBreakpoints">
                        <SwiperSlide v-for="(image, index) in event.gallery" :key="`${image.src}-${index}`">
                            <figure class="event-gallery-card rounded-4">
                                <img :src="image.src" :alt="image.alt || `${event.title} gallery image ${index + 1}`" />

                                <figcaption v-if="image.caption">
                                    {{ image.caption }}
                                </figcaption>
                            </figure>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
        <!-- End Event Gallery -->
    </div>
</template>