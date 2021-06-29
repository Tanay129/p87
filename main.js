var canvas=new fabric.Canvas(myCanvas);
var playerX=10;
var playerY=10;
var blockWidth=30;
var blockHeight=30;
var playerObject="";

function player(){
    fabric.Image.fromURL("dream_player.png", function(Img){
        playerObject=Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(playerObject);
    });


}

function newImg(getImg){
    fabric.Image.fromURL(getImg, function(Img){
        blockObject=Img;
        blockObject.scaleToWidth(blockWidth);
        blockObject.scaleToHeight(blockHeight);
        blockObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(blockObject);
    });


}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){


if(keypressed=='38'){
     up();
}

if(keypressed=='40'){
    down();
}

if(keypressed=='39'){
    right();
}

if(keypressed=='37'){
    left();
}

if(keypressed=='84'){
    newImg('9d39f8747d1bdb7290bb7d0e480971a7.png');
}

if(keypressed=='68'){
    newImg('dd5itsy-b75d7de1-1c6e-43b8-90c0-ace2a136c9cb.png');
}



if(keypressed=='67'){
    newImg('captain_america_mjolnir_13_by_dani0rions_dd6t0q9-fullview.png');
}



if(keypressed=='80'){
    newImg('dbiz6s1-d678ce2a-a5ce-4521-8a15-b67a38fca249.png');
}

if(keypressed=='77'){ newImg('dd5itsy-b75d7de1-1c6e-43b8-90c0-ace2a136c9cb.png');}            