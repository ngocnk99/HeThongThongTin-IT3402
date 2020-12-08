<template>
  <div class="col-md-12">
    <div class="card card-container">
      <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
      <form name="form" @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            v-model="user.username"
            v-validate="'required'"
            type="text"
            class="form-control"
            name="username"
          />
          <div
            v-if="errors.has('username')"
            class="alert alert-danger"
            role="alert"
          >
            Username is required!
          </div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            v-model="user.password"
            v-validate="'required'"
            type="password"
            class="form-control"
            name="password"
          />
          <div
            v-if="errors.has('password')"
            class="alert alert-danger"
            role="alert"
          >
            Password is required!
          </div>
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block" :disabled="loading">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Login</span>
          </button>
        </div>
        <div class="form__main-or">OR</div>
        <div class="form__main-bot">
          <div class="bot-btn">
            <div class="facebook-btn" @click="signInWithFB">Facebook</div>
            <div class="google-btn" @click="signInWithGG">Google</div>
          </div>
          <div style="margin-top: 10px">
            Don't Have an Account?

            <router-link to="/register" class="nav-link">
              Sign Up Now
            </router-link>
          </div>
        </div>
        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
      </form>
    </div>
    <div>{{ user }}</div>
  </div>
</template>

<script>
import firebase from 'firebase';
import User from '../models/user';
export default {
  name: 'Login',
  data() {
    return {
      user: new User('', ''),
      loading: false,
      message: '',
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/profile');
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$validator.validateAll().then((isValid) => {
        if (!isValid) {
          this.loading = false;
          return;
        }
        if (this.user.username && this.user.password) {
          this.$store.dispatch('auth/login', this.user).then(
            () => {
              this.$router.push('/mybook');
            },
            (error) => {
              this.loading = false;
              this.message =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
            }
          );
        }
      });
    },
    signInWithGG() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // The signed-in user info.
          this.$store
            .dispatch('auth/login', {
              username: result.additionalUserInfo.profile.name,
              password: result.additionalUserInfo.profile.email,
            })
            .then(
              () => {
                this.$router.push('/mybook');
              },
              (error) => {
                this.loading = false;
                this.message =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();
              }
            );
        })
        .catch(function () {});
    },
    signInWithFB() {
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          this.$store
            .dispatch('auth/login', {
              username: result.user.displayName,
              password: result.user.email,
            })
            .then(
              () => {
                this.$router.push('/mybook');
              },
              (error) => {
                this.loading = false;
                this.message =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();
              }
            );
        })
        .catch(function () {});
    },
  },
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
.form__main-or {
  text-align: center;
  margin: 16px 0;
  position: relative;
}

.form__main-or::after {
  position: absolute;
  width: 40%;
  height: 1px;
  content: '';
  margin: auto;
  position: absolute;
  top: 50%;
  left: 59%;
  background: #beb7b7;
}

.form__main-or::before {
  position: absolute;
  width: 40%;
  height: 1px;
  content: '';
  margin: auto;
  position: absolute;
  top: 50%;
  right: 59%;
  background: #beb7b7;
}

.form__main-bot {
  text-align: center;
}

.form__main-bot a {
  color: black;
}

.form__main-bot a:hover {
  color: #ff324d;
}

.form__main-bot .bot-btn {
  display: flex;
  justify-content: center;
  color: white;
}

.form__main-bot .bot-btn .facebook-btn {
  background-color: #3b5998;
  margin-right: 16px;
  width: 140px;
  height: 45px;
  line-height: 45px;
  border-radius: 10px;
  cursor: pointer;
}

.form__main-bot .bot-btn .google-btn {
  background-color: #d85040;
  width: 140px;
  height: 45px;
  line-height: 45px;
  border-radius: 10px;
  cursor: pointer;
}
</style>