window.addEventListener('load', init, false);
function init() {

    var urlData = 'https://theevilmouseblog.firebaseio.com/posts.json';
    var tittle = document.getElementById('title');
    var body = document.getElementById('txtPost');
    var btnPost = document.getElementById('btnPost');
    var btnUpdate = document.getElementById('btnUpdate');
    var btnDelete = document.getElementById('btnDelete');
    var btnCancel = document.getElementById('btnCancel');
    var owner = 'Hector';

    btnPost.hidden = false;
    btnUpdate.hidden = true;
    btnDelete.hidden = true;
    btnCancel.hidden = true;

    var posts = [];
    var postSelected = null;
    requestAllPost();

    function requestAllPost() {
        var request = new XMLHttpRequest();
        request.open("GET", urlData, true);
        request.onreadystatechange = getPosts;
        request.send();
    }

    function getPosts(event) {
        var request = event.target;
        if (request.readyState == 4) {
            if (request.status == 200) {

                var data = JSON.parse(request.responseText);
                posts = [];
                for (const key in data) {
                    var postData = data[key];
                    var edit = false;
                    if (postData.owner === owner) {
                        edit = true;
                    }
                    var post = new Post(key, postData.title, postData.body, postData.owner, postData.timestamp);
                    posts.push(post);
                    console.log(posts);
                }
                updatePosts(post);
            }
        }
    }

    function updatePosts(post) {

        var postContainer = document.getElementById('postContainer');

        var uiPost = new PostUI(post);
    }
}