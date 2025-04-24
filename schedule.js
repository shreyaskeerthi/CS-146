function check(block){
    classes = document.getElementsByClassName(block)
    for(k = 0; k < classes.length; k++){
        if(classes[k].style.display == "none"){
            classes[k].style.display = "block"
        }
        else{
            classes[k].style.display = "none"
        }
    }
}

function changeColor(color, block){
    classes = document.getElementsByClassName(block)
    for(k = 0; k < classes.length; k++){
       classes[k].style.backgroundColor = color
    }
}