<template>
   <div class="window-height window-width row justify-center items-center">
    <div class="column">
      <div class="row text-center">
        <div class="app-label text-center">
          <p class="text-h5 text-center text-primary q-my-md" style="margin-left: 102px;">AMMS - APP</p>
        </div>
        
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-2">
          <q-card-section>
            <q-form class="q-gutter-sm">
              <q-input square clearable v-model="email" type="email" label="email" />
              <q-input square clearable v-model="password" type="password" label="password" />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn unelevated color="primary" size="lg" class="full-width" @click="authenticate" label="Login" />
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
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'Login',
  
  data () {
    const router = useRouter()

    const authenticate = () => {
      router.push('/home')
    }
    return {
      email: '',
      password: '',
      authenticate
    }
  }
}
</script>

<style>
.q-card {
  width: 400px;
}
</style>