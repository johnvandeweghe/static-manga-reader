import {Component, Inject, Vue} from 'vue-property-decorator'
import bContainer from 'bootstrap-vue/es/components/layout/container'
import bCol from 'bootstrap-vue/es/components/layout/col'
import bRow from 'bootstrap-vue/es/components/layout/row'

import './mangalist.scss'
import {AxiosDataService} from "../../reader/axios-data-service";
import {Manga} from "../../reader/data/manga";
import {AxiosResponse} from "axios";

@Component({
  template: require('./mangalist.html'),
  components: {
    'b-container': bContainer,
    'b-col': bCol,
    'b-row': bRow
  }
})
export class MangaListComponent extends Vue {

  @Inject("DataService")
  dataService: AxiosDataService

  mangaList: Manga[] = []
  loading: boolean = false

  mounted() {
    this.loading = true
    this.dataService.getMangaList().then((response: AxiosResponse<Manga[]>) => {
      this.mangaList = response.data
      this.loading = false
    })
  }
}
