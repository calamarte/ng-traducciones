import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageProviderService {

  private baseUrl = 'https://pixabay.com/api/';
  private  apiOptions = {
    key: '7030760-7a482d4f0feda77e3af17919e',
    image_type: 'photo',
    lang: 'es',
    per_page: 5
  }

  constructor() { }

  public size():number{
    return this.apiOptions.per_page;
  }

  public async getImages(key:string){
    const url =  this.baseUrl + '?q=' + key + '&' + this.getParams();
    console.log(url); 
    let images = await fetch(url);
    let json = await images.json();

    console.log(json);

    let urls = [];
    if(json.hits){
    json = json.hits;

    for (let index = 0; index < json.length; index++) {
      urls.push(json[index].webformatURL);
    }
    console.log(urls);
  }
    
  return urls;
  }

  private getParams(){
    let params = [];
    for (const key in this.apiOptions) {
      if (this.apiOptions.hasOwnProperty(key)) {
        params.push(key +'='+ this.apiOptions[key]);
      }
    }

    return params.join('&');
  }

}
