var users = [{ name: "Bahadır" }, { name: "Berat" }, { name: "Burak" }];

var user;

for (let i = 0; i < users.length; i++) {
    if(users[i].name === "Bahadır"){
        user = users[i]
    }
}

users.find(function(user){
    return user.name === "Bahadır"
})

var posts = [
    {id:1 , title : "New post"},
    {id:2 , title : "Old post"}
]

var comment = { postId:1, content: "Great Post"};

function postForComment(posts,comment){
    return posts.find(function(post){
        return posts.id === comment.postId;
    })
}

postForComment(posts,comment)