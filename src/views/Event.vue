<template>
  <div>
    <Header title="Event" />
    <!-- ##### Events Area Start ##### -->
    <section class="events-area section-padding-100">
      <div class="container">
        <div class="row">
          <!-- Single Event Area -->
          <div
            class="col-12 col-md-6 col-lg-4"
            v-for="(data, et) in entertainmentData"
            :key="et"
          >
            <div class="single-event-area mb-30">
              <div class="event-thumbnail">
                <img :src="urlImage + data.img_path" alt="" />
              </div>
              <div class="event-text">
                <h4>{{ data.name }}</h4>
                <div class="event-meta-data">
                  <a href="#" class="event-place">{{ data.venue }}</a>
                  <a href="#" class="event-date">{{ data.startTime }}</a>
                </div>
                <a href="#" class="btn see-more-btn">See Event</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="load-more-btn text-center mt-70">
              <a href="#" class="btn oneMusic-btn"
                >Load More <i class="fa fa-angle-double-right"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ##### Events Area End ##### -->

    <!-- ##### Newsletter & Testimonials Area Start ##### -->
    <section class="newsletter-testimonials-area">
      <div class="container">
        <div class="row">
          <!-- Newsletter Area -->
          <div class="col-12 col-lg-6">
            <div class="newsletter-area mb-100">
              <div class="section-heading text-left mb-50">
                <p>See what’s new</p>
                <h2>Subscribe to newsletter</h2>
              </div>
              <div class="newsletter-form">
                <form action="#">
                  <input
                    type="search"
                    name="search"
                    id="newsletterSearch"
                    placeholder="E-mail"
                  />
                  <button type="submit" class="btn oneMusic-btn">
                    Subscribe <i class="fa fa-angle-double-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <!-- Testimonials Area -->
          <div class="col-12 col-lg-6">
            <div
              class="testimonials-area mb-100 bg-img bg-overlay"
              style="
                background-image: url(../../public/assets/img/bg-img/bg-3.jpg);
              "
            >
              <div class="section-heading white text-left mb-50">
                <p>See what’s new</p>
                <h2>Testimonial</h2>
              </div>
              <!-- Testimonial Slide -->
              <div class="testimonials-slide owl-carousel">
                <!-- Single Slide -->
                <div class="single-slide">
                  <p>
                    Nam tristique ex vel magna tincidunt, ut porta nisl finibus.
                    Vivamus eu dolor eu quam varius rutrum. Fusce nec justo id
                    sem aliquam fringilla nec non lacus. Suspendisse eget
                    lobortis nisi, ac cursus odio. Vivamus nibh velit, rutrum.
                  </p>
                  <div class="testimonial-info d-flex align-items-center">
                    <div class="testimonial-thumb">
                      <img src="../../public/assets/img/bg-img/t1.jpg" alt="" />
                    </div>
                    <p>William Smith, Customer</p>
                  </div>
                </div>
                <!-- Single Slide -->
                <div class="single-slide">
                  <p>
                    Nam tristique ex vel magna tincidunt, ut porta nisl finibus.
                    Vivamus eu dolor eu quam varius rutrum. Fusce nec justo id
                    sem aliquam fringilla nec non lacus. Suspendisse eget
                    lobortis nisi, ac cursus odio. Vivamus nibh velit, rutrum.
                  </p>
                  <div class="testimonial-info d-flex align-items-center">
                    <div class="testimonial-thumb">
                      <img src="../../public/assets/img/bg-img/t1.jpg" alt="" />
                    </div>
                    <p>Nazrul Islam, Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ##### Newsletter & Testimonials Area End ##### -->

    <GetInTouch />

    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import GetInTouch from "../components/GetInTouch.vue";
export default {
  components: {
    Header,
    Footer,
    GetInTouch,
  },
  data() {
    return {
      entertainmentData: [],
      urlImage: null,
    };
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
      console.log("here");
      try {
        const response = await axios.get("/api/entertainments/all");

        this.urlImage = localStorage.getItem('urlPath') + "/" ;

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
        console.log(this.entertainmentData);
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