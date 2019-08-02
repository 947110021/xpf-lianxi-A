<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header'
import Footer from './components/footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main{
  flex: 1;
  overflow: auto;
}
</style>
