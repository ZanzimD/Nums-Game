window.alert("banana!");

var numc = 0;
var tent = 0;
var numesc = 0;

function recag(){numc = parseInt(Math.random() * 100); 
    console.log(numc)}

    function numcheck(){var numesc = document.getElementById("numesc").value
    if(numesc > 100 || numesc <1) {alert("Né assim não caba"); return;} 
    
    if (numesc > numc) {tent++; alert("que isso véi bota menos🚨");}
    else if (numesc < numc) {tent++; alert("mais jow");}
    else {alert("Parabens fi é o: " + numc + " mermo. Usas-te " +tent+ " tentativas")}
}
    recag();
    

//--na noite de sexta fiz a anotação da variavel (bat-diário) e descobri que: se dentro da funcão = (function(){}) for
// criada uma variável, ela não se torna "universal" no VS Code, o programa não à identifica fora da função.
