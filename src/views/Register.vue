<template>
  <div>
    <Header title="Register" />

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
                    <label for="exampleInputEmail1">First name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputFirstName1"
                      aria-describedby="firstNameHelp"
                      placeholder="Enter First name"
                      v-model="firstName"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Last name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputLastName1"
                      aria-describedby="lastNameHelp"
                      placeholder="Enter last name"
                      v-model="lastName"
                    />
                  </div>
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
                  <div class="form-group">
                    <label for="exampleInputPassword1"
                      >Password Comfirmation</label
                    >
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPasswordComfirmation1"
                      placeholder="Password comfirmation"
                      v-model="password_confirmation"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Key</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputKey1"
                      placeholder="Key"
                      v-model="key"
                    />
                  </div>
                  <button type="submit" class="btn oneMusic-btn mt-30">
                    Register
                  </button>
                </form>
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
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      password_confirmation: null,
      key: null,
      clicked: false,
    };
  },
  methods: {
    async submitForm() {
      this.$Progress.start();
      this.clicked = true;
      const data = {
        name: this.firstName + " " + this.lastName,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        key: this.key,
      };
      console.log(data);
      try {
        const response = await axios.post("/api/auth/register", data);
        this.$Progress.finish();
        console.log("here");
        const token = response.data.token;

        localStorage.setItem("token", token);

        this.$store.commit("setToken", token);

        axios.defaults.headers.common["Authorization"] = "Bearer " + token;

        this.$router.push("/admin");
      } catch (error) {
        this.$Progress.fail();
        this.clicked = false;
        if (error.response) {
          for (const property in error.response.data.errors) {
            this.$noty.error(`${error.response.data.errors[property]}`);
          }
        } else {
          this.$noty.error("Something went wrong! Please try again");
        }
      }
    },
  },
};
</script>
  
  <style>
</style>