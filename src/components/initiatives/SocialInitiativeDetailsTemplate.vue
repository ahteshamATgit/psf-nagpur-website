<script setup>
import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination, Keyboard, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const props = defineProps({
    initiative: {
        type: Object,
        required: true
    }
})

const initiative = computed(() => props.initiative)

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

const hasWebsite = computed(() => {
    return Boolean(initiative.value.website?.url)
})

const hasGallery = computed(() => {
    return Array.isArray(initiative.value.gallery) && initiative.value.gallery.length > 0
})

const galleryLoop = computed(() => {
    return Array.isArray(initiative.value.gallery) && initiative.value.gallery.length > 3
})

const initiativeInfo = computed(() => {
    return [
        {
            icon: 'bi-heart',
            label: 'Status',
            value: initiative.value.status
        },
        {
            icon: 'bi-bullseye',
            label: 'Focus',
            value: initiative.value.focus
        },
        {
            icon: 'bi-calendar-event',
            label: 'Timeline',
            value: initiative.value.date
        },
        {
            icon: 'bi-geo-alt',
            label: 'Location',
            value: initiative.value.location
        }
    ].filter((item) => item.value)
})
</script>

<template>
    <div class="social-initiative-details-template">
        <!-- ======= Initiative Hero ======= -->
        <section class="hero__v6 section first-section social-initiative-detail-hero" id="initiative-detail-hero">
            <div class="container">
                <RouterLink class="initiative-detail-back-link" to="/initiatives" data-aos="fade-up" data-aos-delay="0">
                    <i class="bi bi-arrow-left-short"></i>
                    Back to Initiatives
                </RouterLink>

                <div class="row align-items-center g-5">
                    <div class="col-lg-6">
                        <div class="initiative-detail-hero-copy">
                            <slot name="eyebrow" :initiative="initiative">
                                <span class="hero-subtitle text-uppercase bg-primary-light" data-aos="fade-up" data-aos-delay="50">
                                    {{ initiative.category }}
                                </span>
                            </slot>

                            <h1 class="hero-title mb-3" data-aos="fade-up" data-aos-delay="100">
                                {{ initiative.title }}
                            </h1>

                            <p class="hero-description mb-4" data-aos="fade-up" data-aos-delay="200">
                                {{ initiative.lead || initiative.summary }}
                            </p>

                            <div class="initiative-detail-meta mb-4" data-aos="fade-up" data-aos-delay="300">
                                <div v-for="item in initiativeInfo" :key="item.label"
                                    class="initiative-detail-meta__item">
                                    <span class="initiative-detail-meta__icon">
                                        <i :class="['bi', item.icon]"></i>
                                    </span>

                                    <span>
                                        <small>{{ item.label }}</small>
                                        <strong>{{ item.value }}</strong>
                                    </span>
                                </div>
                            </div>

                            <slot name="heroActions" :initiative="initiative" :has-website="hasWebsite">
                                <div class="cta d-flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="400">
                                    <a v-if="hasWebsite" class="btn" :href="initiative.website.url" target="_blank"
                                        rel="noopener">
                                        {{ initiative.website.label || 'Visit Initiative Website' }}
                                        <i class="bi bi-box-arrow-up-right ms-1"></i>
                                    </a>

                                    <RouterLink v-else-if="initiative.cta?.supportTo" class="btn"
                                        :to="initiative.cta.supportTo">
                                        {{ initiative.cta?.supportLabel || 'Connect with PSF' }}
                                    </RouterLink>

                                    <a v-else class="btn" :href="initiative.cta?.whatsappHref || '#'" target="_blank"
                                        rel="noopener">
                                        {{ initiative.cta?.whatsappLabel || 'Join Community' }}
                                    </a>

                                    <a class="btn btn-white-outline" href="#initiative-gallery">
                                        View Gallery
                                        <i class="bi bi-arrow-down-short ms-1"></i>
                                    </a>
                                </div>
                            </slot>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="initiative-detail-hero-visual" data-aos="fade-in" data-aos-delay="500">
                            <img class="img-main img-fluid rounded-4"
                                :src="initiative.heroImage || initiative.cardImage" :alt="initiative.title" />

                            <div class="initiative-detail-floating-card initiative-detail-floating-card--top">
                                <span class="initiative-detail-floating-card__icon">
                                    <i class="bi bi-heart"></i>
                                </span>

                                <div>
                                    <strong>{{ initiative.status }}</strong>
                                    <span>{{ initiative.focus || 'Community impact' }}</span>
                                </div>
                            </div>

                            <div class="initiative-detail-floating-card initiative-detail-floating-card--bottom">
                                <span
                                    class="initiative-detail-floating-card__icon initiative-detail-floating-card__icon--orange">
                                    <i class="bi bi-geo-alt"></i>
                                </span>

                                <div>
                                    <strong>{{ initiative.location || 'Nagpur' }}</strong>
                                    <span>{{ initiative.audience || 'Community beneficiaries' }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Initiative Hero -->

        <!-- ======= Initiative Content ======= -->
        <section class="section initiative-detail-body" id="initiative-content">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-8">
                        <article class="initiative-article-card rounded-4" data-aos="fade-up" data-aos-delay="0">
                            <slot name="intro" :initiative="initiative">
                                <div class="initiative-intro-box rounded-4 mb-5">
                                    <span class="initiative-details-subtitle text-uppercase">
                                        Initiative Overview
                                    </span>

                                    <p class="mb-0">
                                        {{ initiative.summary }}
                                    </p>
                                </div>
                            </slot>

                            <slot name="content" :initiative="initiative">
                                <section v-for="section in initiative.content || []" :key="section.heading"
                                    class="initiative-content-section">
                                    <h2 v-if="section.heading">{{ section.heading }}</h2>

                                    <p v-for="paragraph in section.paragraphs || []" :key="paragraph">
                                        {{ paragraph }}
                                    </p>

                                    <ul v-if="section.points?.length" class="initiative-content-list list-unstyled">
                                        <li v-for="point in section.points" :key="point">
                                            <i class="bi bi-check2"></i>
                                            <span>{{ point }}</span>
                                        </li>
                                    </ul>
                                </section>
                            </slot>

                            <slot name="afterContent" :initiative="initiative"></slot>
                        </article>
                    </div>

                    <div class="col-lg-4">
                        <aside class="initiative-detail-sidebar" data-aos="fade-up" data-aos-delay="120">
                            <slot name="sidebar" :initiative="initiative" :has-website="hasWebsite">
                                <div class="initiative-sidebar-card rounded-4">
                                    <span class="initiative-details-subtitle text-uppercase">
                                        Initiative Details
                                    </span>

                                    <div class="sidebar-info-list">
                                        <div v-for="item in initiativeInfo" :key="item.label" class="sidebar-info-item">
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

                                <div v-if="initiative.impactStats?.length" class="initiative-sidebar-card rounded-4">
                                    <span class="initiative-details-subtitle text-uppercase">
                                        Impact Snapshot
                                    </span>

                                    <div class="impact-stat-list">
                                        <div v-for="stat in initiative.impactStats" :key="`${stat.value}-${stat.label}`"
                                            class="impact-stat">
                                            <strong>{{ stat.value }}</strong>
                                            <span>{{ stat.label }}</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="initiative-sidebar-card rounded-4">
                                    <span class="initiative-details-subtitle text-uppercase">
                                        Address
                                    </span>

                                    <h3 class="mb-3">
                                        {{ initiative.address?.venue || 'Address to be updated' }}
                                    </h3>

                                    <p v-if="initiative.address?.street" class="mb-2">
                                        {{ initiative.address.street }}
                                    </p>

                                    <p v-if="initiative.address?.note" class="address-note mb-4">
                                        {{ initiative.address.note }}
                                    </p>

                                    <a v-if="initiative.address?.mapUrl"
                                        class="special-link d-inline-flex gap-2 align-items-center text-decoration-none"
                                        :href="initiative.address.mapUrl" target="_blank" rel="noopener">
                                        <span class="icons">
                                            <i class="icon-1 bi bi-arrow-right-short"></i>
                                            <i class="icon-2 bi bi-arrow-right-short"></i>
                                        </span>
                                        <span>Open in Maps</span>
                                    </a>
                                </div>

                                <div v-if="hasWebsite"
                                    class="initiative-sidebar-card initiative-sidebar-card--website rounded-4">
                                    <span class="initiative-details-subtitle text-uppercase">
                                        Dedicated Website
                                    </span>

                                    <h3>{{ initiative.website.label || 'Visit Initiative Website' }}</h3>

                                    <p>
                                        {{ 
                                            initiative.website.note || 'This initiative has a dedicated website with moredetails.' 
                                            }}
                                    </p>   

                                    <a class="btn" :href="initiative.website.url" target="_blank" rel="noopener">
                                        Open Website
                                        <i class="bi bi-box-arrow-up-right ms-1"></i>
                                    </a>
                                </div>

                                <div v-else
                                    class="initiative-sidebar-card initiative-sidebar-card--cta rounded-4 bg-secondary">
                                    <h3>Want to support this initiative?</h3>

                                    <p>
                                        This initiative does not have a separate website yet. Connect with PSF Nagpur
                                        to know more, volunteer, or contribute.
                                    </p>

                                    <RouterLink v-if="initiative.cta?.supportTo" class="btn btn-white hover-outline"
                                        :to="initiative.cta.supportTo">
                                        {{ initiative.cta?.supportLabel || 'Connect with PSF' }}
                                    </RouterLink>

                                    <a v-else class="btn btn-white hover-outline"
                                        :href="initiative.cta?.whatsappHref || '#'" target="_blank" rel="noopener">
                                        {{ initiative.cta?.whatsappLabel || 'Join Community' }}
                                    </a>
                                </div>
                            </slot>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Initiative Content -->

        <slot name="beforeGallery" :initiative="initiative"></slot>

        <!-- ======= Initiative Gallery ======= -->
        <section v-if="hasGallery" class="section initiative-gallery-section" id="initiative-gallery">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-lg-7 mx-auto text-center">
                        <slot name="galleryHeader" :initiative="initiative">
                            <span class="initiative-details-subtitle text-uppercase" data-aos="fade-up"
                                data-aos-delay="0">
                                Initiative Gallery
                            </span>

                            <h2 class="mb-3" data-aos="fade-up" data-aos-delay="100">
                                {{ initiative.galleryTitle || `Moments from ${initiative.title}` }}
                            </h2>

                            <p class="section-lead mb-0" data-aos="fade-up" data-aos-delay="200">
                                {{
                                    initiative.galleryIntro ||
                                'A quick look at moments from this PSF Nagpur social initiative.'
                                }}
                            </p>
                        </slot>
                    </div>
                </div>

                <div class="initiative-gallery-carousel" data-aos="fade-up" data-aos-delay="250">
                    <Swiper class="initiative-gallery-swiper" :modules="galleryModules" :slides-per-view="1"
                        :space-between="18" :loop="galleryLoop" :speed="850" :autoplay="{
                            delay: 2600,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }" :navigation="true" :pagination="{ clickable: true }" :keyboard="{ enabled: true }"
                        :breakpoints="galleryBreakpoints">
                        <SwiperSlide v-for="(image, index) in initiative.gallery" :key="`${image.src}-${index}`">
                            <figure class="initiative-gallery-card rounded-4">
                                <img :src="image.src"
                                    :alt="image.alt || `${initiative.title} gallery image ${index + 1}`" />

                                <figcaption v-if="image.caption">
                                    {{ image.caption }}
                                </figcaption>
                            </figure>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
        <!-- End Initiative Gallery -->
    </div>
</template>