
<template>
  <div>
      <h1>Hello App!</h1>
      <!-- <Home />
      <About /> -->
        <p>
           <router-link to="/">Go to Home</router-link>
           <router-link to="/about">Go to About</router-link>
           <router-link to="/board">Go to kanbanboard</router-link>
        </p>
        <!-- route outlet -->
        <!-- component matched by the route will render here -->
        <router-view></router-view>
  </div>
</template>

<script>
// import Home from './components/Home.vue';
// import About from './components/About.vue';


export default {
  name: 'Hellowworld',
  components: {
    //   Home,
    //   About
  }
}
</script>

<style>

</style>
