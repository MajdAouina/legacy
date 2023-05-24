<template>
    <div class="form">
      <!-- <style>
        {`
        background-color: white;
        background-size: cover;
        background-position: center;
      `}
      </style>
   -->
      <div v-if="!create" class="login">
        <div class="center">
          <h2 class="form-title">LOG IN</h2>
          <div class="form-holder">
            <input
              type="email"
              required
              v-model="email"
              class="input"
              placeholder="Set your email"
            />
            <input
              type="password"
              required
              v-model="password"
              class="input"
              placeholder="Password"
              @dblclick="handleLog"
            />
          </div>
        </div>
      </div>
  
      <div id="reg">
        <section>
          <h3>REGISTER</h3>
          <div class="size">
            <p>
              IF YOU STILL DON'T HAVE A{" "}
              <span>
                <strong>ZARA.com</strong> ACCOUNT, USE THIS OPTION TO ACCESS THE
                REGISTRATION FORM.
              </span>
            </p>
          </div>
  
          <div class="size">
            <p>
              BY GIVING US YOUR DETAILS, PURCHASING <b>ZARA</b> WILL BE FASTER AND
              AN ENJOYABLE EXPERIENCE.
            </p>
          </div>
  
          <div id="bttn">
            <button @click="handleCreateAccount">
              <a>CREATE ACCOUNT</a>
            </button>
          </div>
        </section>
      </div>
  
      <div id="footer"></div>
  
      <div v-if="create" class="login">
        <div class="center">
          <h2 class="form-title">Create account</h2>
          <div class="form-holder">
            <input
              type="text"
              required
              v-model="username"
              class="input"
              placeholder="Username"
            />
            <input
              type="email"
              required
              v-model="email"
              class="input"
              placeholder="Set your email"
            />
            <input
              type="password"
              required
              v-model="password"
              class="input"
              placeholder="Password"
            />
          </div>
          <button class="submit-btn" @click="handleSubmit">Create account</button>
          <button class="register" @click="handleCreateAccount">
            Already have an account?
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import axios from 'axios';
  import jwtDecode from 'jwt-decode';
  
  interface TokenPayload {
    email: string;
    iat: number;
  }
  
  @Component
  export default class Login extends Vue {
    username = '';
    email = '';
    password = '';
    create = false;
  
    API = 'http://localhost:3002/user/login';
    API2 = 'http://localhost:3002/user/sign';
  
    handleCreateAccount(): void {
      this.create = !this.create;
    }
  
    async handleLog(): Promise<void> {
      const obj = {
        full_name: this.username,
        email: this.email,
        password: this.password
      };
    
      try {
        const res = await axios.post(this.API, obj);
        const token = res.data.token;
        const decodedToken = jwtDecode<TokenPayload>(token);
        localStorage.setItem('token', token);
        console.log(decodedToken.email,"Ala");
        console.log(decodedToken);
        window.location.href = '/All';
        } catch (err) {
        console.log(err);
    }
}

        async handleSubmit(): Promise<void> {
        if (this.username === '' || this.email === '' || this.password === '') {
        alert('Fill in all the fields');
        } else {
            const obj = {
            full_name:this.username,
            email: this.email,
            password: this.password
        };
    }
}}