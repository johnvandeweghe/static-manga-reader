import Vue from 'vue'
import VueRouter, { Location, Route, RouteConfig } from 'vue-router'

const mangaListComponent = () => import('./components/mangalist').then(({ MangaListComponent }) => MangaListComponent)
const mangaComponent = () => import('./components/manga').then(({ MangaComponent }) => MangaComponent)

Vue.use(VueRouter)

export const createRoutes: () => RouteConfig[] = () => [
  {
    path: '/',
    component: mangaListComponent
  },
  {
    path: '/manga/:mangaId',
    name: 'manga',
    component: mangaComponent
  }
]

export const createRouter = () => new VueRouter({ mode: 'history', routes: createRoutes() })
