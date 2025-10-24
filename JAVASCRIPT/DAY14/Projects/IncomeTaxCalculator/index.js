const form =document.querySelector('form');
form.addEventListener('submit', (e)=>{
    const income= document.querySelector('#income');
    const amount=parseInt(income.value);
    const result =document.querySelector('h2');
    let totalTax=0;
    if(amount<1200000){
        totalTax=0;
    }else if(amount<=1600000){
        totalTax= (amount-120000)*0.15;
    }else if(amount<=2000000){
        totalTax= (40000*0.15) + (amount-160000)*0.20;
    }else if(amount<=2400000){
        totalTax= (40000*0.15) + (40000*0.20) + (amount-200000)*0.25;
    }else{
        totalTax= (40000*0.15) + (40000*0.20) + (40000*0.25) + (amount-240000)*0.30;
    }
    result.textContent=`The total income tax is: ₹${totalTax.toFixed(2)}`;
    e.preventDefault();
    form.reset();


})
