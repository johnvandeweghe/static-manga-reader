import Vue from 'vue'
import VueRouter, { Location, Route, RouteConfig } from 'vue-router'

const mangaListComponent = () => import('./components/mangalist').then(({ MangaListComponent }) => MangaListComponent)
const updatedListComponent = () => import('./components/updatedlist').then(({ UpdatedListComponent }) => UpdatedListComponent)
const mangaComponent = () => import('./components/manga').then(({ MangaComponent }) => MangaComponent)
const chapterComponent = () => import('./components/chapter').then(({ ChapterComponent }) => ChapterComponent)

Vue.use(VueRouter)

export const createRoutes: () => RouteConfig[] = () => [
  {
    path: '/',
    component: updatedListComponent
  },
  {
    path: '/manga-list',
    component: mangaListComponent
  },
  {
    path: '/manga/:mangaId',
    name: 'manga',
    component: mangaComponent
  },
  {
    path: '/manga/:mangaId/chapter/:chapterId',
    name: 'chapter',
    component: chapterComponent
  }
]

export const createRouter = () => new VueRouter({ mode: 'history', routes: createRoutes() })
