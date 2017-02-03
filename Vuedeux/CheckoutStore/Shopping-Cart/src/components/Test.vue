<template>
  <div class = "test">
    <input type="text" v-model="title"><br/>
   <h1>{{title}}</h1>
    <p v-if="showName">{{user.firstName}}</p>
     <p v-else>Nobody</p>
    <p v-text="user.lastName"></p>
    <ul>
      <li v-for="item in items">
        {{item.title}}
      </li>
    </ul>
    <button v-on:click="greet('hello there')">Say Greeting</button>
    <br/>
    <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">
    <hr/>
    <label>First Name: </label><input type="text" v-model="user.firstName">
    <br/>
    <label>Last Name: </label><input type="text" v-model="user.lastName">
    <h3>{{fullName}}</h3>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: 'test',
  props: {
    msg: {
      type: String,
      default: 'Foo',
    },
  },
  data() {
    return {
      title: 'Heeyy',
      user: {
        firstName: 'Nikol',
        lastName: 'M',
      },
      showName: false,
      items: [
        { title: 'Item One' },
        { title: 'Item Two' },
        { title: 'Item Three' },
      ],
    };
  },
  methods: {
    greet(greeting) {
      // eslint-disable-next-line
      alert(greeting);
    },
    pressKey(e) {
      // eslint-disable-next-line
      console.log(e.target.value)
    },
    enterHit() {
     // eslint-disable-next-line
     console.log('you hit enter')
    },
  },
  computed: {
    fullName() {
       // eslint-disable-next-line
      return this.user.firstName + ' ' + this.user.lastName;
    },
  },
};
</script>

<style scoped>


</style>