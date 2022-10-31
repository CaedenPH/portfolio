import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GistService {
  gists: object | undefined;
  codeImgUrl: string = "https://carbonara-42.herokuapp.com/api/cook"

  async fetchGists(): Promise<void> {
    const gists = await axios.get("https://api.github.com/users/caedenph/gists")
    this.gists = gists.data;
    if (!this.gists) return;

    // for (const gist of Object.values(this.gists)) {
    //   const readme = gist['files']['README.md'];
    //   const content = (await axios.get(readme['raw_url'])).data
    //   gist['img'] = (await axios.post(this.codeImgUrl, {
    //     JSON: {"code": content.slice(0, 300)},
    //   })).data;
    // }
  }

  getGists(): object {
    if (!this.gists) this.fetchGists();
    // console.log(this.gists);
    // @ts-ignore
    return this.gists;
  }
}
