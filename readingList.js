class BookList{
    constructor(_read, _notRead, _next, _curent, _last, _array){
        this.read = _read;
        this.notRead = _notRead;
        this.next = _next;
        this.curent = _curent;
        this.last = _last;
        this.array = _array;
    }
    add(book){
        if(!this.array.includes(book)){
            this.array.push(book)
        
            if(book.read){
               this.read++
            }else{
                this.notRead++
            }
        }else{    
            console.log("book already in");
        }
    }
    finishCurrentBook(){
        const currentBook = this.curent;
        this.read ++;
        this.notRead --;
        this.last = currentBook;
        currentBook.read = true;
        currentBook.readDate = new Date(Date.now());
        this.curent = this.next;
        for( let book of this.array){
            if(book.read === false){
                this.next= book;
                return;
            }
        }
    }

}

class Book{
    constructor(_title, _genre, _author, _read, _readDate){
        this.title =_title;
        this.genre =_genre;
        this.author =_author;
        this.read =_read;
        this.readDate =_readDate;
    }
}

const harry = new Book("HARRYpoter", "magic", "J.K", false);
const moshe = new Book("mosheBateiva", "drama", "god", true);
const tiras = new Book("tiras Ham", "drama", "MOshe", false);
const arr = [harry, moshe];
const library = new BookList(1 , 5, moshe, harry, undefined, arr);
library.add(tiras);
console.log(library); 
