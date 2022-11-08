<template>
  <div class="window-height window-width row justify-center items-center">
    <div class="column">
      <div class="row text-center">
        <img src="src/assets/Bank of Africa.svg" />
        <q-separator></q-separator>
        <div class="app-label text-center">
          <p
            class="header-text text-h5 text-center q-my-md"
            style="margin-left: 102px; color: #459755"
          >
            AMMS - APP
          </p>
        </div>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-2">
          <q-card-section>
            <q-form class="q-gutter-sm">
              <q-input
                square
                clearable
                v-model="email"
                type="email"
                label="email"
              />
              <q-input
                square
                clearable
                v-model="password"
                type="password"
                label="password"
              />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn
              unelevated
              size="lg"
              class="loginBtn full-width"
              @click="authenticate"
              label="Login"
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6">Not reigistered? Created an Account</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter, useRoute } from "vue-router";

export default {
  name: "Login",

  data() {
    const router = useRouter();

    const authenticate = () => {
      router.push("/home");
    };
    return {
      email: "",
      password: "",
      authenticate,
    };
  },
};
</script>

<style>
.q-card {
  width: 400px;
}

.header-text {
  font-size: xx-large;
  color: rgb(69, 151, 85);
  font-weight: 800;
  margin-top: 20px;
}

.loginBtn {
  background: #459755;
  color: #ffff;
}
</style>
