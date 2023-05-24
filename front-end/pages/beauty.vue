<template>
    <div class="beauty">
      <div
        v-for="(beautyItem, index) in beautyItems"
        :key="index"
        class="beauty-item"
      >
        <Cardd :e="beautyItem" />
        <router-link :to="`/secondProduct/${beautyItem.id}`">{{ beautyItem.name }}</router-link>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import Cardd from "./cardd.vue";
  
  export default {
    data() {
      return {
        beautyItems: [],
      };
    },
    mounted() {
      this.fetchBeautyData();
    },
    methods: {
      async fetchBeautyData() {
        try {
          const response = await axios.get("http://localhost:3002/api/beauty");
          this.beautyItems = response.data;
          console.log(this.beautyItems);
        } catch (error) {
          console.log(error);
        }
      },
    },
    components: {
      Cardd,
    },
  };
  </script>
  
  <style>
  @import 'bootstrap/dist/css/bootstrap.min.css';
  
  .beauty {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  /* .beauty-item {
    /* Add styles for each item } */
  </style> 
  