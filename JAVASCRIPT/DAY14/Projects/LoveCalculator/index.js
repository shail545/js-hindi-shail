const form=document.querySelector('form');
form.addEventListener('submit',(e)=>{
    const boy=document.getElementById('boy');
    const girl=document.getElementById('girl');
    const l1= boy.value.length;
    const l2= girl.value.length;
    const result=Math.pow((l1+l2),3)%101;
    document.querySelector('h2').textContent=`Love Percentage is ${result}%`;
    e.preventDefault();
    form.reset();


})