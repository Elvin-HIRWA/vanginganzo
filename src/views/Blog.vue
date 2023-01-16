<template>
  <div>
    <Header title="Blogs" />

    <!-- ##### Blog Area Start ##### -->
    <div class="blog-area section-padding-100">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-9">
            <!-- Single Post Start -->
            <div
              class="single-blog-post mb-100 wow fadeInUp"
              data-wow-delay="100ms"
              v-for="(data, bl) in blogData"
              :key="bl"
            >
              <!-- Post Thumb -->
              <div class="blog-post-thumb mt-30">
                <a href="#"><img :src="urlImage + data.image_path" alt="" /></a>
                <!-- Post Date -->
                <div class="post-date">
                  <span>15</span>
                  <span>June ‘18</span>
                </div>
              </div>

              <!-- Blog Content -->
              <div class="blog-content">
                <!-- Post Title -->
                <a href="#" class="post-title"
                  >{{data.title}}</a
                >
                <!-- Post Meta -->
                <div class="post-meta d-flex mb-30">
                  <p class="post-author">By<a href="#"> Admin</a></p>
                  <p class="tags">in<a href="#"> Events</a></p>
                  <p class="tags"><a href="#">2 Comments</a></p>
                </div>
                <!-- Post Excerpt -->
                <p>
                  {{data.description}}
                </p>
              </div>
            </div>

            <!-- Pagination -->
            <div
              class="oneMusic-pagination-area wow fadeInUp"
              data-wow-delay="300ms"
            >
              <nav>
                <ul class="pagination">
                  <li class="page-item active">
                    <a class="page-link" href="#">01</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">02</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">03</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div class="col-12 col-lg-3">
            <div class="blog-sidebar-area">

              <!-- Widget Area -->
              <div class="single-widget-area mb-30">
                <div class="widget-title">
                  <h5>Archive</h5>
                </div>
                <div class="widget-content">
                  <ul>
                    <li><a href="#">February 2018</a></li>
                    <li><a href="#">March 2018</a></li>
                    <li><a href="#">April 2018</a></li>
                    <li><a href="#">May 2018</a></li>
                    <li><a href="#">June 2018</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ##### Blog Area End ##### -->

    <GetInTouch />
    
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import GetInTouch from '../components/GetInTouch.vue'
export default {
    components:{
        Header,
        Footer,
        GetInTouch
    },
    data() {
    return {
      blogData: [],
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
    async getBlogData() {
      this.$Progress.start();
      try {
        const response = await axios.get("/api/blog/get");

        this.urlImage = localStorage.getItem('urlPath') + "/" ;

        response.data.forEach((el) => {
          this.blogData.push({
            id: el.id,
            title: el.title,
            description: el.description,
            image_path: el.image_path,
          });
        });
        this.$Progress.finish();
      } catch (error) {}
    },
  },
  mounted() {
    this.getDate();
    this.getBlogData();
  },
}
</script>