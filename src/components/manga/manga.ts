import {Prop,Component,Vue} from "vue-property-decorator";
import {Manga} from "../../reader/manga";
import bContainer from 'bootstrap-vue/es/components/layout/container'
import bCol from 'bootstrap-vue/es/components/layout/col'
import bRow from 'bootstrap-vue/es/components/layout/row'
import './manga.scss'

@Component({
  template: require('./manga.html'),
  components: {
    'b-container': bContainer,
    'b-col': bCol,
    'b-row': bRow,
  }
})
export class MangaComponent extends Vue {
  @Prop([Object])
  manga: Manga

}
