/*Creamos el evento en donde se activará un spinner de carga y tambien 
aparecerá una promesa que hará que en determinado tiempo aparezca el div de contacts en donde
estará el ajax*/
$("#buttonContacts").click(() =>{

    $("#spinner").html("<div id='spin' class='text-center'><div class='spinner-grow text-info' role='status'><span class='visually-hidden'>Loading...</span></div><div class='spinner-grow text-info' role='status'><span class='visually-hidden'>Loading...</span></div><div class='spinner-grow text-info' role='status'><span class='visually-hidden'>Loading...</span></div></div>");
    $("#spin").hide(3000);
    
    return new Promise ((aparecer) => {
        setTimeout(() => {
            aparecer($("#contacts").show());   
        }, 3500);
    });



    

});


//Creamos la función de ajax con su respectivo JSON
function apiContacts (){
    $.ajax({
        method: "GET",
        url: "js/people.json",
        success: function(info) {
            console.log(info);
            let max = 10;
            for (let data of info) {
                if (max > 0) {
                    $("#contacts").append(`
                            <div class="card card-body col-3">
                            <div id="card" class="card" style="width: 18rem;">
                                <img src="${data.imagen}" class="card-img-top" alt="...">
                                <div class="card-body">
                                <p class="card-text">${data.name} / Telefono de contacto: ${data.phone} / Email: ${data.email}</p>
                                </div>
                            </div>
                            </div>                            
                    `);
                    max--;
                } else {
                    break;
                }
            }
        },
        });  

}

//LLamamos a la función para que aparezca
apiContacts();