<script setup>
import { computed, onMounted } from 'vue'
import AOS from 'aos'

const links = {
  connect: '/contact',
  initiatives: '/initiatives',
  events: '/events',
  whatsapp: 'https://chat.whatsapp.com/your-invite-link'
}

const heroImages = [
  'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
  // 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
  // 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80'
]

const defaultSocials = [
  {
    name: 'LinkedIn',
    icon: 'bi-linkedin',
    href: '#'
  },
  {
    name: 'Instagram',
    icon: 'bi-instagram',
    href: '#'
  },
  {
    name: 'Email',
    icon: 'bi-envelope',
    href: 'mailto:connect@psfnagpur.org'
  }
]

const teamMembers = [
  {
    salutation: 'Janab',
    name: 'Muzammil Khan',
    firstName: 'Muzammil',
    highlightedName: 'Khan',
    role: 'President',
    department: 'Community Leadership',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80',
    bio: 'Leads PSF Nagpur’s vision, community direction, and overall coordination with a focus on sustainable growth.',
    isPresident: true,
    socials: defaultSocials
  },
  {
    salutation: 'Janab',
    name: 'Ahtesham Khan',
    firstName: 'Ahtesham',
    highlightedName: 'Khan',
    role: 'Head of Skills Development & Career Advancement',
    department: 'Career Growth',
    image:
      'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=900&q=80',
    bio: 'Leads learning, skill-building, career guidance, and growth-focused opportunities for members.',
    socials: defaultSocials
  },
  {
    salutation: 'Janab',
    name: 'Dr. Jauwad Khan',
    firstName: 'Dr. Jauwad',
    highlightedName: 'Khan',
    role: 'Head of Programs & Events',
    department: 'Programs',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
    bio: 'Shapes workshops, meetups, discussions, and community activities that bring professionals together.',
    socials: defaultSocials
  },
  {
    salutation: 'Janab',
    name: 'Ziyaullah Khan',
    firstName: 'Ziyaullah',
    highlightedName: 'Khan',
    role: 'Head of Communications & Campaigns',
    department: 'Communications',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80',
    bio: 'Drives campaign communication, member updates, and clear community messaging across PSF initiatives.',
    socials: defaultSocials
  },
  {
    salutation: 'Janab',
    name: 'M. Ali',
    firstName: 'M.',
    highlightedName: 'Ali',
    role: 'Head of HR & Member Engagement',
    department: 'Member Engagement',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
    bio: 'Focuses on onboarding, member connection, volunteer coordination, and healthy community participation.',
    socials: defaultSocials
  },
  {
    salutation: 'Janab',
    name: 'Mohammed Saquib',
    firstName: 'Mohammed',
    highlightedName: 'Saquib',
    role: 'Head of Digital Infra & Technology',
    department: 'Technology',
    image:
      'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?auto=format&fit=crop&w=900&q=80',
    bio: 'Supports PSF Nagpur’s digital systems, technical infrastructure, website, and online experience.',
    socials: defaultSocials
  },
  {
    salutation: 'Janab',
    name: 'Jauwad Quazi',
    firstName: 'Jauwad',
    highlightedName: 'Quazi',
    role: 'Head of Finance & Resource Mobilization',
    department: 'Finance',
    image:
      'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&w=900&q=80',
    bio: 'Guides finance coordination, resource planning, and responsible support for community-led activities.',
    socials: defaultSocials
  },
  {
    salutation: 'Mohtarma',
    name: 'Tahreem Ali',
    firstName: 'Tahreem',
    highlightedName: 'Ali',
    role: 'Head of Ladies Wing',
    department: 'Ladies Wing',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
    bio: 'Strengthens participation, connection, and leadership opportunities for women professionals in the community.',
    socials: defaultSocials
  },
  {
    salutation: 'Janab',
    name: 'Asim S.M.',
    firstName: 'Asim',
    highlightedName: 'S.M.',
    role: 'Head of Wellness & Recreation',
    department: 'Wellness',
    image:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=900&q=80',
    bio: 'Encourages well-being, recreation, team bonding, and refreshing activities for the PSF community.',
    socials: defaultSocials
  },
  {
    salutation: 'Janab',
    name: 'Naved Bakhtiyar',
    firstName: 'Naved',
    highlightedName: 'Bakhtiyar',
    role: 'Head of Brand Strategy & Positioning',
    department: 'Brand Strategy',
    image:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=900&q=80',
    bio: 'Shapes PSF Nagpur’s brand direction, positioning, storytelling, and public-facing identity.',
    socials: defaultSocials
  },
  {
    salutation: 'Janab',
    name: 'Nazim Akhtar',
    firstName: 'Nazim',
    highlightedName: 'Akhtar',
    role: 'Head of Social Responsibility & Empowerment',
    department: 'Social Impact',
    image:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80',
    bio: 'Leads social responsibility efforts, empowerment initiatives, and community impact planning.',
    socials: defaultSocials
  }
]

const president = computed(() => {
  return teamMembers.find((member) => member.isPresident)
})

const departmentHeads = computed(() => {
  // return teamMembers.filter((member) => !member.isPresident)
  return teamMembers
})

const teamStats = [
  {
    value: '11',
    label: 'Core team members'
  },
  {
    value: '10',
    label: 'Focused departments'
  },
  {
    value: '70+',
    label: 'Professionals supported'
  }
]

const teamPrinciples = [
  {
    icon: 'bi-people',
    title: 'Volunteer-led leadership',
    text: 'Each team member contributes time, effort, and expertise to grow PSF Nagpur.'
  },
  {
    icon: 'bi-diagram-3',
    title: 'Clear responsibilities',
    text: 'Every function has a focused lead so programs, communication, events, and initiatives move smoothly.'
  },
  {
    icon: 'bi-heart',
    title: 'Community-first mindset',
    text: 'The team works with a shared purpose: professional growth and meaningful social contribution.'
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
  <div class="site-wrap team-page">
    <main>
      <!-- ======= Team Hero ======= -->
      <section class="hero__v6 section first-section team-hero" id="team-hero">
        <div class="container">
          <div class="row align-items-center g-5">
            <div class="col-lg-6">
              <div class="team-hero-copy">
                <span class="hero-subtitle text-uppercase" data-aos="fade-up" data-aos-delay="0">
                  Core Team
                </span>

                <h1 class="hero-title mb-3" data-aos="fade-up" data-aos-delay="100">
                  Meet the Team Behind PSF Nagpur
                </h1>

                <p class="hero-description mb-4" data-aos="fade-up" data-aos-delay="200">
                  PSF Nagpur is driven by a dedicated team of professionals who volunteer their time
                  and effort to build and grow the community.
                </p>

                <div class="cta d-flex flex-wrap gap-2 mb-4 mb-lg-5" data-aos="fade-up" data-aos-delay="300">
                  <!-- <RouterLink class="btn" :to="links.connect">
                    Connect with the Team
                  </RouterLink> -->
                  <a href="#leaders" class="btn">Connect with the Team</a>

                  <RouterLink class="btn btn-white-outline" :to="links.initiatives">
                    See Our Initiatives
                    <i class="bi bi-arrow-up-right ms-1"></i>
                  </RouterLink>
                </div>

                <div class="team-hero-stats" data-aos="fade-up" data-aos-delay="400">
                  <div v-for="item in teamStats" :key="item.label" class="team-stat-card">
                    <strong>{{ item.value }}</strong>
                    <span>{{ item.label }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="team-hero-visual" data-aos="fade-in" data-aos-delay="500">
                <div class="team-hero-board rounded-4">
                  <div class="team-hero-board__header">
                    <span>Professionals Solidarity Forum Nagpur</span>
                    <strong>Core Team</strong>
                  </div>

                  <div class="team-hero-grid">
                    <div v-for="(image, index) in heroImages" :key="image" class="team-hero-tile rounded-4"
                      :class="{ 'team-hero-tile--large': index === 0 }">
                      <img :src="image" :alt="`PSF Nagpur core team representative ${index + 1}`" />
                    </div>
                  </div>

                  <!-- <div class="team-hero-president-card rounded-4">
                    <span class="team-hero-president-card__icon">
                      <i class="bi bi-star"></i>
                    </span>

                    <div>
                      <small>Led by</small>
                      <strong>{{ president?.name }}</strong>
                      <span>{{ president?.role }}</span>
                    </div>
                  </div> -->
                </div>

                <div class="team-floating-card team-floating-card--top">
                  <span class="team-floating-card__icon">
                    <i class="bi bi-people"></i>
                  </span>

                  <div>
                    <strong>Volunteer leadership</strong>
                    <span>Professionals building the community together</span>
                  </div>
                </div>

                <div class="team-floating-card team-floating-card--bottom">
                  <span class="team-floating-card__icon team-floating-card__icon--orange">
                    <i class="bi bi-diagram-3"></i>
                  </span>

                  <div>
                    <strong>Focused departments</strong>
                    <span>Events, skills, wellness, finance, impact & more</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End Team Hero -->

      <!-- ======= President Spotlight ======= -->
      <!-- <section class="section team-president" id="team-president">
        <div class="container">
          <div class="president-wrap rounded-4">
            <div class="row align-items-center g-5">
              <div class="col-lg-5" data-aos="fade-up" data-aos-delay="0">
                <div class="president-image-wrap rounded-4">
                  <img
                    :src="president?.image"
                    :alt="`${president?.name} placeholder portrait`"
                  />

                  <div class="president-badge rounded-4">
                    <span>President</span>
                    <strong>{{ president?.name }}</strong>
                  </div>
                </div>
              </div>

              <div class="col-lg-7" data-aos="fade-up" data-aos-delay="120">
                <span class="team-subtitle text-uppercase">
                  Leadership
                </span>

                <h2 class="mb-3">Guiding PSF Nagpur with purpose and direction</h2>

                <p class="mb-4">
                  The President provides strategic direction, coordination, and community guidance
                  so PSF Nagpur can continue growing as a strong professional network with a clear
                  purpose.
                </p>

                <div class="president-info-grid">
                  <div class="president-info-card">
                    <span>
                      <i class="bi bi-compass"></i>
                    </span>
                    <div>
                      <strong>Vision & direction</strong>
                      <small>Guides community growth and long-term priorities.</small>
                    </div>
                  </div>

                  <div class="president-info-card">
                    <span>
                      <i class="bi bi-people"></i>
                    </span>
                    <div>
                      <strong>Team coordination</strong>
                      <small>Supports department leads and volunteer efforts.</small>
                    </div>
                  </div>

                  <div class="president-info-card">
                    <span>
                      <i class="bi bi-heart"></i>
                    </span>
                    <div>
                      <strong>Community impact</strong>
                      <small>Keeps growth, solidarity, and service at the center.</small>
                    </div>
                  </div>
                </div>

                <div class="d-flex flex-wrap gap-2 mt-4">
                  <RouterLink class="btn" :to="links.connect">
                    Connect with Us
                  </RouterLink>

                  <RouterLink class="btn btn-white-outline" :to="links.events">
                    View Activities
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> -->
      <!-- End President Spotlight -->

      <!-- ======= Team Grid ======= -->
      <section class="section team-members" id="core-team">
        <div class="container">
          <div class="row mb-5">
            <div class="col-lg-7 mx-auto text-center">
              <span id="leaders" class="team-subtitle text-uppercase" data-aos="fade-up" data-aos-delay="0">
                Department Leads
              </span>

              <h2 class="mb-3" data-aos="fade-up" data-aos-delay="100">
                The professionals leading key areas of PSF Nagpur
              </h2>

              <p class="section-lead mb-0" data-aos="fade-up" data-aos-delay="200">
                From programs and events to social responsibility and technology, each team member
                leads a focused area that helps the community grow.
              </p>
            </div>
          </div>

          <div class="row g-4">
            <div v-for="(member, index) in departmentHeads" :key="member.name" class="col-md-6 col-lg-4"
              data-aos="fade-up" :data-aos-delay="index * 70">
              <article class="team-member-card rounded-4 h-100">
                <div class="team-member-card__image">
                  <img :src="member.image" :alt="`${member.name} placeholder portrait`" />

                  <span class="team-member-card__department">
                    {{ member.department }}
                  </span>
                </div>

                <div class="team-member-card__body">
                  <span class="team-member-card__salutation">
                    {{ member.salutation }}
                  </span>

                  <h3>
                    {{ member.firstName }}
                    <span>{{ member.highlightedName }}</span>
                  </h3>

                  <p class="team-member-card__role">
                    {{ member.role }}
                  </p>

                  <p class="team-member-card__bio">
                    {{ member.bio }}
                  </p>

                  <div class="team-member-card__socials">
                    <a v-for="social in member.socials" :key="social.name" :href="social.href" target="_blank"
                      rel="noopener" :aria-label="`${social.name} profile for ${member.name}`">
                      <i :class="['bi', social.icon]"></i>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <!-- End Team Grid -->

      <!-- ======= Team Principles ======= -->
      <section class="section team-principles" id="team-principles">
        <div class="container">
          <div class="principles-wrap rounded-4">
            <div class="row align-items-center g-5">
              <div class="col-lg-5" data-aos="fade-up" data-aos-delay="0">
                <span class="team-subtitle text-uppercase">
                  How We Work
                </span>

                <h2 class="mb-3">A team built around clarity, service, and collaboration</h2>

                <p class="mb-0">
                  PSF Nagpur’s team structure makes it easier to plan activities, support members,
                  run initiatives, and keep the community active with purpose.
                </p>
              </div>

              <div class="col-lg-7">
                <div class="row g-4">
                  <div v-for="(item, index) in teamPrinciples" :key="item.title" class="col-md-4" data-aos="fade-up"
                    :data-aos-delay="index * 100">
                    <article class="principle-card h-100">
                      <span class="principle-card__icon">
                        <i :class="['bi', item.icon]"></i>
                      </span>

                      <h3>{{ item.title }}</h3>
                      <p class="mb-0">{{ item.text }}</p>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End Team Principles -->

      <!-- ======= CTA ======= -->
      <section class="section team-final-cta" id="team-final-cta">
        <div class="container">
          <div class="team-final-cta__wrap rounded-4 bg-secondary">
            <div class="row align-items-center g-4">
              <div class="col-lg-8" data-aos="fade-up" data-aos-delay="0">
                <span class="team-subtitle team-subtitle--light text-uppercase">
                  Join the community
                </span>

                <h2 class="mb-2">Want to work with the PSF Nagpur team?</h2>

                <p class="mb-0">
                  Connect with us to volunteer, collaborate, suggest an initiative, or become part
                  of PSF Nagpur’s growing professional community.
                </p>
              </div>

              <div class="col-lg-4 text-lg-end" data-aos="fade-up" data-aos-delay="120">
                <a class="btn btn-white hover-outline" :href="links.whatsapp" target="_blank" rel="noopener">
                  Join WhatsApp Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End CTA -->
    </main>
  </div>
</template>
