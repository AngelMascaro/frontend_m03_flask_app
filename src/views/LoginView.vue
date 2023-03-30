<template>
  <div id="loginForm">
    <div id='divlogin' class="card">
      <div class="card-header">
        <div class="d-flex justify-content-end social_icon">
          <span>
            <i class="bi bi-door-open-fill"></i>
          </span>
        </div>
      </div>
      <h3 class="">
        Login
      </h3>
      <div class="input-group mb-4 mt-5">
        <span class="input-group-text" id="Email">
          <i style="min-width:25px" class="bi bi-envelope-at-fill"></i>
        </span>
        <input type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="Email"
          v-model="email">
      </div>
      <div class="input-group mb-5">
        <span class="input-group-text" id="Password">
          <i style="min-width:25px" class="bi bi-lock-fill"></i>
        </span>
        <input type="password" class="form-control" placeholder="Password" aria-label="Password"
          aria-describedby="Password" v-model="password">
      </div>
      <button id="btnLogin" class='btn btn-dark my-2 my-sm-0 centrar' @click="login">
        Login
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
    }
  },
  computed: {
    user() {
      return this.$store.state;
    },
  },
  methods: {
    async login() {
      var dades = {
        email: this.email,
        password: this.password
      }
      await axios
        .post(
          "http://localhost:5000/api/login ", dades
        )
        .then((r) => {
          // console.log(r)
          this.loginvuex(dades, r.data)
          this.$router.push({ name: 'verify', params: { token: r.data } });
        })
        .catch(error => console.log(error))
    },
    loginvuex(data, token) {
      this.$store.dispatch('loginAction', { loggedIn: true, user: data.email, token: token })
    },
    logoutvuex() {
      this.$store.dispatch('logoutAction', { loggedIn: false, user: null, token: null })
    },
  },
  mounted() {
  },
}
</script>

<style scoped lang="scss">
#divlogin {
  border: 3px solid black;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 15px 15px 15px 15px;
  max-width: 400px;
  color: #FFC312;
}

.centrar {
  display: block;
  margin: auto;
  text-align: center;
  margin-bottom: 20px;
}

#loginForm {
  margin-top: 5vh;
  align-items: center;
}

#btnLogin {
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #ffc312;
  color: black;
  font-weight: 700;

  &:hover {
    background-color: white;
    color: black;
    font-weight: 700;
  }

}

.form-control {
  background-color: rgba(0, 0, 0, 0);
  color: #ffc312;

  &:focus {
    background-color: rgba(0, 0, 0, 0);
    color: #ffc312;
  }

  &::-webkit-input-placeholder {
    color: #ffc312;
  }

}

.input-group-text {
  background-color: #ffc312;
  font-weight: 900;
  font-size: 1.3em;
}

.input-group {
  height: 50px;
}

.social_icon {
  position: absolute;
  right: 20px;
  top: -45px;

  span {
    font-size: 60px;
    margin-left: 10px;
    color: #ffc312;
  }
}
</style>