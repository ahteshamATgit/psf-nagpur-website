<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import AOS from 'aos'
import GLightbox from 'glightbox'
// import PureCounter from 'purecounterjs'
import PureCounter from '@srexi/purecounterjs'

const currentYear = ref(new Date().getFullYear())

onMounted(() => {
  AOS.init({
    duration: 800,
    easing: 'slide',
    once: true
  })

  GLightbox({
    selector: '.glightbox'
  })

  new PureCounter()

  AOS.refresh()
})
</script>

<template>
  <!-- ======= Site Wrap =======-->
  <div class="site-wrap">




    <!-- ======= Main =======-->
    <main>


      <!-- ======= Hero =======-->
      <section class="hero__v6 section" id="home">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 mb-4 mb-lg-0">
              <div class="row">
                <div class="col-lg-11"><span class="hero-subtitle text-uppercase bg-primary-light" data-aos="fade-up"
                    data-aos-delay="0">Innovative Fintech Solutions</span>
                  <h1 class="hero-title mb-3" data-aos="fade-up" data-aos-delay="100">Secure, Efficient, and
                    User-Friendly Financial Services</h1>
                  <p class="hero-description mb-4 mb-lg-5" data-aos="fade-up" data-aos-delay="200">Experience the future
                    of finance with our secure, efficient, and user-friendly financial services.</p>
                  <div class="cta d-flex gap-2 mb-4 mb-lg-5" data-aos="fade-up" data-aos-delay="300"><a class="btn"
                      href="#">Get Started Now</a><a class="btn btn-white-outline" href="#">Learn More
                      <svg class="lucide lucide-arrow-up-right" xmlns="http://www.w3.org/2000/svg" width="18"
                        height="18" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M7 7h10v10"></path>
                        <path d="M7 17 17 7"></path>
                      </svg></a></div>
                  <div class="logos mb-4" data-aos="fade-up" data-aos-delay="400"><span
                      class="logos-title text-uppercase mb-4 d-block">Trusted by major companies worldwide</span>
                    <div class="logos-images d-flex gap-4 align-items-center"><img
                        class="img-fluid js-img-to-inline-svg"
                        src="/assets/images/logo/actual-size/logo-air-bnb__black.svg" alt="Company 1"
                        style="width: 110px;"><img class="img-fluid js-img-to-inline-svg"
                        src="/assets/images/logo/actual-size/logo-ibm__black.svg" alt="Company 2"
                        style="width: 80px;"><img class="img-fluid js-img-to-inline-svg"
                        src="/assets/images/logo/actual-size/logo-google__black.svg" alt="Company 3"
                        style="width: 110px;"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="hero-img"><img class="img-card img-fluid" src="/assets/images/card-expenses.png"
                  alt="Image card" data-aos="fade-down" data-aos-delay="600"><img class="img-main img-fluid rounded-4"
                  src="/assets/images/hero-img-1-min.jpg" alt="Hero Image" data-aos="fade-in" data-aos-delay="500">
              </div>
            </div>
          </div>
        </div>
        <!-- End Hero-->
      </section>
      <!-- End Hero-->

      <!-- ======= About =======-->
      <section class="about__v4 section " id="about">
        <div class="container">
          <div class="row">
            <div class="col-md-6 order-md-2">
              <div class="row justify-content-end">
                <div class="col-md-11 mb-4 mb-md-0"><span
                    class="subtitle text-uppercase mb-3 bg-secondary-light text-heading-custom" data-aos="fade-up"
                    data-aos-delay="0">About us</span>
                  <h2 class="mb-4" data-aos="fade-up" data-aos-delay="100">Experience the future of finance with our
                    secure, efficient, and user-friendly financial services</h2>
                  <div data-aos="fade-up" data-aos-delay="200">
                    <p>Founded with the vision of revolutionizing the financial industry, we are a leading fintech
                      company dedicated to providing innovative and secure financial solutions.</p>
                    <p>Our cutting-edge platform ensures your transactions are safe, streamlined, and easy to manage,
                      empowering you to take control of your financial journey with confidence and convenience.</p>
                  </div>
                  <h4 class="small fw-bold mt-4 mb-3" data-aos="fade-up" data-aos-delay="300">Key Values and Vision</h4>
                  <ul class="d-flex flex-row flex-wrap list-unstyled gap-3 features" data-aos="fade-up"
                    data-aos-delay="400">
                    <li class="d-flex align-items-center gap-2"><span
                        class="icon rounded-circle text-center bg-secondary"><i class="bi bi-check"></i></span><span
                        class="text">Innovation</span></li>
                    <li class="d-flex align-items-center gap-2"><span
                        class="icon rounded-circle text-center bg-secondary"><i class="bi bi-check"></i></span><span
                        class="text">Security</span></li>
                    <li class="d-flex align-items-center gap-2"><span
                        class="icon rounded-circle text-center bg-secondary"><i class="bi bi-check"></i></span><span
                        class="text">User-Centric Design </span></li>
                    <li class="d-flex align-items-center gap-2"><span
                        class="icon rounded-circle text-center bg-secondary"><i class="bi bi-check"></i></span><span
                        class="text">Transparency</span></li>
                    <li class="d-flex align-items-center gap-2"><span
                        class="icon rounded-circle text-center bg-secondary"><i class="bi bi-check"></i></span><span
                        class="text">Empowerment</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="img-wrap position-relative"><img class="img-fluid rounded-4"
                  src="/assets/images/about_2-min.jpg" alt="FreeBootstrap.net image placeholder" data-aos="fade-up"
                  data-aos-delay="0">
                <div class="mission-statement p-4 rounded-4 d-flex gap-4 bg-secondary" data-aos="fade-up"
                  data-aos-delay="100">
                  <div class="mission-icon text-center rounded-circle bg-secondary-light"><i
                      class="bi bi-lightbulb fs-4"></i></div>
                  <div>
                    <h3 class="text-uppercase fw-bold text-white">Mission Statement</h3>
                    <p class="fs-5 mb-0">Our mission is to empower individuals and businesses by delivering secure,
                      efficient, and user-friendly financial services.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End About-->

      <!-- ======= Features =======-->
      <section class="section features__v2 " id="features">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="d-lg-flex p-5 rounded-4 content bg-primary-lightest" data-aos="fade-in" data-aos-delay="0">
                <div class="row">
                  <div class="col-lg-5 mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="0">
                    <div class="row">
                      <div class="col-lg-11">
                        <div class="h-100 flex-column justify-content-between d-flex">
                          <div>
                            <h2 class="mb-4">Why Choose us</h2>
                            <p class="mb-5">Experience the future of finance with our secure, efficient, and
                              user-friendly financial services. Our cutting-edge platform ensures your transactions are
                              safe, streamlined, and easy to manage, empowering you to take control of your financial
                              journey with confidence and convenience."</p>
                          </div>
                          <div class="align-self-start"><a
                              class="glightbox btn btn-play d-inline-flex align-items-center gap-2"
                              href="https://www.youtube.com/watch?v=DQx96G4yHd8" data-gallery="video"><i
                                class="bi bi-play-fill"></i> Watch the Video</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-7">
                    <div class="row justify-content-end">
                      <div class="col-lg-11">
                        <div class="row">
                          <div class="col-sm-6" data-aos="fade-up" data-aos-delay="0">
                            <div class="icon text-center mb-4"><i class="bi bi-person-check fs-4"></i></div>
                            <h3 class="fs-6 fw-bold mb-3">User-Friendly Interface</h3>
                            <p>Easy navigation with responsive design for various devices.</p>
                          </div>
                          <div class="col-sm-6" data-aos="fade-up" data-aos-delay="100">
                            <div class="icon text-center mb-4"><i class="bi bi-graph-up fs-4"></i></div>
                            <h3 class="fs-6 fw-bold mb-3">Financial Analytics</h3>
                            <p>Budget tracking, expense categorization, and personalized insights.</p>
                          </div>
                          <div class="col-sm-6" data-aos="fade-up" data-aos-delay="200">
                            <div class="icon text-center mb-4"><i class="bi bi-headset fs-4"></i></div>
                            <h3 class="fs-6 fw-bold mb-3">Customer Support</h3>
                            <p>24/7 service via chat, email, phone, and a detailed help center.</p>
                          </div>
                          <div class="col-sm-6" data-aos="fade-up" data-aos-delay="300">
                            <div class="icon text-center mb-4"><i class="bi bi-shield-lock fs-4"></i></div>
                            <h3 class="fs-6 fw-bold mb-3">Security Features</h3>
                            <p>Data encryption, fraud detection, and prevention mechanisms.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End Features-->

      <!-- ======= Pricing =======-->
      <section class="section pricing__v2" id="pricing">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-5 mx-auto text-center"><span
                class="subtitle text-uppercase mb-3 bg-secondary-light text-heading-custom" data-aos="fade-up"
                data-aos-delay="0">Pricing</span>
              <h2 class="mb-3" data-aos="fade-up" data-aos-delay="100">Plan for every budget</h2>
              <p data-aos="fade-up" data-aos-delay="200">Experience the future of finance with our secure, efficient,
                and user-friendly financial services</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 mb-4 mb-md-0" data-aos="fade-up" data-aos-delay="300">
              <div class="p-5 rounded-4 price-table h-100">
                <h3>Personal</h3>
                <p>Choose a plan that fits your personal financial needs and start managing your finances more
                  effectively.</p>
                <div class="price mb-4"><strong>$7</strong><span>/ month</span></div>
                <div><a class="btn" href="#">Get Started</a></div>
              </div>
            </div>
            <div class="col-md-8" data-aos="fade-up" data-aos-delay="400">
              <div class="p-5 rounded-4 price-table popular h-100 bg-secondary">
                <div class="row">
                  <div class="col-md-6">
                    <h3 class="mb-3">Business</h3>
                    <p>Optimize your business financial operations with our tailored business plans.</p>
                    <div class="price mb-4"><strong class="me-1">$29</strong><span>/ month</span></div>
                    <div><a class="btn btn-white hover-outline" href="#">Get Started</a></div>
                  </div>
                  <div class="col-md-6 pricing-features">
                    <h4 class="text-uppercase fw-bold mb-3">Features</h4>
                    <ul class="list-unstyled d-flex flex-column gap-3">
                      <li class="d-flex gap-2 align-items-start mb-0"><span
                          class="icon rounded-circle position-relative mt-1"><i
                            class="bi bi-check"></i></span><span>Personalized financial insights and reports</span></li>
                      <li class="d-flex gap-2 align-items-start mb-0"><span
                          class="icon rounded-circle position-relative mt-1"><i
                            class="bi bi-check"></i></span><span>Priority customer support</span></li>
                      <li class="d-flex gap-2 align-items-start mb-0"><span
                          class="icon rounded-circle position-relative mt-1"><i
                            class="bi bi-check"></i></span><span>Access to exclusive investment opportunities</span>
                      </li>
                      <li class="d-flex gap-2 align-items-start mb-0"><span
                          class="icon rounded-circle position-relative mt-1"><i
                            class="bi bi-check"></i></span><span>AI-driven financial recommendations</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End Pricing-->

      <!-- ======= How it works =======-->
      <section class="section howitworks__v1" id="how-it-works">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-6 text-center mx-auto"><span class="subtitle text-uppercase mb-3 bg-primary-light"
                data-aos="fade-up" data-aos-delay="0">How it works</span>
              <h2 data-aos="fade-up" data-aos-delay="100">How It Works</h2>
              <p data-aos="fade-up" data-aos-delay="200">Our platform is designed to make managing your finances simple
                and efficient. Follow these easy steps to get started: </p>
            </div>
          </div>
          <div class="row g-md-5">
            <div class="col-md-6 col-lg-3">
              <div class="step-card text-center h-100 d-flex flex-column justify-content-start position-relative"
                data-aos="fade-up" data-aos-delay="0">
                <div data-aos="fade-right" data-aos-delay="500"><img class="arch-line"
                    src="/assets/images/arch-line.svg" alt="FreeBootstrap.net image placeholder"></div><span
                  class="step-number rounded-circle text-center fw-bold mb-5 mx-auto text-white">1</span>
                <div>
                  <h3 class="fs-5 mb-4">Sign Up</h3>
                  <p>Visit our website or download our app to sign up. Provide basic information to set up your secure
                    account.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="600">
              <div
                class="step-card reverse text-center h-100 d-flex flex-column justify-content-start position-relative">
                <div data-aos="fade-right" data-aos-delay="1100"><img class="arch-line reverse"
                    src="/assets/images/arch-line-reverse.svg" alt="FreeBootstrap.net image placeholder"></div><span
                  class="step-number rounded-circle text-center fw-bold mb-5 mx-auto text-white">2</span>
                <h3 class="fs-5 mb-4">Set Up Your Profile</h3>
                <p>Add your personal or business details to tailor the platform to your specific needs.</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="1200">
              <div class="step-card text-center h-100 d-flex flex-column justify-content-start position-relative">
                <div data-aos="fade-right" data-aos-delay="1700"><img class="arch-line"
                    src="/assets/images/arch-line.svg" alt="FreeBootstrap.net image placeholder"></div><span
                  class="step-number rounded-circle text-center fw-bold mb-5 mx-auto text-white">3</span>
                <h3 class="fs-5 mb-4">Explore Features</h3>
                <p>Access your dashboard for a summary of your finances: balances, recent transactions, and insights.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="1800">
              <div class="step-card last text-center h-100 d-flex flex-column justify-content-start position-relative">
                <span class="step-number rounded-circle text-center fw-bold mb-5 mx-auto text-white">4</span>
                <div>
                  <h3 class="fs-5 mb-4">Invest and Grow</h3>
                  <p>Discover a variety of investment opportunities tailored to your financial goals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End How it works-->

      <!-- ======= Stats =======-->
      <section class="stats__v3 section">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="d-flex flex-wrap content rounded-4 bg-secondary" data-aos="fade-up" data-aos-delay="0">
                <div class="rounded-borders">
                  <div class="rounded-border-1"></div>
                  <div class="rounded-border-2"></div>
                  <div class="rounded-border-3"></div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0 text-center" data-aos="fade-up" data-aos-delay="100">
                  <div class="stat-item">
                    <h3 class="fs-1 fw-bold text-white"><span class="purecounter" data-purecounter-start="0"
                        data-purecounter-end="10" data-purecounter-duration="2">0</span><span>K+</span></h3>
                    <p class="mb-0">Customer Satisfaction</p>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0 text-center" data-aos="fade-up" data-aos-delay="200">
                  <div class="stat-item">
                    <h3 class="fs-1 fw-bold text-white"> <span class="purecounter" data-purecounter-start="0"
                        data-purecounter-end="200" data-purecounter-duration="2">0</span><span>%+</span></h3>
                    <p class="mb-0">Revenue Increase</p>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0 text-center" data-aos="fade-up" data-aos-delay="300">
                  <div class="stat-item">
                    <h3 class="fs-1 fw-bold text-white"><span class="purecounter" data-purecounter-start="0"
                        data-purecounter-end="20" data-purecounter-duration="2">0</span><span>x</span></h3>
                    <p class="mb-0">Business Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End Stats-->

      <!-- ======= Services =======-->
      <section class="section services__v3" id="services">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-8 mx-auto text-center"><span class="subtitle text-uppercase mb-3 bg-primary-light"
                data-aos="fade-up" data-aos-delay="0">Our Services</span>
              <h2 class="mb-3" data-aos="fade-up" data-aos-delay="100">Empowering Financial Innovation Through
                Cutting-Edge Services</h2>
            </div>
          </div>
          <div class="row g-4">
            <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="0">
              <div class="service-card p-4 rounded-4 h-100 d-flex flex-column justify-content-between gap-5">
                <div>
                  <div class="icon text-center mb-4 bg-primary-light p-3 rounded-4" data-v-inspector="src/views/Home.vue:180:29"><i
                      class="bi bi-graph-up fs-4" data-v-inspector="src/views/Home.vue:180:64"></i></div>
                  <h3 class="fs-5 mb-3">Digital Payments</h3>
                  <p class="">Seamless and secure transactions through various digital platforms, enabling quick and
                    convenient payments for businesses and consumers alike.</p>
                </div><a class="special-link d-inline-flex gap-2 align-items-center text-decoration-none" href="#"><span
                    class="icons"><i class="icon-1 bi bi-arrow-right-short"></i><i
                      class="icon-2 bi bi-arrow-right-short"> </i></span><span>Read more</span></a>
              </div>
            </div>
            <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div class="service-card p-4 rounded-4 h-100 d-flex flex-column justify-content-between gap-5">
                <div>
                                    <div class="icon text-center mb-4 bg-primary-light p-3 rounded-4" data-v-inspector="src/views/Home.vue:180:29"><i
                      class="bi bi-graph-up fs-4" data-v-inspector="src/views/Home.vue:180:64"></i></div>
                  <h3 class="fs-5 mb-3">Personal Finance Management</h3>
                  <p class="">Seamless and secure transactions through various digital platforms, enabling quick and
                    convenient payments for businesses and consumers alike.</p>
                </div><a class="special-link d-inline-flex gap-2 align-items-center text-decoration-none" href="#"><span
                    class="icons"><i class="icon-1 bi bi-arrow-right-short"></i><i
                      class="icon-2 bi bi-arrow-right-short"> </i></span><span>Read more</span></a>
              </div>
            </div>
            <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div class="service-card p-4 rounded-4 h-100 d-flex flex-column justify-content-between gap-5">
                <div>
                                    <div class="icon text-center mb-4 bg-primary-light p-3 rounded-4" data-v-inspector="src/views/Home.vue:180:29"><i
                      class="bi bi-graph-up fs-4" data-v-inspector="src/views/Home.vue:180:64"></i></div>
                  <h3 class="fs-5 mb-3">Online Lending</h3>
                  <p class="">Fast and accessible lending services that provide personal and business loans through
                    online platforms, simplifying the borrowing process.</p>
                </div><a class="special-link d-inline-flex gap-2 align-items-center text-decoration-none" href="#"><span
                    class="icons"><i class="icon-1 bi bi-arrow-right-short"></i><i
                      class="icon-2 bi bi-arrow-right-short"> </i></span><span>Read more</span></a>
              </div>
            </div>
            <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="400">
              <div class="service-card p-4 rounded-4 h-100 d-flex flex-column justify-content-between gap-5">
                <div>
                                    <div class="icon text-center mb-4 bg-primary-light p-3 rounded-4" data-v-inspector="src/views/Home.vue:180:29"><i
                      class="bi bi-graph-up fs-4" data-v-inspector="src/views/Home.vue:180:64"></i></div>
                  <h3 class="fs-5 mb-3">Investment Platforms</h3>
                  <p class="mb-4">User-friendly platforms that allow individuals to invest in stocks, bonds, and other
                    assets with minimal barriers, making investment accessible to all.</p>
                </div><a class="special-link d-inline-flex gap-2 align-items-center text-decoration-none" href="#"><span
                    class="icons"><i class="icon-1 bi bi-arrow-right-short"></i><i
                      class="icon-2 bi bi-arrow-right-short"> </i></span><span>Read more</span></a>
              </div>
            </div>
            <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="500">
              <div class="service-card p-4 rounded-4 h-100 d-flex flex-column justify-content-between gap-5">
                <div>
                                    <div class="icon text-center mb-4 bg-primary-light p-3 rounded-4" data-v-inspector="src/views/Home.vue:180:29"><i
                      class="bi bi-graph-up fs-4" data-v-inspector="src/views/Home.vue:180:64"></i></div>
                  <h3 class="fs-5 mb-3">Cryptocurrency Trading</h3>
                  <p class="">Services that facilitate the buying, selling, and trading of cryptocurrencies,
                    offering users a gateway to the digital currency market.</p>
                </div><a class="special-link d-inline-flex gap-2 align-items-center text-decoration-none" href="#"><span
                    class="icons"><i class="icon-1 bi bi-arrow-right-short"></i><i
                      class="icon-2 bi bi-arrow-right-short"> </i></span><span>Read more</span></a>
              </div>
            </div>
            <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="600">
              <div class="service-card p-4 rounded-4 h-100 d-flex flex-column justify-content-between gap-5">
                <div>
                                    <div class="icon text-center mb-4 bg-primary-light p-3 rounded-4" data-v-inspector="src/views/Home.vue:180:29"><i
                      class="bi bi-graph-up fs-4" data-v-inspector="src/views/Home.vue:180:64"></i></div>
                  <h3 class="fs-5">Insurtech Solutions</h3>
                  <p class="mb-4">Innovative insurance services that leverage technology to offer personalized policies,
                    faster claims processing, and enhanced customer experiences.</p>
                </div><a class="special-link d-inline-flex gap-2 align-items-center text-decoration-none" href="#"><span
                    class="icons"><i class="icon-1 bi bi-arrow-right-short"></i><i
                      class="icon-2 bi bi-arrow-right-short"> </i></span><span>Read more</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Services-->

      <!-- ======= Testimonials =======-->
      <section class="section testimonials__v2" id="testimonials">
        <div class="container">
          <div class="row mb-5">
            <div class="col-lg-5 mx-auto text-center"><span class="subtitle text-uppercase mb-3 bg-primary-light" data-aos="fade-up"
                data-aos-delay="0">Testimonials</span>
              <h2 class="mb-3" data-aos="fade-up" data-aos-delay="100">What Our Users Are Saying</h2>
              <p data-aos="fade-up" data-aos-delay="200">Real Stories of Success and Satisfaction from Our Diverse
                Community</p>
            </div>
          </div>
          <div class="row g-4" data-masonry="{&quot;percentPosition&quot;: true }">
            <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="0">
              <div class="testimonial rounded-4 p-4">
                <blockquote class="mb-3">
                  &ldquo;
                  This platform has completely transformed the way I manage my business finances. The real-time
                  transaction tracking and seamless payment options have saved me so much time and effort!
                  &rdquo;
                </blockquote>
                <div class="testimonial-author d-flex gap-3 align-items-center">
                  <div class="author-img"><img class="rounded-circle img-fluid" src="/assets/images/person-sq-2-min.jpg"
                      alt="FreeBootstrap.net image placeholder"></div>
                  <div class="lh-base"><strong class="d-block">John Davis</strong><span>Small Business Owner</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div class="testimonial rounded-4 p-4">
                <blockquote class="mb-3">
                  &ldquo;
                  As a freelancer, managing my finances can be overwhelming. The budgeting tools and personalized
                  insights have made it so much easier to stay on top of my expenses and plan for the future.
                  &rdquo;
                </blockquote>
                <div class="testimonial-author d-flex gap-3 align-items-center">
                  <div class="author-img"><img class="rounded-circle img-fluid" src="/assets/images/person-sq-1-min.jpg"
                      alt="FreeBootstrap.net image placeholder"></div>
                  <div class="lh-base"><strong class="d-block">Emily Smith</strong><span>Freelancer</span></div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div class="testimonial rounded-4 p-4">
                <blockquote class="mb-3">
                  &ldquo;
                  The investment options and portfolio management tools on this platform are top-notch. The variety of
                  choices caters to all types of investors, from conservative to aggressive. I especially appreciate how
                  the tailored recommendations align perfectly with my financial goals. It’s a game-changer for anyone
                  serious about growing their wealth.
                  &rdquo;
                </blockquote>
                <div class="testimonial-author d-flex gap-3 align-items-center">
                  <div class="author-img"><img class="rounded-circle img-fluid" src="/assets/images/person-sq-5-min.jpg"
                      alt="FreeBootstrap.net image placeholder"></div>
                  <div class="lh-base"><strong class="d-block">Michael Rodriguez</strong><span>Investor</span></div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div class="testimonial rounded-4 p-4">
                <blockquote class="mb-3">
                  &ldquo;
                  I never thought managing money could be this simple! The user-friendly interface and secure
                  transaction process give me the confidence to handle my finances independently.
                  &rdquo;
                </blockquote>
                <div class="testimonial-author d-flex gap-3 align-items-center">
                  <div class="author-img"><img class="rounded-circle img-fluid" src="/assets/images/person-sq-3-min.jpg"
                      alt="FreeBootstrap.net image placeholder"></div>
                  <div class="lh-base"><strong class="d-block">Sarah Lee</strong><span>College Student</span></div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="400">
              <div class="testimonial rounded-4 p-4">
                <blockquote class="mb-3">
                  &ldquo;
                  The security features are outstanding. Knowing that my financial data is protected gives me peace of
                  mind, and the platform's efficiency makes it a pleasure to use.
                  &rdquo;
                </blockquote>
                <div class="testimonial-author d-flex gap-3 align-items-center">
                  <div class="author-img"><img class="rounded-circle img-fluid" src="/assets/images/person-sq-7-min.jpg"
                      alt="FreeBootstrap.net image placeholder"></div>
                  <div class="lh-base"><strong class="d-block">James Kim</strong><span>IT Consultant</span></div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="500">
              <div class="testimonial rounded-4 p-4">
                <blockquote class="mb-3">
                  &ldquo;
                  The platform’s intuitive design and robust features have been a game-changer for my startup. It’s
                  helped me streamline operations and focus on growing my business.
                  &rdquo;
                </blockquote>
                <div class="testimonial-author d-flex gap-3 align-items-center">
                  <div class="author-img"><img class="rounded-circle img-fluid" src="/assets/images/person-sq-8-min.jpg"
                      alt="FreeBootstrap.net image placeholder"></div>
                  <div class="lh-base"><strong class="d-block">Laura Brown</strong><span>Entrepreneur</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Testimonials-->

      <!-- ======= FAQ =======-->
      <section class="section faq__v2" id="faq">
        <div class="container">
          <div class="row mb-4">
            <div class="col-md-6 col-lg-7 mx-auto text-center"><span class="subtitle text-uppercase mb-3 bg-primary-light"
                data-aos="fade-up" data-aos-delay="0">FAQ</span>
              <h2 class="h2 fw-bold mb-3" data-aos="fade-up" data-aos-delay="0">Frequently Asked Questions</h2>
              <p data-aos="fade-up" data-aos-delay="100">Utilize our tools to develop your concepts and bring your
                vision to life. Once complete, effortlessly share your creations.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8 mx-auto" data-aos="fade-up" data-aos-delay="200">
              <div class="faq-content">
                <div class="accordion custom-accordion" id="accordionPanelsStayOpenExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"> What services does your web agency offer? </button>
                    </h2>
                    <div class="accordion-collapse collapse show" id="panelsStayOpen-collapseOne">
                      <div class="accordion-body">Our web agency offers a comprehensive range of services including web
                        design and development, e-commerce solutions, SEO optimization, content creation, website
                        maintenance, and digital marketing strategies. We tailor our services to meet the unique needs
                        of each client, ensuring a customized approach to every project.</div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"> How much does it cost to build a website? </button>
                    </h2>
                    <div class="accordion-collapse collapse" id="panelsStayOpen-collapseTwo">
                      <div class="accordion-body">The cost of building a website can vary widely depending on the
                        complexity, features, and specific requirements of your project. We offer several pricing
                        packages to accommodate different budgets and needs. After an initial consultation, we can
                        provide a detailed quote based on your specific goals and objectives.</div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"> How long does it take to design and develop a
                        website? </button>
                    </h2>
                    <div class="accordion-collapse collapse" id="panelsStayOpen-collapseThree">
                      <div class="accordion-body">The timeline for designing and developing a website depends on the
                        project&apos;s complexity and scope. Typically, a standard business website takes about 4-6
                        weeks to complete, while more complex projects like e-commerce sites or custom applications may
                        take longer. We work closely with our clients to establish a realistic timeline and keep you
                        informed throughout the process.</div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFour"> Will my website be mobile-friendly? </button>
                    </h2>
                    <div class="accordion-collapse collapse" id="panelsStayOpen-collapseFour">
                      <div class="accordion-body">Absolutely! All the websites we design and develop are fully
                        responsive, meaning they are optimized to work seamlessly across all devices, including
                        desktops, tablets, and smartphones. Ensuring a great user experience on mobile devices is a top
                        priority in our development process.</div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFive"> Do you provide ongoing support and maintenance for
                        websites? </button>
                    </h2>
                    <div class="accordion-collapse collapse" id="panelsStayOpen-collapseFive">
                      <div class="accordion-body">Yes, we offer ongoing support and maintenance services to ensure your
                        website remains up-to-date, secure, and functioning smoothly. Our maintenance packages can
                        include regular updates, security monitoring, backups, and technical support to address any
                        issues that may arise. We&apos;re here to help you keep your website running efficiently long
                        after it&apos;s launched.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End FAQ-->
      </section>
      <!-- End FAQ-->

      <!-- ======= Contact =======-->
      <section class="section contact__v2" id="contact">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-6 col-lg-7 mx-auto text-center"><span class="subtitle text-uppercase mb-3 bg-primary-light"
                data-aos="fade-up" data-aos-delay="0">Contact</span>
              <h2 class="h2 fw-bold mb-3" data-aos="fade-up" data-aos-delay="0">Contact Us</h2>
              <p data-aos="fade-up" data-aos-delay="100">Utilize our tools to develop your concepts and bring your
                vision to life. Once complete, effortlessly share your creations.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="d-flex gap-5 flex-column">
                <div class="d-flex align-items-start gap-3" data-aos="fade-up" data-aos-delay="0">
                  <div class="icon d-block"><i class="bi bi-telephone"></i></div><span> <span
                      class="d-block">Phone</span><strong>+(01 234 567 890)</strong></span>
                </div>
                <div class="d-flex align-items-start gap-3" data-aos="fade-up" data-aos-delay="100">
                  <div class="icon d-block"><i class="bi bi-send"></i></div><span> <span
                      class="d-block">Email</span><strong>info@mydomain.com</strong></span>
                </div>
                <div class="d-flex align-items-start gap-3" data-aos="fade-up" data-aos-delay="200">
                  <div class="icon d-block"><i class="bi bi-geo-alt"></i></div><span> <span
                      class="d-block">Address</span>
                    <address class="fw-bold">123 Main Street Apt 4B Springfield, <br> IL 62701 United States</address>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-wrapper" data-aos="fade-up" data-aos-delay="300">
                <form id="contactForm">
                  <div class="row gap-3 mb-3">
                    <div class="col-md-12">
                      <label class="mb-2" for="name">Name</label>
                      <input class="form-control" id="name" type="text" name="name" required="">
                    </div>
                    <div class="col-md-12">
                      <label class="mb-2" for="email">Email</label>
                      <input class="form-control" id="email" type="email" name="email" required="">
                    </div>
                  </div>
                  <div class="row gap-3 mb-3">
                    <div class="col-md-12">
                      <label class="mb-2" for="subject">Subject</label>
                      <input class="form-control" id="subject" type="text" name="subject">
                    </div>
                  </div>
                  <div class="row gap-3 gap-md-0 mb-3">
                    <div class="col-md-12">
                      <label class="mb-2" for="message">Message</label>
                      <textarea class="form-control" id="message" name="message" rows="5" required=""></textarea>
                    </div>
                  </div>
                  <button class="btn btn-primary fw-semibold" type="submit">Send Message</button>
                </form>
                <div class="mt-3 d-none alert alert-success" id="successMessage">Message sent successfully!</div>
                <div class="mt-3 d-none alert alert-danger" id="errorMessage">Message sending failed. Please try again
                  later.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End Contact-->



    </main>
  </div>

  <!-- ======= Back to Top =======-->
  <button id="back-to-top"><i class="bi bi-arrow-up-short"></i></button>
</template>