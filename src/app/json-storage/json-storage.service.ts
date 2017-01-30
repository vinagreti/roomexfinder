import { Injectable } from '@angular/core';

@Injectable()
export class JsonStorageService {

  constructor(){
    this.checkIflocalStorageIsAvailable();
  }

  private checkIflocalStorageIsAvailable = () => {
    let type = '';
    try {
      let testKey = '__np_storage_test__' + Date.now();
      type = 'localStorage';
      localStorage.setItem(testKey, 'work');
      localStorage.removeItem(testKey);
      type = 'sessionStorage';
      sessionStorage.setItem(testKey, 'work');
      sessionStorage.removeItem(testKey);
      return true;
    }
    catch(e) {
      console.error('jsonStorageService => Cannot find ' + type + ' on this browser.');
      return false;
    }
  }

  get = (key?: string) => {
    return JSON.parse(localStorage.getItem(key));
  }

  set = (key: string, value: any): boolean => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    }
    catch(e) {
      return false;
    }
  }

  remove = (key: string) => {
    return localStorage.removeItem(key);
  }

}