const mainContainer=document.querySelector(".main-container");
const thanks=document.querySelector(".thankyou");

const submitBtn=document.getElementById("submit");
const rateAgain=document.getElementById("rate");
const rates=document.querySelectorAll(".btn");
const rating=document.getElementById("rating")

submitBtn.addEventListener("click",()=>{
thanks.classList.remove("hidden")
mainContainer.style.display="none"
})

rateAgain.addEventListener("click",()=>{
  thanks.classList.add("hidden")
  mainContainer.style.display="block"
  })

rates.forEach((rate)=>{
  rate.addEventListener("click",()=>{
   rating.innerHTML=rate.innerHTML
  })
})