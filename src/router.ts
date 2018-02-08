import Vue from 'vue'
import VueRouter, { Location, Route, RouteConfig } from 'vue-router'

const mangaListComponent = () => import('./components/mangalist').then(({ MangaListComponent }) => MangaListComponent)
// const homeComponent = () => import(/* webpackChunkName: 'home' */'./components/home').then(({ MangaListComponent }) => MangaListComponent)
// const aboutComponent = () => import(/* webpackChunkName: 'about' */'./components/about').then(({ AboutComponent }) => AboutComponent)
// const listComponent = () => import(/* webpackChunkName: 'list' */'./components/list').then(({ ListComponent }) => ListComponent)

Vue.use(VueRouter)

export const createRoutes: () => RouteConfig[] = () => [
  {
    path: '/',
    component: mangaListComponent
  }
]

export const createRouter = () => new VueRouter({ mode: 'history', routes: createRoutes() })
