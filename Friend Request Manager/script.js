var satatus=document.querySelector("h5");
var addFriend=document.querySelector("button#add");
var removeFriend=document.querySelector("button#add")

// var removeFriend=document.querySelector("button#remove");
var check=0;

addFriend.addEventListener("click",function(){
    if(check==0){
    satatus.innerHTML="Friends" 
    satatus.style.color="green" 
    removeFriend.innerHTML="Remove Friend" 
    check=1;
    removeFriend.style.backgroundColor="Grey" 
}else{
    satatus.innerHTML="Stranger"; 
    satatus.style.color="red" ;
    removeFriend.innerHTML="Add Friend";
    check=0;
    removeFriend.style.backgroundColor="cadetblue" 
}

})
// removeFriend.addEventListener("click",function(){
//     satatus.innerHTML="Strainger";
//     satatus.style.color="red";
// })