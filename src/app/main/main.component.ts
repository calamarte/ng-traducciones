import { Component, OnInit } from '@angular/core';
import { PalabraService } from '../palabra.service';
import { ImageProviderService } from '../image-provider.service';
import { LyDialog } from '@alyle/ui/dialog';

 interface IGrupo {
  id: number,
  nombre: string,
  palbras:Array<Object>
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public palabras = [];
  public grupos: Array<IGrupo> = [];
  public imagenes = {};

  public imgIndex = 0;

  private interval;

  constructor(
    private service: PalabraService,
     private images: ImageProviderService,
     private dialogGrupo: LyDialog
     ) { }

  ngOnInit() {
    this.init();
  }

  async init(){
    this.freeInterval();
    this.palabras = await this.service.getAll();
    this.grupos = await this.service.getAllByGrupo();

    let o = {};
    for (let i = 0; i < this.grupos.length; i++) {
       const g = this.grupos[i];
       o[g.nombre] = await this.images.getImages(g.nombre);
    }

    this.imagenes = o;
    this.initInterval();
  }

  private initInterval(){
    this.interval = setInterval(()=>{
      this.imgIndex = Math.floor((this.imgIndex + 1) % this.images.size());
    }, 5000)
  }

  private freeInterval(){
    if(this.interval){
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }


}
