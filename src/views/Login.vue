<template>
  <div>
    <Header title="Login" />

    <!-- ##### Login Area Start ##### -->
    <section class="login-area section-padding-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-8">
            <div class="login-content">
              <h3>Welcome Back</h3>
              <!-- Login Form -->
              <div class="login-form">
                <form @submit.prevent="submitForm">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter E-mail"
                      v-model="email"
                    />
                    <small id="emailHelp" class="form-text text-muted"
                      ><i class="fa fa-lock mr-2"></i>We'll never share your
                      email with anyone else.</small
                    >
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      v-model="password"
                    />
                  </div>
                  <button type="submit" class="btn oneMusic-btn mt-30">
                    Login
                  </button>
                </form>

                <div class="row">
                  <div class="col-md-6 col-lg-4">
                    <router-link class="btn mt-30" to="/forget-password">
                      Forgot Password
                    </router-link>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <router-link class="btn mt-30" to="/reset-password">
                      Reset Password
                    </router-link>
                  </div>
                  <div class="col-md-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ##### Login Area End ##### -->

    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },

  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async submitForm() {
      this.$Progress.start();
      axios.defaults.headers.common["Authorization"] = "";

      localStorage.removeItem("token");

      const data = {
        email: this.email,
        password: this.password,
      };
      try {
        const response = await axios.post("/api/auth/login", data);
        
        
        const token = response.data.token;

        const userID = response.data.userID;

        const userName = response.data.userName;

        const permissionName = response.data.permissionName;

        localStorage.setItem("token", token);

        localStorage.setItem("permissionName", permissionName);

        localStorage.setItem("userID", userID);

        localStorage.setItem("userName", userName);

        this.$store.commit("setUserName", userName);

        this.$store.commit("setToken", token);

        this.$store.commit("setUserID", userID);

        this.$store.commit("setPermissionName", permissionName);

        axios.defaults.headers.common["Authorization"] = "Bearer " + token;

        if(permissionName === "Admin"){

          const toPath = this.$route.query.to || "/admin";

          this.$router.push(toPath).catch(()=>{});
          this.$Progress.finish();

        }else if(permissionName === "Band"){

          const toPath = this.$route.query.to || "/events";
          
          this.$router.push(toPath).catch(()=>{});
          this.$Progress.finish();
        }
      } catch (error) {
          this.$noty.error(error.response.data.errors[0]);

        this.$Progress.fail();
      }
    },
  },
};
</script>

<style>
</style>