function handleSubmit() {
    const searchBox = document.querySelector('#searchbox')
    
    const shortcuts = Object.freeze({
        bb: {
            url: 'https://my.senecacollege.ca'
        },
        fb: {
            url: 'https://facebook.com'
        },
        g: {
            url: 'https://github.com',
            search_url: 'https://github.com/search?q='
        },
        google: {
            url: 'https://google.com',
            search_url: 'https://google.com/search?q='
        },
        im: {
            url: 'https://imgur.com'
        },
        jp: {
            url: 'http://tangorin.com',
            search_url: 'http://tangorin.com/general/'
        },
        mal: {
            url: 'https://myanimelist.net/',
            search_url: 'https://myanimelist.net/search/all?q='
        },
        re: {
            url: 'https://old.reddit.com'
        },
        tw: {
            url: 'https://twitter.com'
        },
        yt: {
            url: 'https://youtube.com/feed/subscriptions'
        }
    })

    const searchTerm = searchBox.value.trim()

    if (searchTerm !== '') {
        const searchTermParts = searchTerm.split(' ')

        if (shortcuts.hasOwnProperty(searchTermParts[0])) {
            if (searchTermParts.length == 1) {
                window.location.href = shortcuts[searchTermParts[0]].url
            } else {
                window.location.href = `${shortcuts[searchTermParts[0]].search_url}${encodeURIComponent(searchTermParts.slice(1).join(' '))}`
            }
        } else {
            window.location.href = `${shortcuts.google.search_url}${encodeURIComponent(searchTerm)}`
        }
    }

    searchBox.value = '';

    return false
}

window.onload = () => {
    const form = document.querySelector('#search-form')
    form.addEventListener('submit', handleSubmit)
}