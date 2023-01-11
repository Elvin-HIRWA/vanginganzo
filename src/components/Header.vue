<template>
  <div>
    <!-- Preloader -->
    <!-- <div class="preloader d-flex align-items-center justify-content-center">
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div> -->

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
                ><img src="../../public/assets/img/core-img/vanginganzo-logo.png" alt=""
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

    <!-- ##### Breadcumb Area Start ##### -->
    <section class="breadcumb-area bg-img bg-overlay" id="back">
      <div class="bradcumbContent">
        <p>See what’s new</p>
        <h2>{{title}}</h2>
      </div>
    </section>
    <!-- ##### Breadcumb Area End ##### -->
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
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
  },
  mounted() {
    this.getDate();
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

#back {
  background-image: url(../../public/breadcumb3.jpg);
}
</style>