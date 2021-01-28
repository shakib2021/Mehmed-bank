

var loginBtn=document.getElementById("btn");
// var draw=document.getElementById("dollar2");
// var balance=document.getElementById("dollar3");
////
loginBtn.addEventListener("click",function(){
var loginArea=document.getElementById("Area");
var email=document.getElementById("no");
var pass=document.getElementById("pass");
var evalue=email.value;
var password=pass.value;
   
var transaArea=document.getElementById("transaction-area");

if(evalue.length<10  ){
    alert("plz give valid email")
    loginArea.style.display="block";
    
    
}
if(password.length<10){
    alert("plz give valid password")
    loginArea.style.display="block";
}
else{
    loginArea.style.display="none";
     transaArea.style.display="block"
}
});

/////////this is for deposit
var depositbtn=document.getElementById("depoBtn");

depositbtn.addEventListener("click",function(){
 
    var inputDeposit =getInput("deposit");

     addAmount("currentDeposit",inputDeposit);
      addAmount("currentBalance",inputDeposit);



});
var withDrawBtn=document.getElementById("addWithDraw");
withDrawBtn.addEventListener("click",function(){
   
        
    var inputWithdraw =getInput("withAmount");
    addAmount ("currentWithdraw",inputWithdraw);
    if( addAmount("currentBalance",-1*inputWithdraw)<=1){
    alert("you have no money");

    }
    else{
        addAmount ("currentBalance",-1*inputWithdraw);

    }
      




  })

////
function addAmount(id,catchMoney){
   var spanId=document.getElementById(id).innerText;
   var spanIdToNumber=parseFloat(spanId);
   var spanNumber=spanIdToNumber;
   var totalAmount=spanNumber+catchMoney;
    document.getElementById(id).innerText=totalAmount;
     

}
function getInput(id){
   var catchValue=document.getElementById(id).value;
   var transferValueToNumber=parseFloat(catchValue);
//    document.getElementById(id).value=""
    return transferValueToNumber;

}







