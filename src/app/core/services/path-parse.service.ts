import { Injectable } from '@angular/core';

@Injectable()
export class PathParseService {

  constructor() { }
  public getPathParams(path: string): string[] {
    const urlArray = path.split('/');
    const params = urlArray.filter((param) => param.search(/^\:.*/) !== -1);
    return params.map((param) => {
      return param.replace(/\:/, '');
    });
  }

  public replacePathParams(path: string, params: any) {
    this.getPathParams(path).forEach((param) => path = path.replace(`:${param}`, params[param]));
    return path;
  }
}
