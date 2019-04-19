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
    //convert fields to object
    $('.links').forEach(el => {
        console.log(el)
    });
}