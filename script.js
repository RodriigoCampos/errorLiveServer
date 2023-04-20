const routes = {
    "/": "/pages/main.html",
    "/contact": "/pages/contact.html",
    "/about": "/pages/about.html",
    "/error": "/pages/error.html"
}


function route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    handle()
}

function handle() {
    const { pathname } = window.location
    const route = routes[pathname] || routes["/error"]
    
    fetch(route)
    .then(data => data.text())
    .then(html => {
        document.querySelector('#app').innerHTML = html
    })

    handle()

    console.log(pathname)
}