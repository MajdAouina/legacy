<template>
    <div>
      <div class="background-video-container">
        <video class="background-video" autoplay loop muted>
          <source :src="vd" type="video/mp4" />
        </video>
      </div>
  
      <!-- <style scoped>
        body {
          background: url({{ backgroundImage }}) no-repeat fixed center;
          background-size: cover;
        }
      </style> -->
  
      <header>
        <div id="hambuger">
          <img
            @click="goToAll"
            src="https://icon-library.com/images/menu-icon-png-3-lines/menu-icon-png-3-lines-16.jpg"
            alt=""
            id="hamburgerIcon"
          />
        </div>
        <div id="logohead">
          <a href="/">
            <img
              src="https://logodownload.org/wp-content/uploads/2014/05/zara-logo-1.png"
              alt=""
              id="zara_logo"
            />
          </a>
          <div id="ul">
            <ul>
              <li @click="toggleLogin" class="log-help">LOGIN</li>
              <a href="/Search">
                <li class="log-help">SEARCH</li>
              </a>
              <a href="/help">
                <li class="log-help">HELP</li>
              </a>
              <a href="/cart">
                <li>CART</li>
              </a>
            </ul>
          </div>
        </div>
      </header>
  
      <Login v-if="log" />
  
      <!-- Rest of the component -->
    </div>
  </template>
  
  <script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import Login from './Login.vue';
  
    @Component({
        components: {
        login,
        },
    })
  export default class Home extends Vue {
    activeView = '';
    vd = '';
    sidebarOpen = false;
    log = false;
    backgroundImage =
      'https://www.leal.work/static/04dc9323f0cac4082a8657a2ba5c3bbe/zara-7.jpg';
  
    handleViewClick(viewName: string) {
      if (this.activeView === viewName) {
        this.activeView = '';
      } else {
        this.activeView = viewName;
      }
    }
  
    openSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
      console.log(this.sidebarOpen);
    }
  
    toggleLogin() {
      this.log = !this.log;
    }
  
    handleClick() {
      this.backgroundImage =
        'https://www.strategyzer.com/hubfs/zara-large.jpg';
      this.vd = '/videos/vd3.mp4';
    }
  
    mounted() {
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'ArrowUp') {
      this.backgroundImage =
        'https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-dresses/subhome-xmedia-20//w/1920/IMAGE-landscape-fill-07b13c36-46b1-440b-84a8-e3af731690ef-default_0.jpg?ts=1684086767489';
    } else if (event.key === 'ArrowDown') {
      this.backgroundImage =
        'https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-atelier/subhome-xmedia-atelier-shoes//w/1920/IMAGE-landscape-default-fill-656fc2ed-09b8-4aa2-aa58-1ed1ebefaf31-default_0.jpg?ts=1683833294578';
    } else if (event.key === 'ArrowLeft') {
      this.backgroundImage =
        'https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-new/subhome-xmedia-20//w/1920/IMAGE-landscape-fill-c858f95e-9272-423c-a1ee-40e7dfd5b638-default_0.jpg?ts=1684136380997';
      this.vd = '';
    } else if (event.key === 'ArrowRight') {
      this.backgroundImage =
        'https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-atelier/subhome-xmedia-atelier-collection//w/1920/IMAGE-landscape-default-fill-9e19aff3-b564-484d-b0f0-11b64bfe7717-default_0.jpg?ts=1683832897603';
    } else if (event.key === 'n') {
      this.vd = '/videos/vd3.mp4';
    } else if (event.key === ' ') {
      this.vd = '/videos/vd9.mp4';
    }
  };

  window.addEventListener('keydown', handleKeyPress);
  return () => {
    window.removeEventListener('keydown', handleKeyPress);
  };
}
}
</script>
