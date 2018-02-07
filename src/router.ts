import Vue from 'vue'
import VueRouter, { Location, Route, RouteConfig } from 'vue-router'

const homeComponent = () => import('./components/home').then(({ HomeComponent }) => HomeComponent)
// const homeComponent = () => import(/* webpackChunkName: 'home' */'./components/home').then(({ HomeComponent }) => HomeComponent)
// const aboutComponent = () => import(/* webpackChunkName: 'about' */'./components/about').then(({ AboutComponent }) => AboutComponent)
// const listComponent = () => import(/* webpackChunkName: 'list' */'./components/list').then(({ ListComponent }) => ListComponent)

Vue.use(VueRouter)

export const createRoutes: () => RouteConfig[] = () => [
  {
    path: '/',
    component: homeComponent
  }
]

export const createRouter = () => new VueRouter({ mode: 'history', routes: createRoutes() })
