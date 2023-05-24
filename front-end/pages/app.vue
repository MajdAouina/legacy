<template>
    <Layout>
      <component :is="Component" v-bind="pageProps" />
    </Layout>
  </template>
  
  <script>
  import Layout from '@/pages/layout';
  
  export default {
    components: {
      Layout,
    },
    props: ['Component', 'pageProps'],
  };
  </script>
  
  <style>
  @import 'bootstrap/dist/css/bootstrap.min.css';
  </style>
  