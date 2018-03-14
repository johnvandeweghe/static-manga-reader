webpackJsonp([6],{"./src/main.ts":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("./node_modules/vue/dist/vue.esm.js"),a=e("./src/router.ts"),o=e("./node_modules/axios/index.js"),r=e.n(o),i=e("./src/sass/main.scss"),u=(e.n(i),e("./src/reader/axios-data-service.ts")),c=function(){return e.e(1).then(e.bind(null,"./src/components/navbar/index.ts")).then(function(t){return t.NavbarComponent})};s.default.use(e("./node_modules/vue-moment/vue-moment.js"));var d=new u.a("/assets/",r.a);new s.default({el:"#app-main",router:Object(a.a)(),components:{navbar:c},provide:{DataService:d}})},"./src/reader/axios-data-service.ts":function(t,n,e){"use strict";e.d(n,"a",function(){return s});var s=function(){function t(t,n){this.basePath=t,this.axiosClient=n}return t.prototype.getMangaList=function(){return this.axiosClient.get(this.basePath+"mangalist.json")},t.prototype.getUpdatedList=function(){return this.axiosClient.get(this.basePath+"updatedlist.json")},t.prototype.getManga=function(t){return this.axiosClient.get(this.basePath+"meta/m-"+t+".json")},t.prototype.getMangaChapters=function(t){return this.axiosClient.get(this.basePath+"meta/c-"+t+".json")},t.prototype.getChapterPages=function(t){return this.axiosClient.get(this.basePath+"meta/p-"+t+".json")},t}()},"./src/router.ts":function(t,n,e){"use strict";e.d(n,"a",function(){return d});var s=e("./node_modules/vue/dist/vue.esm.js"),a=e("./node_modules/vue-router/dist/vue-router.esm.js"),o=function(){return e.e(4).then(e.bind(null,"./src/components/mangalist/index.ts")).then(function(t){return t.MangaListComponent})},r=function(){return e.e(2).then(e.bind(null,"./src/components/updatedlist/index.ts")).then(function(t){return t.UpdatedListComponent})},i=function(){return e.e(0).then(e.bind(null,"./src/components/manga/index.ts")).then(function(t){return t.MangaComponent})},u=function(){return e.e(3).then(e.bind(null,"./src/components/chapter/index.ts")).then(function(t){return t.ChapterComponent})};s.default.use(a.a);var c=function(){return[{path:"/",component:r},{path:"/manga-list",component:o},{path:"/manga/:mangaId",name:"manga",component:i},{path:"/manga/:mangaId/chapter/:chapterId",name:"chapter",component:u}]},d=function(){return new a.a({mode:"history",routes:c()})}},"./src/sass/main.scss":function(t,n){}},["./src/main.ts"]);