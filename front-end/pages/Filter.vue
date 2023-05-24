<template>
    <div>
      <!-- <style scoped>
        @import 'tailwindcss/tailwind.css';
        .form-select:focus,
        button:focus {
          outline: none;
        }
        .form-select {
          padding: 8px;
          border: 2px solid #ddd;
          border-radius: 4px;
          background-color: #fff;
          font-size: 16px;
          color: #333;
          transition: border-color 0.3s ease;
        }
        .form-select:focus {
          border-color: blue;
          box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
        }
        button {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          background-color: #000000;
          color: #fff;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #535353;
        }
      </style> -->
      <select class="form-select" aria-label="Default select example" v-model="category">
        <option value="Newst">Newst</option>
        <option value="Perfume">Perfume</option>
        <option value="CARGO">Cargo</option>
        <option value="T-Shirts">T-Shirts</option>
      </select>
      <button @click="handleFilter">Filter</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        category: 'Newst',
      };
    },
    methods: {
      handleFilter() {
        window.location.href = `man/${this.category}`;
      },
    },
  };
  </script>
  