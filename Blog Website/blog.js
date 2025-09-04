const blogDetails = document.querySelector('.blogDetail') // finds the element with id blogDetail (element in blog.html)

const url = "http://localhost:3000/blogs/" // url of db.json we created. In browser after url put 'id' gives data of object with that id. 


/*

function getData(){
    var query = new URLSearchParams(window.location.search) // URLSearchParams is a class provided by javascript that helps you work with query strings(the part of a URL after ?). Window.location.search => everything after ? in the current browser URL. ie blog.html url

    var parameters = Object.fromEntries(query.entries()) // query.entries() gives all key-value pairs. (key => parameter name in url, value => parameters value) Eg: ["id", "1"] Object.fromEntries() turns that array into an object. Eg : {id : "1"}

    // console.log(parameters.id)

    fetch(url + parameters.id) // fetching each data from http://localhost:3000/blogs/id based on id
        .then(response => {

        }) // using promise 

    
}
*/

// using async await 

async function getData(){
    var query = new URLSearchParams(window.location.search)
    var parameters = Object.fromEntries(query.entries())

    var data = await fetch(url + parameters.id)
    var responseData = await data.json() // json data converted to text or object form

    // console.log(responseData)
    blogDetails.innerHTML = `
        <h1>${responseData.title}</h1>
        <p>${responseData.content}    `
}
getData()