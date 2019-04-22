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

function addLink(){
    $('.link-list').append(newLink())
}

function addSection(){
    $('.section-list').append(newSection())
}

function newSection(section){
    $('.section-list').append(`
        <div class='section'>
            <label>Section Title</label>
            <input class='section-title' />
            <br><br>
            <label>Section Links</label>
            <div class='section-links'>
            ${}
            </div>
        </div>`
    )
}

function openSettings(){
    $('#default').toggle()
    $('#manage').toggle()
}

function load(section){
    const data = JSON.parse(section.links)
    for(let i = 0; i < data.length; i++){
        const link = JSON.parse(data[i])
        $('#default').append(`<a class='link' href='${link.href}'>${link.text}</a>`)
        $('#manage').append(newLink(link))
    }
}

function save(){
    let data = []
    $('.link').each(function(){
        data.push(JSON.stringify({
            text: $('.text', this).val(),
            href: $('.href', this).val(),
            shortcut: $('.shortcut', this).val()
        }))
    })
    localStorage.setItem('data', JSON.stringify(data))
}

$('document').ready(() => {
    load()
})