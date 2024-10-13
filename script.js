let userMsgEl = document.getElementById("userMsg");

 let myImgOne = document.getElementById("img1");

 let myImgTwo = document.getElementById("img2");

 let myImgthree = document.getElementById("userWin");






  let heartOne = document.getElementById("h1");

 let heartTwo = document.getElementById("h2");

 let heartThree = document.getElementById("h3");

 let  gameOverEl = document.getElementById("gameOver");

  let countEl = document.getElementById("count");






// genrate random number

let ranDom = Math.ceil(Math.random()*10);

console.log(ranDom);
let result = 0;





function newGame(){

result = result +1;

countEl.textContent = result;

let userMsg  = parseInt(userMsgEl.value);

if(ranDom > userMsg && ranDom < userMsg){


 
}



else if(result === 1){
 
    heartThree.style.color = "black";


}


 if(ranDom > userMsg && ranDom < userMsg ){

}

else if(result === 2){

  heartTwo.style.color = "black";


}
if(ranDom === userMsg){

  myImgthree.style.display = "block";

  userMsgEl.style.display = "none";

myImgOne.style.display = "none";

myImgTwo.style.display = "none";

gameOverEl.style.display = "none";

heartOne.style.display = " none";

heartTwo.style.display = "none";

heartThree.style.display = "none";

countEl.style.display = "none"




}

else{
  
  if(result >2){


myImgthree.style.display = "none";

userMsgEl.style.display = "none";

myImgOne.style.display = "none";

myImgTwo.style.display = "none";

gameOverEl.style.display = "block";

heartOne.style.display = "none";

heartTwo.style.display = "none";

heartThree.style.display = "none";

countEl.style.display = "none";

  }

  }
}
 






function relodPage(){

  location.reload();
}