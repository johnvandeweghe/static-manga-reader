import Vue from 'vue'
import { createRouter } from './router'
import axios from 'axios'

const navbarComponent = () => import('./components/navbar').then(({ NavbarComponent }) => NavbarComponent)
// const navbarComponent = () => import(/* webpackChunkName: 'navbar' */'./components/navbar').then(({ NavbarComponent }) => NavbarComponent)

import './sass/main.scss'
import {AxiosDataService} from "./reader/axios-data-service";
Vue.use(require('vue-moment'));

const dataService = new AxiosDataService("/assets/", axios);

// tslint:disable-next-line:no-unused-expression
new Vue({
  el: '#app-main',
  router: createRouter(),
  components: {
    'navbar': navbarComponent
  },
  provide: {
    "DataService": dataService
  }
})
