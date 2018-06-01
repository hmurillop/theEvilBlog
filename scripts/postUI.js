class PostUI {
    constructor(post) {
      this.post = post;
  
      this.postContainer = document.createElement('div');
      this.title = document.createElement('h4');
      this.body = document.createElement('p');
      this.timestamp = document.createElement('p');
  
      this.postContainer.appendChild(this.title);
      this.postContainer.appendChild(this.body);
      this.postContainer.appendChild(this.timestamp);
  
      this.postContainer.className = 'postContainerPost';
      this.body.className = 'postContainerPost'
      this.timestamp.className = 'postContainerPost';
  
      if (this.post !== null) {
        this.title.innerText = this.post.tittle;
        this.body.innerText = this.post.body;
        this.timestamp.innerText = this.post.owner;
        // this.post.owner + '-' + this.post.timestamp.getDate() + '/' + this.post.timestamp.getMonth() + this.post.timestamp.getFullYear();
      }
      this.postContainer.post = this.post;
    }
  }
  
  