document.getElementById("tab1").addEventListener("click", tab1Clicked)
document.getElementById("tab2").addEventListener("click", tab2Clicked)
document.getElementById("tab3").addEventListener("click", tab3Clicked)
function tab1Clicked (){
  if (tab1Clicked){
 document.getElementById("div1").style.display="block"
 document.getElementById("div2").style.display="none"
 document.getElementById("div3").style.display="none"

  }
  }

function tab2Clicked (){   
if(tab2Clicked){
    document.getElementById("div2").style.display="block"  
    document.getElementById("div3").style.display="none"  
    document.getElementById("div1").style.display="none"  

}
}

function tab3Clicked(){
    if (tab3Clicked){
        document.getElementById("div3").style.display="block"
        document.getElementById("div2").style.display="none"
        document.getElementById("div1").style.display="none"

    }
    
}