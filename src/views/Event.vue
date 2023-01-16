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
              <a href="#" class="btn oneMusic-btn" v-if="entertainmentData.length !== 0"
                >Load More <i class="fa fa-angle-double-right"></i
              ></a>
              <p v-else>No event scheduled</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ##### Events Area End ##### -->

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