var cartao1="";
var cartao2="";
var cartoesvirados=0;
var numerojogadas=0;

const pathImageArray = ["./images/exercicio/porco.png", "./images/exercicio/girafa.png" , 
"./images/exercicio/pinguim.png", "./images/exercicio/urso.png" , "./images/exercicio/leao.png", 
"./images/exercicio/raposa.png" , "./images/exercicio/hipopotamo.png" , "./images/exercicio/rena.png"];

$(document).ready(function(){
    $("img").hide();
    distribuirValores();
});

function distribuirValores(){
    for (const pathImg of pathImageArray) {
        do{
            posicao=aleatorio();
            resultado=escreverValor(posicao,pathImg)
        }
        while (!resultado);

        do{
            posicao=aleatorio();
            resultado=escreverValor(posicao,pathImg)
        }
        while (!resultado);
    }
}

function aleatorio(){
    var aleatorio=Math.floor(Math.random()*16)+1
    return aleatorio
}

function escreverValor(posicao,pathImg){
    switch (posicao) {
        case 1:
            if($("#image1").attr("src") != undefined)
                return false;
            else
                $("#image1").attr("src", pathImg);
            return true;
        case 2:
            if($("#image2").attr("src") != undefined)
                return false;
            else
                $("#image2").attr("src", pathImg);
            return true;
        case 3:
            if($("#image3").attr("src") != undefined)
                return false;
            else
                $("#image3").attr("src", pathImg);
                return true;
        case 4:
            if($("#image4").attr("src") != undefined)
                return false;
            else
                $("#image4").attr("src", pathImg);
                return true;
        case 5:
            if($("#image5").attr("src") != undefined)
                return false;
            else
                $("#image5").attr("src", pathImg);
                return true;
        case 6:
            if($("#image6").attr("src") != undefined)
                return false;
            else
                $("#image6").attr("src", pathImg);
                return true;
        case 7:
            if($("#image7").attr("src") != undefined)
                return false;
            else
                $("#image7").attr("src", pathImg);
                return true;
        case 8:
            if($("#image8").attr("src") != undefined)
                return false;
            else
                $("#image8").attr("src", pathImg);
                return true;
        case 9:
            if($("#image9").attr("src") != undefined)
                return false;
            else
                $("#image9").attr("src", pathImg);
                return true;
        case 10:
            if($("#image10").attr("src") != undefined)
                return false;
            else
                $("#image10").attr("src", pathImg);
                return true;
        case 11:
            if($("#image11").attr("src") != undefined)
                return false;
            else
                $("#image11").attr("src", pathImg);
                return true;
        case 12:
            if($("#image12").attr("src") != undefined)
                return false;
            else
                $("#image12").attr("src", pathImg);
                return true;
        case 13:
            if($("#image13").attr("src") != undefined)
                return false;
            else
                $("#image13").attr("src", pathImg);
                return true;
        case 14:
            if($("#image14").attr("src") != undefined)
                return false;
            else
                $("#image14").attr("src", pathImg);
                return true;
        case 15:
            if($("#image15").attr("src") != undefined)
                return false;
            else
                $("#image15").attr("src", pathImg);
                return true;
        case 16:
            if($("#image16").attr("src") != undefined)
                return false;
            else
                $("#image16").attr("src", pathImg);
                return true;
    }
}

function escolherCartao(obj){
    $(obj).children().first().fadeIn(1000,function(){
        if(cartao1!=""){
            cartao2=obj;
            numerojogadas+=1;
        }
        else
        {
            cartao1=obj;
        }
        
        $("#numerojogadas").text("Jogadas efetuadas:"+numerojogadas);

        if(cartao1!=cartao2){
            if($(cartao1).children().first().attr("src") == $(cartao2).children().first().attr("src")){
                $(cartao1).fadeOut(1000);
                $(cartao2).fadeOut(1000);
                cartoesvirados+=2;
                cartao1="";
                cartao2="";
                if(cartoesvirados==16){
                    $("#ganhou").text("GANHOU!");
                }
            }
            else
            {
                if(cartao2!=""){
                    
                    $(cartao1).children().first().fadeOut(1000);
                    $(cartao2).children().first().fadeOut(1000);
                    cartao1="";
                    cartao2="";
                }
                
            }
        }
        else
        {
            $(cartao1).children().first().fadeOut(1000);
            cartao1="";
            cartao2="";
        }
    });
}

function jogaroutravez(){
    location.reload();
}