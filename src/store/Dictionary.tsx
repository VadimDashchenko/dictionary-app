import { makeAutoObservable } from 'mobx';

class Dictionary {

     endString: any[] = [];
     startString: any[] = [];
     inAll: any[] = [];
     doubleLetter: any[] = [];

    constructor(){
        makeAutoObservable(this)
    }

    startWord(data: any[]) {
        // @ts-ignore
        this.startString = this.startString.concat(data);
    }

    endWord(data: any[]) {
        // @ts-ignore
        this.endString = this.endString.concat(data)
    }

    findInAll(data: any[]) {
        // @ts-ignore
        this.inAll = this.inAll.concat(data)
    }

    findDoubleLetter(data: any[]) {
        // @ts-ignore
        this.doubleLetter = this.doubleLetter.concat(data)
    }

    clearInAll() {
        this.startString = [];
        this.endString = [];
        this.inAll = [];
        this.doubleLetter = [];
    }
}

export default new Dictionary();