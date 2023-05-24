<template>
    <div>
      <Navbar />
      <div>
        <button @click="handle">Change Image</button>
        <img :src="img" alt="Product Image" />
      </div>
      <div>
        <ul>
          <li v-for="product in products" :key="product.id">
            <div>{{ product.name }}</div>
            <div>{{ product.price }}</div>
            <div>{{ product.description }}</div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  <script>
  import axios from 'axios';
  import Navbar from './navbar.vue';
  export default {
    components: {
      Navbar,
    },
    data() {
      return {
        products: [],
        img: 'https://img.icons8.com/?size=512&id=nfkSUPApKQlU&format=png',
        i: 1,
      };
    },
    mounted() {
      this.fetchProducts();
    },
    methods: {
      handle() {
        this.i++;
        if (this.i > 2) {
          this.i = 1;
          this.img = 'https://img.icons8.com/?size=512&id=nfkSUPApKQlU&format=png';
        }
        if (this.i > 0) {
          this.img = 'https://img.icons8.com/?size=512&id=nfkSUPApKQlU&format=png';
        }
        if (this.i === 2) {
          this.img = 'https://img.icons8.com/?size=512&id=53419&format=png';
        }
      },
      async fetchProducts() {
        try {
          const response = await axios.get('http://localhost:3002/api/get');
          this.products = response.data;
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      },
      redirectToProduct(productId) {
        window.location.href = `oneProduct/${productId}`;
      },
    },
  };
  </script>  
  <script>
  import axios from 'axios';
  import Navbar from './Navbar.vue';
  
  export default {
    components: {
      Navbar,
    },
    data() {
      return {
        products: [],
        i: 1,
        img: 'https://img.icons8.com/?size=512&id=nfkSUPApKQlU&format=png',
      };
    },
    mounted() {
      this.fetchProducts();
    },
    methods: {
      handle() {
        this.i++;
        if (this.i > 2) {
          this.i = 1;
          this.img =
            'https://img.icons8.com/?size=512&id=nfkSUPApKQlU&format=png';
        }
        if (this.i > 0) {
          this.img =
            'https://img.icons8.com/?size=512&id=nfkSUPApKQlU&format=png';
        }
        if (this.i === 2) {
          this.img = 'https://img.icons8.com/?size=512&id=53419&format=png';
        }
      },
      async fetchProducts() {
        try {
          const response = await axios.get('http://localhost:3002/api/get');
          this.products = response.data;
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      },
    },
  };
  </script>
  <template>
    <div>
      <Navbar />
      <img class="img" :src="img" @click="handle" />
      <div id="main">
        <div v-for="product in products" :key="product.id">
          <img @click="redirectToProduct(product.id)" :src="product.img" alt="" />
          <div class="flex">
            <p>{{ product.name }}</p>
            <div>
              <p style="text-decoration: line-through;">$2,990.00</p>
              <p>${{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>
      <div id="footer"></div>
    </div>
  </template>
  