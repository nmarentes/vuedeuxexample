<template>
  <div class="product">
    <h1>Products</h1>
    <ul>
      <li v-for= "p in products">
        {{p.title}}  Price: &#36;{{ p.price }}
         <button v-on:click="addToCart()">Add To Cart</button>
      </li>
    </ul>
    <!--<button @click="onCheckoutClicked" disabled={{hasProducts ? '' : 'disabled'}}>-->
  </div>
</template>

<script>
  export default {
    name: 'product',
    data() {
      return {
        nodes: 'whats in a node',
        Price: '',
      };
    },
    methods: {
      onCheckoutClicked() {
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

button {
  background-color: #42b983; 
}
</style>