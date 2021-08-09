var box=document.getElementById("box");

var viewWidth=window.innerWidth;
var viewHeight=window.innerHeight;

//updates the viewport height and width dynamically
window.addEventListener('resize', function(event){
    viewWidth=window.innerWidth;
    viewHeight=window.innerHeigth;
});

box.addEventListener("mouseover", function(event){
    var boxAttr=box.getBoundingClientRect();  //variablename.getBoundingClientRect()

    var pos=getNewPosition(boxAttr.width,boxAttr.height)
    box.style.top=pos.y+"px";
    box.style.left=pos.x+"px";
})

function getNewPosition(boxWidth,boxHeigth){
    //the boxwidth and boxheigth are subtracted so that they would not move out from the rigth and bottom direction 
    var newX= Math.floor((Math.random()*viewWidth)+1 - boxWidth);
    var newY=Math.floor((Math.random()*viewWidth)+1 - boxHeigth);

    // these will satisfy that box does not move go out in the top and left direction
    if(newX<0){
        newX=0;
    }
    if(newY<0){
        newY=0;
    }

    return{x:newX , y:newY}
}