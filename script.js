let payBtn = document.querySelector(".firstPage button");
let page1 = document.querySelector(".page1");
let page2 = document.querySelector(".page2");
let page3 = document.querySelector(".page3");
let page4 = document.querySelector(".page4");
let page5 = document.querySelector(".page5");
// -----------------First Page------------------------------
payBtn.addEventListener("click", () => {
  page1.style.display = "none";
  page2.style.display = "flex";
});
// ---------------------------------------------------------

// -----------------Second Page------------------------------
let proceedToAmountBtn = document.querySelector(".secondPage button");
let phoneNumber = document.querySelector(".secondPage input");

proceedToAmountBtn.addEventListener("click", () => {
  if (phoneNumber.value == "") {
    document.querySelector(".ErrorMsg").innerText="Enter your number"
    console.log("Enter the UPI number to pay");
  } else if (phoneNumber.value.length != 10) {
    console.log("Enter Correct Number");
    document.querySelector(".ErrorMsg").innerText="Enter Correct Number"
  } else {
    page2.style.display = "none";
    page3.style.display = "flex";
    number.innerText=`${phoneNumber.value}`

  }
});
// ----------------------------------------------------------

// -----------------Third Page------------------------------
let inputAmount = document.querySelector(".thirdPage input");
let proceedToPinBtn = document.querySelector(".thirdPage button");
let fourthPage = document.querySelector(".fourthPage");
let number=document.querySelector(".phoneNo");
let lastFour=document.querySelector(".lastFour")

proceedToPinBtn.addEventListener("click", () => {
  
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (inputAmount.value == 0 || inputAmount.value.length < 1) {
        reject("Enetr Amount");
      } else {
        resolve();
      }
      document.querySelector(".loading").style.display = "none";
    }, (Math.floor(Math.random() * 5) + 1) * 1000);
    document.querySelector(".loading").style.display = "block";
  });

  myPromise
  .then((msg)=>{
    // alert(msg)
    page3.style.display = "none";
    page4.style.display = "flex";
    lastFour.innerText=`${phoneNumber.value.slice(6)}`;
    document.querySelector(".entered_no").innerText=phoneNumber.value;
  })
  .catch((msg)=>{
    alert(msg)
  })
});
// ----------------------------------------------------------

// -----------------fourth Page------------------------------
let checkIcon=document.querySelector(".check-icon")
let finalPay = document.querySelector(".fourthPage button");
let password=document.querySelector("#pass")
finalPay.addEventListener("click", () => {
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password.value.length != 6) {
          reject("Wrong UPI PIN");
      } else {
        resolve();
      }
      document.querySelector(".loading").style.display = "none";
    }, (Math.floor(Math.random() * 5) + 1) * 1000);
    document.querySelector(".loading").style.display = "block";
  });

  myPromise
  .then((msg)=>{
    // alert(msg)
    page4.style.display = "none";
    page5.style.display = "flex";
    checkIcon.style.display="none";
    document.querySelector("audio").play();
  setTimeout(function () {
    checkIcon.style.display="block";
  }, 10);
  })
  .catch((msg)=>{
    alert(msg)
  })

});

let back=document.querySelector(".fa-arrow-left")
back.addEventListener("click",()=>{
  page5.style.display = "none";
  page1.style.display = "flex";
  phoneNumber.value="";
  inputAmount.value="";
  password.value="";
})