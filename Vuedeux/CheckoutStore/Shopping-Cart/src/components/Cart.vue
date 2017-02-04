<template>
  <div class="cart">
    <h3>Your Cart</h3>
    <div>{{nodes}}</div>
    <p>Total: &#36;{{ total }}</p>
    <!--<button @click="onCheckoutClicked" disabled={{hasProducts ? '' : 'disabled'}}>-->
    <button v-on:click="onCheckoutClicked()">
        Checkout
    </button>
  </div>
</template>

<script>
  export default {
    name: 'cart',
    data() {
      return {
        nodes: 'whats in a node',
        total: 'where do i get the prices from?',
      };
    },
    methods: {
      onCheckoutClicked() {
        // return e
      },
      hasProducts() {
        // toggle hasProducts
      },
    },
  };
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>