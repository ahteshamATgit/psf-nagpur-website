<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'

const links = {
    whatsapp: 'https://chat.whatsapp.com/your-invite-link',
    memberForm: '#'
}

const heroImage =
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1100&q=80'

const aboutImage =
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80'

const whyJoin = [
    {
        icon: 'bi-people',
        title: 'Strong Community',
        text: 'Connect with like-minded professionals who support and uplift each other.'
    },
    {
        icon: 'bi-graph-up-arrow',
        title: 'Career Growth',
        text: 'Learn, collaborate, and discover opportunities to grow in your profession.'
    },
    {
        icon: 'bi-bullseye',
        title: 'Purpose-Driven Work',
        text: 'Be part of initiatives that create real impact in society.'
    },
    {
        icon: 'bi-lightbulb',
        title: 'Continuous Learning',
        text: 'Participate in sessions, discussions, and workshops.'
    }
]

const verticals = [
    {
        icon: 'bi-diagram-3',
        title: 'Community & Networking',
        text: 'Building meaningful professional relationships across diverse fields.'
    },
    {
        icon: 'bi-briefcase',
        title: 'Career Growth',
        text: 'Guidance, mentorship, and opportunities that help professionals move forward.'
    },
    {
        icon: 'bi-mortarboard',
        title: 'Skill Development',
        text: 'Learning new skills, tools, and perspectives for today’s changing world.'
    },
    {
        icon: 'bi-heart',
        title: 'Social Impact',
        text: 'Giving back with purpose and serving the community through collective action.'
    }
]

const activities = [
    {
        image:
            'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
        tag: 'Community Meet',
        title: 'Professional Networking Circles',
        text: 'Small gatherings designed to help members exchange ideas, stories, and opportunities.'
    },
    {
        image:
            'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
        tag: 'Learning Session',
        title: 'Knowledge-Sharing Discussions',
        text: 'Interactive sessions where members learn from real professional experiences.'
    },
    {
        image:
            'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80',
        tag: 'Social Initiative',
        title: 'Purpose-Led Community Work',
        text: 'Collective initiatives that turn professional energy into meaningful social contribution.'
    }
]

const testimonials = [
    {
        quote: 'PSF Nagpur helped me connect with professionals I would have never met otherwise.',
        name: 'PSF Member',
        role: 'Community Member',
        initials: 'PM'
    },
    {
        quote: 'It’s more than a group — it’s a support system.',
        name: 'PSF Member',
        role: 'Active Volunteer',
        initials: 'AV'
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
    <div class="site-wrap landing-page">
        <main>
            <!-- ======= Hero ======= -->
            <section class="hero__v6 section psf-landing-hero" id="landing-hero">
                <div class="container">
                    <div class="row align-items-center g-5">
                        <div class="col-lg-6">
                            <div class="row">
                                <div class="col-xl-11">
                                    <span class="hero-subtitle text-uppercase bg-primary-light" data-aos="fade-up"
                                        data-aos-delay="0">
                                        PSF Nagpur Community
                                    </span>

                                    <h1 class="hero-title mb-3" data-aos="fade-up" data-aos-delay="100">
                                        A Community of Professionals in Nagpur, Growing Together & Creating Impact
                                    </h1>

                                    <p class="hero-description mb-4 mb-lg-5" data-aos="fade-up" data-aos-delay="200">
                                        PSF Nagpur brings together professionals from diverse fields to support each
                                        other’s growth, build meaningful connections, and contribute to society with
                                        purpose.
                                    </p>

                                    <div class="cta d-flex flex-wrap gap-2 mb-4 mb-lg-5" data-aos="fade-up"
                                        data-aos-delay="300">
                                        <a class="btn" :href="links.whatsapp" target="_blank" rel="noopener"
                                            aria-label="Join PSF Nagpur WhatsApp community">
                                            Join Our Community
                                        </a>

                                        <a class="btn btn-white-outline" href="#what-we-do">
                                            Explore What We Do
                                            <svg class="lucide lucide-arrow-up-right ms-1"
                                                xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <path d="M7 7h10v10"></path>
                                                <path d="M7 17 17 7"></path>
                                            </svg>
                                        </a>
                                    </div>

                                    <div class="psf-hero-proof" data-aos="fade-up" data-aos-delay="400">
                                        <div class="proof-item">
                                            <strong>70+</strong>
                                            <span>Professionals</span>
                                        </div>
                                        <div class="proof-item">
                                            <strong>4</strong>
                                            <span>Growth Verticals</span>
                                        </div>
                                        <div class="proof-item">
                                            <strong>1</strong>
                                            <span>Purposeful Community</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="hero-img psf-hero-visual" data-aos="fade-in" data-aos-delay="500">
                                <img class="img-main img-fluid rounded-4" :src="heroImage"
                                    alt="Professionals collaborating in a community discussion" />

                                <div class="psf-floating-card psf-floating-card--top" data-aos="fade-down"
                                    data-aos-delay="650">
                                    <span class="psf-floating-card__icon">
                                        <i class="bi bi-stars"></i>
                                    </span>
                                    <div>
                                        <strong>Growing together</strong>
                                        <span>Learning, mentorship & purpose</span>
                                    </div>
                                </div>

                                <div class="psf-floating-card psf-floating-card--bottom" data-aos="fade-up"
                                    data-aos-delay="750">
                                    <span class="psf-floating-card__icon psf-floating-card__icon--orange">
                                        <i class="bi bi-geo-alt"></i>
                                    </span>
                                    <div>
                                        <strong>Nagpur Chapter</strong>
                                        <span>A local network with shared impact</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End Hero -->

            <!-- ======= What is PSF Nagpur ======= -->
            <section class="about__v4 section psf-about" id="what-is-psf">
                <div class="container">
                    <div class="row align-items-center g-5">
                        <div class="col-lg-6 order-lg-2">
                            <div class="psf-about-copy">
                                <span class="subtitle text-uppercase mb-3 bg-secondary-light" data-aos="fade-up"
                                    data-aos-delay="0">
                                    What is PSF Nagpur
                                </span>

                                <h2 class="mb-4" data-aos="fade-up" data-aos-delay="100">
                                    A space for growth, connection, and contribution
                                </h2>

                                <div data-aos="fade-up" data-aos-delay="200">
                                    <p>
                                        Professionals Solidarity Forum (PSF) Nagpur is a growing community of
                                        professionals committed to personal growth, career development, and social
                                        responsibility.
                                    </p>

                                    <p>
                                        We believe that when individuals grow together, communities become stronger.
                                        From knowledge-sharing sessions to social initiatives, PSF is a space where
                                        professionals come together with purpose.
                                    </p>
                                </div>

                                <ul class="psf-about-list list-unstyled mt-4 mb-0" data-aos="fade-up"
                                    data-aos-delay="300">
                                    <li>
                                        <span class="check-icon"><i class="bi bi-check"></i></span>
                                        <span>Build meaningful relationships beyond your usual professional
                                            circle.</span>
                                    </li>
                                    <li>
                                        <span class="check-icon"><i class="bi bi-check"></i></span>
                                        <span>Learn from peers, mentors, entrepreneurs, and experienced
                                            professionals.</span>
                                    </li>
                                    <li>
                                        <span class="check-icon"><i class="bi bi-check"></i></span>
                                        <span>Turn professional capability into purposeful community impact.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-6 order-lg-1">
                            <div class="img-wrap position-relative psf-about-visual" data-aos="fade-up"
                                data-aos-delay="0">
                                <img class="img-fluid rounded-4" :src="aboutImage"
                                    alt="Professionals attending a collaborative learning session" />

                                <div class="mission-statement p-4 rounded-4 d-flex gap-4 bg-secondary"
                                    data-aos="fade-up" data-aos-delay="150">
                                    <div class="mission-icon text-center rounded-circle">
                                        <i class="bi bi-lightbulb fs-4"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-uppercase fw-bold text-white">Our Belief</h3>
                                        <p class="fs-5 mb-0">
                                            When professionals support one another, careers grow stronger and
                                            communities
                                            become more resilient.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End What is PSF Nagpur -->

            <!-- ======= Why Join Us ======= -->
            <section class="section features__v2 psf-why" id="why-join">
                <div class="container">
                    <div class="content bg-primary-lightest rounded-4 p-4 p-lg-5">
                        <div class="row align-items-center g-5">
                            <div class="col-lg-5" data-aos="fade-up" data-aos-delay="0">
                                <span class="landing-subtitle text-uppercase">Why Join Us</span>

                                <h2 class="mb-4">Why Professionals Are Joining PSF Nagpur</h2>

                                <p class="mb-0">
                                    PSF is designed for professionals who want more than networking. It is a place to
                                    learn, collaborate, serve, and grow with people who care about both personal
                                    progress and social responsibility.
                                </p>
                            </div>

                            <div class="col-lg-7">
                                <div class="row g-4">
                                    <div v-for="(item, index) in whyJoin" :key="item.title" class="col-sm-6"
                                        data-aos="fade-up" :data-aos-delay="index * 100">
                                        <article class="why-card h-100">
                                            <div class="icon text-center mb-4">
                                                <i :class="['bi', item.icon, 'fs-4']"></i>
                                            </div>
                                            <h3 class="fs-6 fw-bold mb-3">{{ item.title }}</h3>
                                            <p class="mb-0">{{ item.text }}</p>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End Why Join Us -->

            <!-- ======= What We Do ======= -->
            <section class="section services__v3 psf-verticals" id="what-we-do">
                <div class="container">
                    <div class="row mb-5">
                        <div class="col-md-8 mx-auto text-center">
                            <span class="subtitle text-uppercase mb-3 bg-primary-light" data-aos="fade-up"
                                data-aos-delay="0">
                                What We Do
                            </span>

                            <h2 class="mb-3" data-aos="fade-up" data-aos-delay="100">
                                Four focus areas for holistic professional growth
                            </h2>

                            <p class="section-lead mb-0" data-aos="fade-up" data-aos-delay="200">
                                We focus on four key areas to support personal development, professional success,
                                and meaningful contribution.
                            </p>
                        </div>
                    </div>

                    <div class="row g-4">
                        <div v-for="(item, index) in verticals" :key="item.title" class="col-md-6 col-lg-3"
                            data-aos="fade-up" :data-aos-delay="index * 100">
                            <article
                                class="service-card p-4 rounded-4 h-100 d-flex flex-column justify-content-between gap-4">
                                <div>
                                    <div class="icon text-center mb-4 bg-primary-light p-3 rounded-4">
                                        <i :class="['bi', item.icon, 'fs-4']"></i>
                                    </div>

                                    <h3 class="fs-5 mb-3">{{ item.title }}</h3>
                                    <p class="mb-0">{{ item.text }}</p>
                                </div>

                                <a class="special-link d-inline-flex gap-2 align-items-center text-decoration-none"
                                    href="#join">
                                    <span class="icons">
                                        <i class="icon-1 bi bi-arrow-right-short"></i>
                                        <i class="icon-2 bi bi-arrow-right-short"></i>
                                    </span>
                                    <span>Get involved</span>
                                </a>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End What We Do -->

            <!-- ======= Recent Activities ======= -->
            <section class="section psf-activities" id="activities">
                <div class="container">
                    <div class="row align-items-end mb-5 g-4">
                        <div class="col-lg-7">
                            <span class="landing-subtitle text-uppercase" data-aos="fade-up" data-aos-delay="0">
                                Recent Activities
                            </span>

                            <h2 class="mb-3" data-aos="fade-up" data-aos-delay="100">
                                What We’ve Been Doing
                            </h2>

                            <p class="activity-intro mb-0" data-aos="fade-up" data-aos-delay="200">
                                From small gatherings to impactful events, PSF Nagpur is actively creating
                                opportunities for connection and growth. Real event details can be added here later.
                            </p>
                        </div>

                        <div class="col-lg-5 text-lg-end" data-aos="fade-up" data-aos-delay="250">
                            <a class="btn btn-white-outline" href="#join">
                                Add Your Energy
                                <i class="bi bi-arrow-right-short ms-1"></i>
                            </a>
                        </div>
                    </div>

                    <div class="row g-4">
                        <div v-for="(item, index) in activities" :key="item.title" class="col-md-6 col-lg-4"
                            data-aos="fade-up" :data-aos-delay="index * 120">
                            <article class="activity-card rounded-4 h-100">
                                <div class="activity-card__media">
                                    <img :src="item.image" :alt="item.title" />
                                </div>

                                <div class="activity-card__body p-4">
                                    <span class="activity-card__tag">{{ item.tag }}</span>
                                    <h3 class="fs-5 mb-3">{{ item.title }}</h3>
                                    <p class="mb-0">{{ item.text }}</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End Recent Activities -->

            <!-- ======= Testimonials ======= -->
            <section class="section testimonials__v2 psf-testimonials" id="testimonials">
                <div class="container">
                    <div class="row mb-5">
                        <div class="col-md-7 mx-auto text-center">
                            <span class="subtitle text-uppercase mb-3 bg-primary-light" data-aos="fade-up"
                                data-aos-delay="0">
                                Testimonials
                            </span>

                            <h2 class="mb-3" data-aos="fade-up" data-aos-delay="100">
                                What Our Members Say
                            </h2>

                            <p class="mb-0" data-aos="fade-up" data-aos-delay="200">
                                The strongest part of PSF Nagpur is the people who show up, support, and grow
                                together.
                            </p>
                        </div>
                    </div>

                    <div class="row g-4 justify-content-center">
                        <div v-for="(item, index) in testimonials" :key="item.quote" class="col-md-6" data-aos="fade-up"
                            :data-aos-delay="index * 120">
                            <article class="testimonial p-4 rounded-4 h-100">
                                <div class="quote-icon mb-4">
                                    <i class="bi bi-quote"></i>
                                </div>

                                <p class="testimonial-quote mb-4">“{{ item.quote }}”</p>

                                <div class="testimonial-author d-flex gap-3 align-items-center">
                                    <div class="author-avatar rounded-circle">
                                        {{ item.initials }}
                                    </div>

                                    <div>
                                        <strong class="d-block">{{ item.name }}</strong>
                                        <span>{{ item.role }}</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End Testimonials -->

            <!-- ======= Final CTA ======= -->
            <section class="section psf-final-cta" id="join">
                <div class="container">
                    <div class="psf-final-cta__wrap rounded-4 bg-secondary">
                        <div class="row align-items-center g-5">
                            <div class="col-lg-7" data-aos="fade-up" data-aos-delay="0">
                                <span class="landing-subtitle landing-subtitle--light text-uppercase">
                                    Join PSF Nagpur
                                </span>

                                <h2 class="mb-3">Join 70+ Professionals Already Growing Together</h2>

                                <p class="mb-0">
                                    Be part of a community where professional growth, learning, relationships, and
                                    social impact come together with purpose.
                                </p>
                            </div>

                            <div class="col-lg-5" data-aos="fade-up" data-aos-delay="100">
                                <div class="psf-final-cta__stats mb-4">
                                    <div class="psf-final-cta__metric">
                                        <strong>70+</strong>
                                        <span>Members</span>
                                    </div>
                                    <div class="psf-final-cta__metric">
                                        <strong>4</strong>
                                        <span>Focus Areas</span>
                                    </div>
                                </div>

                                <div class="d-flex flex-wrap gap-2">
                                    <a class="btn btn-white hover-outline" :href="links.whatsapp" target="_blank"
                                        rel="noopener">
                                        Join WhatsApp Community
                                    </a>

                                    <a class="btn psf-btn-outline-light" :href="links.memberForm">
                                        Become a Member
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End Final CTA -->
        </main>
    </div>
</template>
