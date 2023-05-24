<template>
    <b-card style="width: 18rem;">
      <b-card-img :src="e.img" variant="top"></b-card-img>
      <b-card-body>
        <b-card-title>{{ e.name }}</b-card-title>
        <b-card-text>
          <div>{{ e.description }}</div>
        </b-card-text>
      </b-card-body>
    </b-card>
  </template>
  
  <script>
  export default {
    props: ['e']
  };
  </script>
  