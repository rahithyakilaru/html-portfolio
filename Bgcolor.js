var ttlclrs= document.querySelectorAll(".color");
for (let i=0; i<ttlclrs.length;i++){
    ttlclrs[i].addEventListener("click",function(){
        var btn=this.classList[1];
        bcgndColor(btn);
    });
}
function bcgndColor(key){
    switch (key) {
        case "light-green":
            document.body.style.backgroundColor="rgb(149, 247, 149)";
            break;
            case "light-brown":
            document.body.style.backgroundColor="rgb(146, 76, 76)";
            break;
            case "light-blue":
            document.body.style.backgroundColor="rgb(119, 178, 241)";
            break;
            case "light-orange":
            document.body.style.backgroundColor="rgb(254, 181, 56)";
            break;
            case "light-white":
            document.body.style.backgroundColor="rgb(243, 231, 231)";
            break;
            case "light-black":
            document.body.style.backgroundColor="rgb(111, 108, 108)";
            break;
            case "light-violet":
            document.body.style.backgroundColor= "#3889db";
            break;

            case "light-yellow":
            document.body.style.backgroundColor="rgb(250, 246, 131)";
            break;
            case "light-red":
            document.body.style.backgroundColor="rgb(249, 69, 69)";
            break;
            case "light-pink":
            document.body.style.backgroundColor="rgb(247, 134, 195)";
            break;
            case "light-gold":
            document.body.style.backgroundColor="rgb(247, 227, 49)";
            break;
            case "light-purple":
            document.body.style.backgroundColor="rgb(215, 127, 250)";
            break;
        default:
            console.warn("Color class not recognized: " + key);
            break;
    }
}