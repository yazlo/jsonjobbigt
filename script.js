$(document).ready(function() {

    $('#hattknapp').click(function() {
        console.log("hattknapp clickad");

       

        $.getJSON("bild.php", function(data) {
            console.log("bild klar");
            console.log(data);
            $('body').append(data);
            
        });

    });
$.getJSON("data.php", function(data) {
            console.log("getJSON klar");
            console.log(data);
            console.log(data.testing[0].namn);
            for (i = 0; i < 4; i++) {
                $('body').append(data.testing[i].namn + "<br>");
            }
            
        });

});