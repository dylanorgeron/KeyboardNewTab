function addLink(){
    $('.link-list').append(newLink())
}

function openSettings(){
    $('#default').toggle()
    $('#manage').toggle()
}

function load(){
    const savedLinks = JSON.parse(localStorage.getItem('links'))
    for(let i = 0; i < savedLinks.length; i++){
        const link = JSON.parse(savedLinks[i])
        $('#default').append(`<a class='link' href='${link.href}'>${link.text}</a>`)
        $('#manage').append(newLink(link))
    }
}

function newLink(link){
    if(!link){
        link = {
            text: '',
            href: '',
            shortcut: ''
        }
    }
    return `
    <div class='${link.text ? 'editable-' : ''}link'>
        <div class='field'>
            <label>Text</label>
            <input class='text' value='${link.text}'>
        </div>
        <div class='field'>
            <label>Href</label>
            <input class='href' value='${link.href}'>
        </div>
        <div class='field'>
            <label>Shortcut</label>
            <input class='shortcut' value='${link.shortcut}'>
        </div>
    </div>
    `
}

function save(){
    let links = []
    $('.link').each(function(){
        links.push(JSON.stringify({
            text: $('.text', this).val(),
            href: $('.href', this).val(),
            shortcut: $('.shortcut', this).val()
        }))
    })
    localStorage.setItem('links', JSON.stringify(links))
}

$('document').ready(() => {
    load()
})