import { Prop, Component, Vue, Inject, Watch } from 'vue-property-decorator'
import { Manga } from '../../reader/data/manga'
import bContainer from 'bootstrap-vue/es/components/layout/container'
import bCol from 'bootstrap-vue/es/components/layout/col'
import bRow from 'bootstrap-vue/es/components/layout/row'
import './chapter.scss'
import { AxiosResponse } from 'axios'
import { Chapter } from '../../reader/data/chapter'
import { AxiosDataService } from '../../reader/axios-data-service'
import { Page } from '../../reader/data/page'
import * as _ from 'underscore'

@Component({
  template: require('./chapter.html'),
  components: {
    'b-container': bContainer,
    'b-col': bCol,
    'b-row': bRow
  }
})
export class ChapterComponent extends Vue {

  @Inject('DataService')
  dataService: AxiosDataService

  manga: Manga = null
  chapters: Chapter[] = []
  chapterId: string = null
  pages: Page[] = []

  get chapter (): Chapter {
    return _.find(this.chapters, (chapter: Chapter): boolean => {
      return chapter.id === this.chapterId
    })
  }

  get firstChapter (): Chapter {
    return this.chapters[0]
  }

  get previousChapter (): Chapter {
    let chapterIndex = _.findIndex(this.chapters, (chapter: Chapter): boolean => {
      return chapter.id === this.chapterId
    })
    return this.chapters[chapterIndex - 1] || null
  }

  get nextChapter (): Chapter {
    let chapterIndex = _.findIndex(this.chapters, (chapter: Chapter): boolean => {
      return chapter.id === this.chapterId
    })

    return this.chapters[chapterIndex + 1] || null
  }

  get lastChapter (): Chapter {
    return this.chapters[this.chapters.length - 1]
  }

  loading: number = 3

  mounted () {
    this.load()
  }

  load () {
    this.loading = 3

    let mangaId = this.$route.params.mangaId || null
    let chapterId = this.$route.params.chapterId || null
    if (mangaId === null) {
      this.$router.push('/')
    } else if (chapterId === null) {
      this.goToManga(mangaId)
    }

    this.chapterId = chapterId

    this.dataService.getManga(mangaId).then((response: AxiosResponse<Manga>) => {
      this.manga = response.data
      this.loading--
    }).catch(() => {
      this.$router.push('/')
    })

    this.dataService.getMangaChapters(mangaId).then((response: AxiosResponse<Chapter[]>) => {
      this.chapters = response.data
      this.loading--
    }).catch(() => {
      this.$router.push('/')
    })

    this.dataService.getChapterPages(chapterId).then((response: AxiosResponse<Page[]>) => {
      this.pages = response.data
      this.loading--
    }).catch(() => {
      this.goToManga(mangaId)
    })
  }

  @Watch('$route')
  onRoute (to, from) {
    this.load()
  }

  goToChapter (mangaId: string, chapterId: string) {
    this.$router.push({
      name: 'chapter',
      params: {
        mangaId: mangaId,
        chapterId: chapterId
      }
    })
  }

  goToManga (mangaId: string) {
    this.$router.push({
      name: 'manga',
      params: {
        mangaId: mangaId
      }
    })
  }
}
