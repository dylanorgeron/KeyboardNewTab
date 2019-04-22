const newLink = `
    <div class='link'>
        <div class='field'>
            <label>Text</label>
            <input class='text'>
        </div>
        <div class='field'>
            <label>Href</label>
            <input class='href'>
        </div>
        <div class='field'>
            <label>Shortcut</label>
            <input class='shortcut'>
        </div>
    </div>
    `

function addLink(){
    $('.link-list').append(newLink)
}

function openSettings(){
    $('#default').toggle()
    $('#manage').toggle()
}

function save(){
    let links = []
    $('.link').each(function(){
        const link = this
        const text = $('.text', link).val()
        const href = $('.href', link).val()
        const shortcut = $('.shortcut', link).val()
        links.push({text, href, shortcut})
    })
    console.log(JSON.stringify(links))
}