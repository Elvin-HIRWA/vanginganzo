<template>
  <div>
    <!-- ##### Header Area Start ##### -->
    <header class="header-area header">
      <!-- Navbar Area -->
      <div class="oneMusic-main-menu">
        <div class="classy-nav-container breakpoint-off">
          <div class="container">
            <!-- Menu -->
            <nav class="classy-navbar justify-content-between" id="oneMusicNav">
              <!-- Nav brand -->
              <a href="index.html" class="nav-brand"
                ><img
                  src="../../public/assets/img/core-img/vanginganzo-logo.png"
                  alt=""
              /></a>

              <!-- Navbar Toggler -->
              <div class="classy-navbar-toggler">
                <span class="navbarToggler"
                  ><span></span><span></span><span></span
                ></span>
              </div>

              <!-- Menu -->
              <div class="classy-menu">
                <!-- Close Button -->
                <div class="classycloseIcon">
                  <div class="cross-wrap">
                    <span class="top"></span><span class="bottom"></span>
                  </div>
                </div>

                <!-- Nav Start -->
                <div class="classynav">
                  <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/event">Events</router-link></li>
                    <li><router-link to="/blog">Blogs</router-link></li>
                    <li><router-link to="/contact">Contacts</router-link></li>
                  </ul>

                  <!-- Login/Register & Cart Button -->
                  <div
                    class="login-register-cart-button d-flex align-items-center"
                  >
                    <!-- Login/Register -->
                    <div class="login-register-btn mr-50">
                      <router-link to="/login">Login</router-link>
                    </div>
                  </div>
                </div>
                <!-- Nav End -->
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <!-- ##### Header Area End ##### -->

    <!-- ##### Hero Area Start ##### -->
    <section class="hero-area">
      <div class="hero-slides">
        <!-- Single Hero Slide -->
        <div
          class="
            single-hero-slide
            d-flex
            align-items-center
            justify-content-center
          "
        >
          <!-- Slide Img -->
          <div class="slide-img bg-img" id="slide2"></div>
          <!-- Slide Content -->
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="hero-slides-content text-center">
                  <h6 data-animation="fadeInUp" data-delay="100ms">
                    Latest album
                  </h6>
                  <h2 data-animation="fadeInUp" data-delay="300ms">
                    Vangainganzo <span>Vangainganzo</span>
                  </h2>
                  <a
                    data-animation="fadeInUp"
                    data-delay="500ms"
                    href="#"
                    class="btn oneMusic-btn mt-50"
                    >Discover <i class="fa fa-angle-double-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ##### Hero Area End ##### -->

    <!-- ##### Events Area Start ##### -->
    <section
      class="oneMusic-buy-now-area has-fluid bg-gray section-padding-100"
    >
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-heading style-2">
              <h2>Upcoming Events</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- Single Event Area -->
          <div
            class="col-12 col-md-6 col-lg-4"
            v-for="(data, et) in entertainmentData.slice(0,3)"
            :key="et"
          >
            <div class="single-event-area mb-30">
              <div class="event-thumbnail">
                <img :src="'http://localhost:89/' + data.img_path" alt="" />
              </div>
              <div class="event-text">
                <h4>{{ data.name }}</h4>
                <div class="event-meta-data">
                  <a href="#" class="event-place">{{ data.venue }}</a>
                  <a href="#" class="event-date">{{ data.startTime }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="load-more-btn text-center mt-70">
              <router-link id="oneMusic" class="btn oneMusic-btn" to="/event"
                >Load More <i class="fa fa-angle-double-right"></i
              ></router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ##### Events Area End ##### -->

    <!-- ##### Featured Artist Area Start ##### -->
    <section
      class="
        featured-artist-area
        section-padding-100
        bg-img bg-overlay bg-fixed
      "
      id="features"
    >
      <div class="container">
        <div class="row align-items-end">
          <div class="col-12 col-md-5 col-lg-4">
            <div class="featured-artist-thumb">
              <img src="../../public/assets/img/bg-img/1.jpeg" alt="" />
            </div>
          </div>
          <div class="col-12 col-md-7 col-lg-8">
            <div class="featured-artist-content">
              <!-- Section Heading -->
              <div class="section-heading white text-left mb-30">
                <h2>Buy What’s New</h2>
              </div>
              <p>
                Nam tristique ex vel magna tincidunt, ut porta nisl finibus.
                Vivamus eu dolor eu quam varius rutrum. Fusce nec justo id sem
                aliquam fringilla nec non lacus. Suspendisse eget lobortis nisi,
                ac cursus odio. Vivamus nibh velit, rutrum at ipsum ac,
                dignissim iaculis ante. Donec in velit non elit pulvinar
                pellentesque et non eros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ##### Featured Artist Area End ##### -->

    <GetInTouch />

    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Footer from "../components/Footer.vue";
import GetInTouch from "../components/GetInTouch.vue";
export default {
  data() {
    return {
      entertainmentData: [],
      urlImage: null,
    };
  },
  components: {
    Footer,
    GetInTouch,
  },
  methods: {
    getDate() {
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
          $(".header").addClass("active");
        } else {
          //remove the background property so it comes transparent again (defined in your css)
          $(".header").removeClass("active");
        }
      });
    },
    async getEventData() {
      this.$Progress.start();
      try {
        const response = await axios.get("/api/entertainments/all");

        this.urlImage = '"' + this.$store.state.urlPath + "/";

        
        response.data.forEach((el) => {
            this.entertainmentData.push({
            id: el.id,
            name: el.name,
            venue: el.venue,
            startTime: el.startTime,
            endTime: el.endTime,
            img_path: el.img_path,
          });
        });
        
        this.$Progress.finish();
      } catch (error) {}
    },
  },
  mounted() {
    this.getDate();
    this.getEventData();
  },
};
</script>

<style>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0;
  z-index: 10000;
  transition: all 0.2s ease-in-out;
  height: auto;
  background-color: transparent;
}

.active {
  background-color: white;
}

#slide1 {
  background-image: url(../../public/assets/img/bg-img/bg-1.jpg);
}

#slide2 {
  background-image: url(../../public/assets/img/bg-img/bg-2.jpg);
}

#features {
  background-image: url(../../public/assets/img/bg-img/bg-4.jpg);
}

#oneMusic:hover {
  color: white;
}
</style>