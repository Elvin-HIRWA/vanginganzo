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

    <!-- ##### Buy Now Area Start ##### -->
    <section
      class="oneMusic-buy-now-area has-fluid bg-gray section-padding-100"
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="section-heading style-2">
              <p>See what’s new</p>
              <h2>Buy What’s New</h2>
            </div>
          </div>
        </div>

        <div class="row">
          <!-- Single Album Area -->

          <div class="col-12 col-sm-6 col-md-4 col-lg-2" v-for="(data,et) in entertainmentData" :key="et">
            <div class="single-album-area wow fadeInUp" data-wow-delay="100ms" >
                <div class="album-thumb">
                <img :src="'http://localhost:89/' + data.img_path" alt="" />
                
              </div>
                <div class="album-info">
                <a href="#">
                  <h5>{{data.name}}</h5>
                </a>
                <p>{{data.venue}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="text-align:right">{{ data.startTime }}</span></p>
              </div>
            </div>
            
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div
              class="load-more-btn text-center wow fadeInUp"
              data-wow-delay="300ms"
            >
              <a href="#" class="btn oneMusic-btn"
                >Load More <i class="fa fa-angle-double-right"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ##### Buy Now Area End ##### -->

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
              <img src="../../public/assets/img/bg-img/fa.jpg" alt="" />
            </div>
          </div>
          <div class="col-12 col-md-7 col-lg-8">
            <div class="featured-artist-content">
              <!-- Section Heading -->
              <div class="section-heading white text-left mb-30">
                <p>See what’s new</p>
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
              <div class="song-play-area">
                <div class="song-name">
                  <p>01. Main Hit Song</p>
                </div>
                <audio preload="auto" controls>
                  <source src="../../public/assets/audio/dummy-audio.mp3" />
                </audio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ##### Featured Artist Area End ##### -->

    <!-- ##### Miscellaneous Area Start ##### -->
    <section class="miscellaneous-area section-padding-100-0">
      <div class="container">
        <div class="row">
          <!-- ***** Weeks Top ***** -->
          <div class="col-12 col-lg-4">
            <div class="weeks-top-area mb-100">
              <div
                class="section-heading text-left mb-50 wow fadeInUp"
                data-wow-delay="50ms"
              >
                <p>See what’s new</p>
                <h2>This week’s top</h2>
              </div>

              <!-- Single Top Item -->
              <div
                class="single-top-item d-flex wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div class="thumbnail">
                  <img src="../../public/assets/img/bg-img/wt1.jpg" alt="" />
                </div>
                <div class="content-">
                  <h6>Sam Smith</h6>
                  <p>Underground</p>
                </div>
              </div>

              <!-- Single Top Item -->
              <div
                class="single-top-item d-flex wow fadeInUp"
                data-wow-delay="150ms"
              >
                <div class="thumbnail">
                  <img src="../../public/assets/img/bg-img/wt2.jpg" alt="" />
                </div>
                <div class="content-">
                  <h6>Power Play</h6>
                  <p>In my mind</p>
                </div>
              </div>

              <!-- Single Top Item -->
              <div
                class="single-top-item d-flex wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div class="thumbnail">
                  <img src="../../public/assets/img/bg-img/wt3.jpg" alt="" />
                </div>
                <div class="content-">
                  <h6>Cristinne Smith</h6>
                  <p>My Music</p>
                </div>
              </div>

              <!-- Single Top Item -->
              <div
                class="single-top-item d-flex wow fadeInUp"
                data-wow-delay="250ms"
              >
                <div class="thumbnail">
                  <img src="../../public/assets/img/bg-img/wt4.jpg" alt="" />
                </div>
                <div class="content-">
                  <h6>The Music Band</h6>
                  <p>Underground</p>
                </div>
              </div>

              <!-- Single Top Item -->
              <div
                class="single-top-item d-flex wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div class="thumbnail">
                  <img src="../../public/assets/img/bg-img/wt5.jpg" alt="" />
                </div>
                <div class="content-">
                  <h6>Creative Lyrics</h6>
                  <p>Songs and stuff</p>
                </div>
              </div>

              <!-- Single Top Item -->
              <div
                class="single-top-item d-flex wow fadeInUp"
                data-wow-delay="350ms"
              >
                <div class="thumbnail">
                  <img src="../../public/assets/img/bg-img/wt6.jpg" alt="" />
                </div>
                <div class="content-">
                  <h6>The Culture</h6>
                  <p>Pop Songs</p>
                </div>
              </div>
            </div>
          </div>

          <!-- ***** New Hits Songs ***** -->
          <div class="col-12 col-lg-4">
            <div class="new-hits-area mb-100">
              <div
                class="section-heading text-left mb-50 wow fadeInUp"
                data-wow-delay="50ms"
              >
                <p>See what’s new</p>
                <h2>New Hits</h2>
              </div>

              <!-- Single Top Item -->
              <div
                class="
                  single-new-item
                  d-flex
                  align-items-center
                  justify-content-between
                  wow
                  fadeInUp
                "
                data-wow-delay="100ms"
              >
                <div class="first-part d-flex align-items-center">
                  <div class="thumbnail">
                    <img src="../../public/assets/img/bg-img/wt7.jpg" alt="" />
                  </div>
                  <div class="content-">
                    <h6>Sam Smith</h6>
                    <p>Underground</p>
                  </div>
                </div>
                <audio preload="auto" controls>
                  <source src="audio/dummy-audio.mp3" />
                </audio>
              </div>

              <!-- Single Top Item -->
              <div
                class="
                  single-new-item
                  d-flex
                  align-items-center
                  justify-content-between
                  wow
                  fadeInUp
                "
                data-wow-delay="150ms"
              >
                <div class="first-part d-flex align-items-center">
                  <div class="thumbnail">
                    <img src="../../public/assets/img/bg-img/wt8.jpg" alt="" />
                  </div>
                  <div class="content-">
                    <h6>Power Play</h6>
                    <p>In my mind</p>
                  </div>
                </div>
                <audio preload="auto" controls>
                  <source src="audio/dummy-audio.mp3" />
                </audio>
              </div>

              <!-- Single Top Item -->
              <div
                class="
                  single-new-item
                  d-flex
                  align-items-center
                  justify-content-between
                  wow
                  fadeInUp
                "
                data-wow-delay="200ms"
              >
                <div class="first-part d-flex align-items-center">
                  <div class="thumbnail">
                    <img src="../../public/assets/img/bg-img/wt9.jpg" alt="" />
                  </div>
                  <div class="content-">
                    <h6>Cristinne Smith</h6>
                    <p>My Music</p>
                  </div>
                </div>
                <audio preload="auto" controls>
                  <source src="audio/dummy-audio.mp3" />
                </audio>
              </div>

              <!-- Single Top Item -->
              <div
                class="
                  single-new-item
                  d-flex
                  align-items-center
                  justify-content-between
                  wow
                  fadeInUp
                "
                data-wow-delay="250ms"
              >
                <div class="first-part d-flex align-items-center">
                  <div class="thumbnail">
                    <img src="../../public/assets/img/bg-img/wt10.jpg" alt="" />
                  </div>
                  <div class="content-">
                    <h6>The Music Band</h6>
                    <p>Underground</p>
                  </div>
                </div>
                <audio preload="auto" controls>
                  <source src="../../public/assets/audio/dummy-audio.mp3" />
                </audio>
              </div>

              <!-- Single Top Item -->
              <div
                class="
                  single-new-item
                  d-flex
                  align-items-center
                  justify-content-between
                  wow
                  fadeInUp
                "
                data-wow-delay="300ms"
              >
                <div class="first-part d-flex align-items-center">
                  <div class="thumbnail">
                    <img src="../../public/assets/img/bg-img/wt11.jpg" alt="" />
                  </div>
                  <div class="content-">
                    <h6>Creative Lyrics</h6>
                    <p>Songs and stuff</p>
                  </div>
                </div>
                <audio preload="auto" controls>
                  <source src="../../public/assets/audio/dummy-audio.mp3" />
                </audio>
              </div>

              <!-- Single Top Item -->
              <div
                class="
                  single-new-item
                  d-flex
                  align-items-center
                  justify-content-between
                  wow
                  fadeInUp
                "
                data-wow-delay="350ms"
              >
                <div class="first-part d-flex align-items-center">
                  <div class="thumbnail">
                    <img src="../../public/assets/img/bg-img/wt12.jpg" alt="" />
                  </div>
                  <div class="content-">
                    <h6>The Culture</h6>
                    <p>Pop Songs</p>
                  </div>
                </div>
                <audio preload="auto" controls>
                  <source src="../../public/assets/audio/dummy-audio.mp3" />
                </audio>
              </div>
            </div>
          </div>

          <!-- ***** Popular Artists ***** -->
          <div class="col-12 col-lg-4">
            <div class="popular-artists-area mb-100">
              <div
                class="section-heading text-left mb-50 wow fadeInUp"
                data-wow-delay="50ms"
              >
                <p>See what’s new</p>
                <h2>Popular Artist</h2>
              </div>

              <!-- Single Artist -->
              <div
                class="single-artists d-flex align-items-center wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div class="thumbnail">
                  <img src="../../public/assets/img/bg-img/pa1.jpg" alt="" />
                </div>
                <div class="content-">
                  <p>Sam Smith</p>
                </div>
              </div>

              <!-- Single Artist -->
              <div
                class="single-artists d-flex align-items-center wow fadeInUp"
                data-wow-delay="150ms"
              >
                <div class="thumbnail">
                  <img src="../../public/assets/img/bg-img/pa2.jpg" alt="" />
                </div>
                <div class="content-">
                  <p>William Parker</p>
                </div>
              </div>

              <!-- Single Artist -->
              <div
                class="single-artists d-flex align-items-center wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div class="thumbnail">
                  <img src="../../public/assets/img/bg-img/pa3.jpg" alt="" />
                </div>
                <div class="content-">
                  <p>Jessica Walsh</p>
                </div>
              </div>

              <!-- Single Artist -->
              <div
                class="single-artists d-flex align-items-center wow fadeInUp"
                data-wow-delay="250ms"
              >
                <div class="thumbnail">
                  <img src="../../public/assets/img/bg-img/pa4.jpg" alt="" />
                </div>
                <div class="content-">
                  <p>Tha Stoves</p>
                </div>
              </div>

              <!-- Single Artist -->
              <div
                class="single-artists d-flex align-items-center wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div class="thumbnail">
                  <img src="../../public/assets/img/bg-img/pa5.jpg" alt="" />
                </div>
                <div class="content-">
                  <p>DJ Ajay</p>
                </div>
              </div>

              <!-- Single Artist -->
              <div
                class="single-artists d-flex align-items-center wow fadeInUp"
                data-wow-delay="350ms"
              >
                <div class="thumbnail">
                  <img src="../../public/assets/img/bg-img/pa6.jpg" alt="" />
                </div>
                <div class="content-">
                  <p>Radio Vibez</p>
                </div>
              </div>

              <!-- Single Artist -->
              <div
                class="single-artists d-flex align-items-center wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div class="thumbnail">
                  <img src="../../public/assets/img/bg-img/pa7.jpg" alt="" />
                </div>
                <div class="content-">
                  <p>Music 4u</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ##### Miscellaneous Area End ##### -->

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
  background-color: black;
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
</style>