// As we want to append each blog to blogs we will get blogs element here

const blogsDiv = document.querySelector('.blogs')

// Now creating a function which will be fetching the API

const url = "http://localhost:3000/blogs" // Address we are going to fetch

fetchBlogs()

async function fetchBlogs(){
    let data = await fetch(url) // telling JS to wait for the response from fetching url then goto next line // now data is a response object
    let blogs = await data.json() // convert data to JSON object but await convert it to JS obj (or array) from JSON text // So now blogs is a JS obj

    printBlogs(blogs)
}

function printBlogs(blogData){ // since fetched blog is array we can use forEach
    blogData.forEach((item)=>{
        let blogElement = document.createElement('div')
        blogElement.classList.add('blog')

        blogElement.innerHTML = `
            <h2>${item.title}</h2>
            <p>${item.content}</p>
            <a href= "blog.html?id=${item.id}">
                Read more
            </a>
        `
        
        blogsDiv.appendChild(blogElement) // Sending queries in urls // check url after clicking read more to see the id we get in url

    })
}

// json-server --watch db.json (to run json)