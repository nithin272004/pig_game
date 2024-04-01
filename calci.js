const amount=document.querySelector(".amount");
const from=document.querySelector(".from");
const to=document.querySelector(".to");
const body=document.querySelector("body");
const button=document.querySelector("button");
const result=document.querySelector(".result p");
const input=document.querySelector('.from');
const input2=document.querySelector(".to")
const theme=document.querySelector('.theme');
let results=0;
let amount1=0;
let from1=0
let to1=0;
const a="btc";
button.addEventListener('click',function(){
    button.style.backgroundcolor='black';
    amount1=Number(amount.value);
    from1=(from.value);
    to1=(to.value);
    getdata(from1,to1,amount1);
     
});

const getdata=async function(fromc,toc,amt){
    const res=await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-02/v1/currencies/${fromc}.json`);
    const data=await res.json();
    results=amt*data[fromc][toc]; 
    result.textContent=`${amount1} ${from1}=${results} ${to1}`;
        console.log(amount1,from1,to1,results);      
}
const alldata= async function(){
    const ress=await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-02/v1/currencies/btc.json`);
    const dataa=await ress.json();
    const dataa1=dataa.btc;
     const arr=Object.keys(dataa1);
     arr.forEach(ele=>{
        const html=`
        <option value=${ele}>${ele}</option>`
        input.insertAdjacentHTML('beforeend',html);
        input2.insertAdjacentHTML('beforeend',html);
     })

     console.log(arr);
    
}
alldata();
let themenum=0;
theme.addEventListener('click',function(){
    if(themenum==0){
    body.style.background="#225733";

    themenum=1;
    }
    else{
        body.style.background="white"; 
        themenum=0; 
    }

})
