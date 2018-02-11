import {Prop, Component, Vue, Inject} from "vue-property-decorator";
import {Manga} from "../../reader/data/manga";
import bContainer from 'bootstrap-vue/es/components/layout/container'
import bCol from 'bootstrap-vue/es/components/layout/col'
import bRow from 'bootstrap-vue/es/components/layout/row'
import bTable from 'bootstrap-vue/es/components/table/table'
import './manga.scss'
import {AxiosResponse} from "axios";
import {Chapter} from "../../reader/data/chapter";
import {AxiosDataService} from "../../reader/axios-data-service";

@Component({
  template: require('./manga.html'),
  components: {
    'b-container': bContainer,
    'b-col': bCol,
    'b-row': bRow,
    'b-table': bTable,
  }
})
export class MangaComponent extends Vue {

  @Inject("DataService")
  dataService: AxiosDataService

  manga: Manga = null
  chapters: Chapter[] = []

  loading: number = 2

  mounted() {
    this.loading = 2

    let mangaId = this.$route.params.mangaId || null
    if (mangaId === null) {
      this.$router.push("/")
    }

    this.dataService.getManga(mangaId).then((response: AxiosResponse<Manga>) => {
      this.manga = response.data
      this.loading--;
    }).catch(() => {
      this.$router.push("/")
    })

    this.dataService.getMangaChapters(mangaId).then((response: AxiosResponse<Chapter[]>) => {
      this.chapters = response.data
      this.loading--
    }).catch(() => {
      this.$router.push("/")
    })
  }

  goToChapter(mangaId: string, chapterId: string) {
    this.$router.push({
      name: "chapter",
      params: {
        mangaId: mangaId,
        chapterId: chapterId
      }
    })
  }
}
