class CommentList{
    constructor(commentsArr){
      this.commentsArr = null;
    }

    render(){
      return "<ul>" + this.commentsArr + "</ul>"
    }

    addComment(string){
      const newComment = new Comment(string)
      this.commentsArr.push(newComment);
    }
}
