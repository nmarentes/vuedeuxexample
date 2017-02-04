<template>
  <div id="app">
    <img src="./assets/logo.png">
    <product></product>
    <hr/>
    <div class = "cartBox">
    <Cart></Cart>
    </div>
  </div>
</template>

<script>
import Product from './components/Product';
import Cart from './components/Cart';

export default {
  name: 'app',
  components: {
    Product,
    Cart,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
