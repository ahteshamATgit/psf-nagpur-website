<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'

const links = {
    connect: '/contact',
    team: '/team',
    events: '/events',
    initiatives: '/initiatives',
    whatsapp: 'https://chat.whatsapp.com/your-invite-link'
}

const heroImage =
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80'

const whoImage =
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1100&q=80'

const foundingImage =
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1100&q=80'

const quickActions = [
    {
        icon: 'bi-chat-dots',
        title: 'Connect with Us',
        text: 'Start a conversation with PSF Nagpur.',
        to: links.connect
    },
    {
        icon: 'bi-people',
        title: 'Know Our Team',
        text: 'Meet the people building the community.',
        to: links.team
    },
    {
        icon: 'bi-calendar-event',
        title: 'See Upcoming Events',
        text: 'Explore sessions, meets, and activities.',
        to: links.events
    },
    {
        icon: 'bi-heart',
        title: 'Our Initiatives',
        text: 'Discover our social impact efforts.',
        to: links.initiatives
    }
]

const communityMembers = [
    {
        icon: 'bi-gear',
        title: 'Engineers'
    },
    {
        icon: 'bi-heart-pulse',
        title: 'Doctors'
    },
    {
        icon: 'bi-briefcase',
        title: 'Entrepreneurs'
    },
    {
        icon: 'bi-mortarboard',
        title: 'Students'
    },
    {
        icon: 'bi-person-workspace',
        title: 'Working Professionals'
    }
]

const originPoints = [
    {
        number: '01',
        title: 'A simple intention',
        text: 'To bring professionals together on one platform where they can support each other.'
    },
    {
        number: '02',
        title: 'A shared space',
        text: 'A place for learning, collaboration, conversations, opportunities, and meaningful action.'
    },
    {
        number: '03',
        title: 'A growing community',
        text: 'What began as a small WhatsApp group has grown into a strong community of 70+ professionals.'
    }
]

const foundingSteps = [
    {
        icon: 'bi-lightbulb',
        title: 'The Idea',
        text: 'A few individuals saw the need for a space where professionals in Nagpur could connect beyond work.'
    },
    {
        icon: 'bi-chat-square-text',
        title: 'The Conversations',
        text: 'Discussions, small meets, and consistent efforts helped the community grow organically.'
    },
    {
        icon: 'bi-stars',
        title: 'The Movement',
        text: 'Today, PSF Nagpur continues to expand with a shared vision of growth, solidarity, and impact.'
    }
]

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
    <div class="site-wrap about-page">
        <main>
            <!-- ======= About Hero ======= -->
            <section class="hero__v6 section first-section about-page-hero" id="about-hero">
                <div class="container">
                    <div class="row align-items-center g-5">
                        <div class="col-lg-6">
                            <div class="about-hero-copy">
                                <span class="hero-subtitle text-uppercase" data-aos="fade-up" data-aos-delay="0">
                                    About PSF Nagpur
                                </span>

                                <h1 class="hero-title mb-3" data-aos="fade-up" data-aos-delay="100">
                                    Built by professionals, for professionals with a shared purpose
                                </h1>

                                <p class="hero-description mb-4" data-aos="fade-up" data-aos-delay="200">
                                    PSF Nagpur is a chapter of Professionals Solidarity Forum, built by and for
                                    professionals who believe in growth, collaboration, and community impact.
                                </p>

                                <div class="cta d-flex flex-wrap gap-2 mb-4 mb-lg-5" data-aos="fade-up"
                                    data-aos-delay="300">
                                    <RouterLink class="btn" :to="links.connect">
                                        Connect with Us
                                    </RouterLink>

                                    <RouterLink class="btn btn-white-outline" :to="links.team">
                                        Know Our Team
                                        <i class="bi bi-arrow-up-right ms-1"></i>
                                    </RouterLink>
                                </div>

                                <div class="about-hero-highlights" data-aos="fade-up" data-aos-delay="400">
                                    <div class="highlight-item">
                                        <strong>70+</strong>
                                        <span>Professionals</span>
                                    </div>

                                    <div class="highlight-item">
                                        <strong>5+</strong>
                                        <span>Professional backgrounds</span>
                                    </div>

                                    <div class="highlight-item">
                                        <strong>1</strong>
                                        <span>Shared purpose</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="about-hero-visual" data-aos="fade-in" data-aos-delay="500">
                                <img class="img-main img-fluid rounded-4" :src="heroImage"
                                    alt="Professionals collaborating in a community discussion" />

                                <div class="about-floating-card about-floating-card--top">
                                    <span class="about-floating-card__icon">
                                        <i class="bi bi-people"></i>
                                    </span>

                                    <div>
                                        <strong>Community first</strong>
                                        <span>Growth through connection, trust, and support</span>
                                    </div>
                                </div>

                                <div class="about-floating-card about-floating-card--bottom">
                                    <span class="about-floating-card__icon about-floating-card__icon--orange">
                                        <i class="bi bi-geo-alt"></i>
                                    </span>

                                    <div>
                                        <strong>Nagpur Chapter</strong>
                                        <span>Local professionals creating meaningful impact</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End About Hero -->

            <!-- ======= Quick Actions ======= -->
            <section class="about-quick-actions" aria-label="About page quick actions">
                <div class="container">
                    <div class="quick-actions-wrap rounded-4">
                        <div class="row g-3">
                            <div v-for="(item, index) in quickActions" :key="item.title" class="col-sm-6 col-lg-3"
                                data-aos="fade-up" :data-aos-delay="index * 80">
                                <RouterLink class="quick-action-card h-100" :to="item.to">
                                    <span class="quick-action-card__icon">
                                        <i :class="['bi', item.icon]"></i>
                                    </span>

                                    <span class="quick-action-card__content">
                                        <strong>{{ item.title }}</strong>
                                        <small>{{ item.text }}</small>
                                    </span>

                                    <i class="bi bi-arrow-right-short quick-action-card__arrow"></i>
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End Quick Actions -->

            <!-- ======= Who We Are ======= -->
            <section class="about__v4 section psf-who" id="who-we-are">
                <div class="container">
                    <div class="row align-items-center g-5">
                        <div class="col-lg-6">
                            <div class="psf-who-visual position-relative" data-aos="fade-up" data-aos-delay="0">
                                <img class="img-fluid rounded-4" :src="whoImage"
                                    alt="Diverse professionals working together" />

                                <div class="who-note rounded-4 bg-secondary">
                                    <div class="who-note__icon">
                                        <i class="bi bi-stars"></i>
                                    </div>

                                    <div>
                                        <h3 class="text-uppercase fw-bold mb-2">United by purpose</h3>
                                        <p class="mb-0">
                                            Engineers, doctors, entrepreneurs, students, and working professionals —
                                            growing together as one community.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="psf-who-copy">
                                <span class="subtitle text-uppercase mb-3 bg-primary-light" data-aos="fade-up"
                                    data-aos-delay="0">
                                    Who We Are
                                </span>

                                <h2 class="mb-4" data-aos="fade-up" data-aos-delay="100">
                                    A professional community rooted in solidarity
                                </h2>

                                <div data-aos="fade-up" data-aos-delay="200">
                                    <p>
                                        PSF Nagpur is a chapter of Professionals Solidarity Forum, built by and for
                                        professionals who believe in growth, collaboration, and community impact.
                                    </p>

                                    <p>
                                        We are engineers, doctors, entrepreneurs, students, and working professionals —
                                        united by a shared purpose.
                                    </p>
                                </div>

                                <div class="member-grid mt-4" data-aos="fade-up" data-aos-delay="300">
                                    <div v-for="item in communityMembers" :key="item.title" class="member-pill">
                                        <span>
                                            <i :class="['bi', item.icon]"></i>
                                        </span>
                                        <strong>{{ item.title }}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End Who We Are -->

            <!-- ======= Why Nagpur Chapter Started ======= -->
            <section class="section psf-origin" id="why-nagpur-chapter-started">
                <div class="container">
                    <div class="row mb-5">
                        <div class="col-lg-8 mx-auto text-center">
                            <span class="about-subtitle text-uppercase" data-aos="fade-up" data-aos-delay="0">
                                Why Nagpur Chapter Started
                            </span>

                            <h2 class="mb-3" data-aos="fade-up" data-aos-delay="100">
                                From a simple WhatsApp group to a strong professional community
                            </h2>

                            <p class="section-lead mb-0" data-aos="fade-up" data-aos-delay="200">
                                The Nagpur chapter started with a simple intention — to bring professionals
                                together on one platform where they can support each other, grow together, and
                                contribute to society.
                            </p>
                        </div>
                    </div>

                    <div class="origin-panel rounded-4">
                        <div class="row g-4 align-items-stretch">
                            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="0">
                                <div class="origin-summary h-100 rounded-4 bg-primary">
                                    <span class="origin-summary__label text-uppercase">Community Growth</span>

                                    <h3>70+ professionals and growing</h3>

                                    <p>
                                        What began as a small WhatsApp group has now grown into a strong community of
                                        professionals committed to growth, connection, and contribution.
                                    </p>

                                    <RouterLink class="btn btn-white hover-outline" :to="links.connect">
                                        Connect with Us
                                    </RouterLink>
                                </div>
                            </div>

                            <div class="col-lg-8">
                                <div class="origin-timeline h-100">
                                    <div v-for="(item, index) in originPoints" :key="item.title" class="origin-point"
                                        data-aos="fade-up" :data-aos-delay="index * 120">
                                        <span class="origin-point__number">{{ item.number }}</span>

                                        <div>
                                            <h3>{{ item.title }}</h3>
                                            <p class="mb-0">{{ item.text }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End Why Nagpur Chapter Started -->

            <!-- ======= Mission & Vision ======= -->
            <section class="section psf-mission-vision" id="mission-vision">
                <div class="container">
                    <div class="row mb-5">
                        <div class="col-lg-7 mx-auto text-center">
                            <span class="about-subtitle text-uppercase" data-aos="fade-up" data-aos-delay="0">
                                Mission & Vision
                            </span>

                            <h2 class="mb-3" data-aos="fade-up" data-aos-delay="100">
                                What guides PSF Nagpur forward
                            </h2>

                            <p class="section-lead mb-0" data-aos="fade-up" data-aos-delay="200">
                                Our work is shaped by a clear mission and a long-term vision for professional and
                                social growth.
                            </p>
                        </div>
                    </div>

                    <div class="row g-4">
                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="0">
                            <article class="mission-card mission-card--primary rounded-4 h-100">
                                <div class="mission-card__icon">
                                    <i class="bi bi-bullseye"></i>
                                </div>

                                <span class="mission-card__eyebrow text-uppercase">Mission</span>

                                <h3>Empower professionals through collaboration</h3>

                                <p>
                                    To empower professionals through collaboration, knowledge-sharing, and meaningful
                                    engagement.
                                </p>
                            </article>
                        </div>

                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="120">
                            <article class="mission-card mission-card--light rounded-4 h-100">
                                <div class="mission-card__icon">
                                    <i class="bi bi-eye"></i>
                                </div>

                                <span class="mission-card__eyebrow text-uppercase">Vision</span>

                                <h3>Build a strong, self-sustaining community</h3>

                                <p>
                                    To build a strong, self-sustaining community of professionals in Nagpur that
                                    contributes to both personal success and social well-being.
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End Mission & Vision -->

            <!-- ======= Founding Story ======= -->
            <section class="section psf-founding-story" id="founding-story">
                <div class="container">
                    <div class="row align-items-center g-5">
                        <div class="col-lg-6">
                            <div class="founding-copy">
                                <span class="about-subtitle text-uppercase" data-aos="fade-up" data-aos-delay="0">
                                    Founding Story
                                </span>

                                <h2 class="mb-4" data-aos="fade-up" data-aos-delay="100">
                                    A small beginning with a bigger vision for Nagpur
                                </h2>

                                <div data-aos="fade-up" data-aos-delay="200">
                                    <p>
                                        PSF Nagpur started as an initiative by a few individuals who believed that
                                        professionals in the city needed a space to connect beyond work.
                                    </p>

                                    <p>
                                        With consistent efforts, discussions, and activities, the community began to
                                        grow organically — and today, it continues to expand with a shared vision of
                                        growth and impact.
                                    </p>
                                </div>

                                <div class="founding-steps mt-4">
                                    <article v-for="(item, index) in foundingSteps" :key="item.title"
                                        class="founding-step" data-aos="fade-up" :data-aos-delay="index * 120">
                                        <div class="founding-step__icon">
                                            <i :class="['bi', item.icon]"></i>
                                        </div>

                                        <div>
                                            <h3>{{ item.title }}</h3>
                                            <p class="mb-0">{{ item.text }}</p>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="founding-visual position-relative" data-aos="fade-up" data-aos-delay="100">
                                <img class="img-fluid rounded-4" :src="foundingImage"
                                    alt="Professionals in a collaborative meeting" />

                                <div class="founding-quote rounded-4">
                                    <i class="bi bi-quote"></i>

                                    <p>
                                        “When professionals grow together, communities become stronger.”
                                    </p>

                                    <span>PSF Nagpur belief</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End Founding Story -->

            <!-- ======= About CTA ======= -->
            <section class="section psf-about-cta" id="about-cta">
                <div class="container">
                    <div class="about-cta-wrap rounded-4 bg-secondary">
                        <div class="row align-items-center g-5">
                            <div class="col-lg-7" data-aos="fade-up" data-aos-delay="0">
                                <span class="about-subtitle about-subtitle--light text-uppercase">
                                    Be part of PSF Nagpur
                                </span>

                                <h2 class="mb-3">Ready to connect, grow, and contribute?</h2>

                                <p class="mb-0">
                                    Join a growing community of professionals in Nagpur working together for personal
                                    growth, career development, meaningful relationships, and social impact.
                                </p>
                            </div>

                            <div class="col-lg-5" data-aos="fade-up" data-aos-delay="120">
                                <div class="about-cta-actions d-flex flex-wrap gap-2">
                                    <RouterLink class="btn btn-white hover-outline" :to="links.connect">
                                        Connect with Us
                                    </RouterLink>

                                    <RouterLink class="btn about-btn-outline-light" :to="links.events">
                                        See Upcoming Events
                                    </RouterLink>

                                    <RouterLink class="btn about-btn-outline-light" :to="links.initiatives">
                                        See Social Impact
                                    </RouterLink>

                                    <RouterLink class="about-team-link" :to="links.team">
                                        Know our team
                                        <i class="bi bi-arrow-right-short ms-1"></i>
                                    </RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End About CTA -->
        </main>
    </div>
</template>
