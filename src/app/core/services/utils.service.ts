import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  validToken(){
    if (!!sessionStorage.getItem('currentUser') && UtilsService.lessThanOneHour()) return true;
    else return false;
  }


  static lessThanOneHour():boolean {

    const cachedUser = JSON.parse(sessionStorage.getItem('currentUser'));
    if (!!cachedUser) {
      let validPeriod:boolean = true;
      const tokenCreationDate = cachedUser.creationDate;
      const diferencia_segundos = Math.floor(((new Date().getTime()) - (new Date(tokenCreationDate).getTime())) / 1000);
      const minutos = Math.floor(((new Date().getTime()) - (new Date(tokenCreationDate).getTime())) / (1000*60));
      const diferencia_segundos_restantes = Math.floor(((new Date().getTime()) - (new Date(tokenCreationDate).getTime())) % (1000*60)) / 1000;
      console.log("diferencia en segundos: " + minutos + " minutos - " + diferencia_segundos_restantes + " segundos");
      validPeriod = diferencia_segundos < 60*60;
      if(validPeriod) {
        return true;
      } else {
        sessionStorage.removeItem('currentUser');
        return false;
      }
      return validPeriod;
    }else {
      return false;
    }
    
  }

}
