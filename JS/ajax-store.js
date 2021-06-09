function getStore(){
    $.ajax('data/inventory.json',{
        type: "GET"
    }).done(function(data) {
        console.log(data)
    })
}

$()

