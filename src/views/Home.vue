<template>
  <div class="home">
    <header id="main-header">
      
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>

      <img alt="Vue logo" src="../assets/logo.png">
      <h1>TV</h1>

    </header>

    <section class="main-list">
      <h2>Movies</h2>
      <div class="list">
        
        <div class="item" v-for="(item, index) in highlight_movies_from_store" v-bind:key="index">
          <h3>{{ item.original_title }}</h3>
          <p>{{ item.overview }}</p>
        </div>
      
      </div>
    </section>

  </div>
</template>

<script>
// @ is an alias to /src
/*
import HelloWorld from '@/components/HelloWorld.vue'
*/
import { mapActions } from 'vuex'
export default {
  
  name: "Home",
  data() {
    return {
      
    }
  },
  computed: {
    highlight_movies_from_store(){
      return this.$store.state.highlight_movies
    }
  },
  methods: {
    ...mapActions(['load_highlight_movies'])
  },
  mounted() {
    this.load_highlight_movies()
  },
}
</script>

<style lang="scss">
body {
  font-family: Arial, Helvetica, sans-serif;
}
header#main-header {
  text-align: center;
  margin-bottom: 50px;
}
.main-list {
  width: 600px;
  margin: 0 auto 50px;
  .item {
    border: 1px solid #CCC;
    margin-bottom: 10px;
    border-radius: 5px;
    padding: 12px 15px;
    h3 {
      margin: 0 0 10px;
    }
    p {
      margin: 0;
    }
  }
}
</style>
