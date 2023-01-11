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
                  <form action="#" method="post">
                    <div class="form-group">
                      <label for="exampleInputEmail1">First name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputFirstName1"
                        aria-describedby="firstNameHelp"
                        placeholder="Enter First name"
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
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Password Comfirmation</label>
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPasswordComfirmation1"
                        placeholder="Password comfirmation"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Key</label>
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputKey1"
                        placeholder="Key"
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
  import Header from "../components/Header.vue";
  import Footer from "../components/Footer.vue";
  export default {
    components: {
      Header,
      Footer,
    },
  };
  </script>
  
  <style>
  </style>