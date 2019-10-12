export class Post {

    title : string;
    content:string;
    date:Date;
    loveIts:number;


    constructor(title,content) {
      this.title = title;
      this.content = content;
      this.loveIts=0;
      this.date=new Date();
    }
  }