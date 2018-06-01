class Post {
    constructor(fbkey, title, body, owner, timestamp) {
      this.fbkey = fbkey;
      this.tittle = title;
      this.body = body;
      this.owner = owner;
  
      if (timestamp === null) {
        this.timestamp = new Date.now();
      } else {
        this.timestamp = new Date(timestamp);
      }
    }
  }