const popClass=document.querySelector(".pop-")
 

const pop=document.getElementById("pop")

const cancel=document.getElementById("cancel-")

 

window.onload = function () {
  var backgroundImg=[
    // "https://demo.shadow-themes.com/wp/ashade/wp-content/uploads/2020/01/06.jpg",
    "https://demo.shadow-themes.com/wp/ashade/wp-content/uploads/2020/01/bg-home01.jpg",
    // "https://demo.shadow-themes.com/wp/ashade/wp-content/uploads/2020/01/05.jpg",
    "https://demo.shadow-themes.com/wp/ashade/wp-content/uploads/2020/01/01.jpg",
    // "https://demo.shadow-themes.com/wp/ashade/wp-content/uploads/2020/01/02.jpg"
    
  ]
  
  setInterval(changeImage, 2000);
  function changeImage() {   
    var i = Math.floor((Math.random() * 2));
    
    document.body.style.backgroundImage = "url('"+backgroundImg[i]+"')";
    
  }
}


pop.addEventListener("click",()=>{
  popClass.style.display="block"
})


cancel.addEventListener("click",()=>{
  popClass.style.display="none"
 
})