import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GistService {
  gists: object | undefined; 

  async fetchGists(): Promise<void> {
    const gists = await axios.get("https://api.github.com/users/caedenph/gists")
    this.gists = gists.data;
  }

  getGists(): object {
    if (!this.gists) this.fetchGists();
    // @ts-ignore
    return this.gists;
  }
}
