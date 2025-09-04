const form = document.querySelector('form') // Since only one form we can get by just querySelecting the form (if only one button use just button)

const url = 'http://localhost:3000/blogs/'

form.addEventListener('submit', (event)=> { // Adding submit eventListener
    event.preventDefault() // Prevent default action of reloading the page or navigating away

    var userData = new FormData(event.target) // js provide a built-in class called FormData() that collects all input values inside that form. To get the form that was submitted we pass event.target
    var data = Object.fromEntries(userData) // FormData gives data in key-value pairs. Object.fromEntries turns that into a normal object.

    fetch(url, {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
    }).then(res => {
        alert('Data Added successfully') // alert is a blocking function. It cancels or delays navidation sometimes. So set a timer .
        
        setTimeout(()=> {
            window.location.href = "index.html" // action in form not taking to index.html page because we prevent default page reload so redirect the page manually
        })        
    })
})