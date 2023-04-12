<template>
  <div id="registerForm">
    <div id="divRegister" class="card">
      <div class="card-header">
        <div class="d-flex justify-content-end social_icon">
          <span>
            <i class="bi bi-r-circle-fill"></i>
          </span>
        </div>
      </div>
      <h3 class="">Register</h3>
      <div class="input-group mb-4 mt-5">
        <span class="input-group-text" id="Email">
          <i style="min-width: 25px" class="bi bi-envelope-at-fill"></i>
        </span>
        <input
          type="email"
          class="form-control"
          placeholder="Email"
          aria-label="Email"
          aria-describedby="Email"
          v-model="email"
        />
      </div>
      <br />
      <button
        id="btnRegister"
        class="btn btn-dark my-2 my-sm-0 centrar"
        @click="signup"
      >
        Register
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RegisterView",
  data() {
    return {
      email: "",
      token: "",
    };
  },
  methods: {
    async signup() {
      if (!this.validateEmail(this.email)) {
        alert("Email not valid");
        return;
      }
      var dades = {
        email: this.email,
      };
      await axios
        .post("http://localhost:5000/api/register ", dades, {
          // headers: {
          //   token: localStorage.getItem("FlsKTkn"),
          // },
        })
        .then((r) => {
          this.token = r.data;
          //save token in localstorage and redirect to init
          localStorage.setItem("FlsKTkn", this.token);
          this.$router.push("/init?token=" + this.token);
        })
        .catch((error) => console.log(error));
    },
    //use regex to validate email
    validateEmail(email) {
      var re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      return re.test(email);
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">

#divRegister {
  border: 3px solid black;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 15px 15px 15px 15px;
  max-width: 400px;
  color: #ffc312;
}

.centrar {
  display: block;
  margin: auto;
  text-align: center;
  margin-bottom: 20px;
}

#registerForm {
  margin-top: 5vh;
  align-items: center;
}

#btnRegister {
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
