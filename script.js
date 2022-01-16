document.getElementById("new-post").addEventListener("submit", function(e) {
    e.preventDefault()
    const postTitle = document.getElementById("post-title").value
    const postBody = document.getElementById("post-body").value
    const first = document.createElement('h1')
    first.textContent = postTitle
    first.style.margin="20px";
    
    const second = document.createElement('p')
    second.textContent = postBody
    second.style.margin="10px";
    
    document.body.appendChild(first)
    document.body.appendChild(second)
    document.getElementById("post-title").value=""
   document.getElementById("post-body").value=""
})




fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        let html = ""
        for (let post of postsArr) {
            html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `
        }
        document.getElementById("blog-list").innerHTML = html
    })

 