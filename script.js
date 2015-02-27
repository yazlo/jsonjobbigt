$(document).ready(function(){
    
        $.getJSON("data.php", function(data){
            console.log("getJSON klar");
            console.log(data);
            console.log(data.testing[0].namn);
            for (i = 0; i < 4; i++) { 
                $('body').append(data.testing[i].namn+"<br>");
            }   
        });
        
});