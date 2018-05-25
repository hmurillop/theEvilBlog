var config = {
	apiKey: "AIzaSyC_QTx6ZaFn1QEWQZdzDv3NqCm5MPJzJu8",
	authDomain: "theevilmouseblog.firebaseapp.com",
	databaseURL: "https://theevilmouseblog.firebaseio.com",
	projectId: "theevilmouseblog",
	storageBucket: "theevilmouseblog.appspot.com",
	messagingSenderId: "341107600456"
	};

firebase.initializeApp(config);



function init() {
	
}


class post{
	constructor(tittle,body,owner,timestamp){
		this.tittle = tittle;
		this.body = body;
		this.owner = owner;
		this.timestamp = timestamp;
	}
}