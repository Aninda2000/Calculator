console.log("calculator project");
var buttons=document.getElementsByTagName("button");
var display=document.getElementById("screen");
var screenValue= '';

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        buttonText=this.innerHTML;
        console.log("clicked" ,buttonText);
        //handle 'x'
        if(buttonText=='x'){
            buttonText='*';
            screenValue+= buttonText;
            display.value =screenValue;
        }else if(buttonText=='C'){
            //we have to clear Screen
            screenValue= "";
            display.value =screenValue;
        }else if(buttonText=='='){
            //we have to evaluate
            screenValue=eval(screenValue)
            display.value=screenValue;
        }else{
            screenValue+= buttonText;
            display.value =screenValue;
        }
    });
}