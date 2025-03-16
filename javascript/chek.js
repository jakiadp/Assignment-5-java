document.getElementById('Complete-btn').addEventListener('click',function(event){
    event.preventDefault();
    
   const amount = document.getElementById('amount').innerText;
   const convertedAmound = parseFloat(amount);

   const sum = convertedAmound + 1;
   document.getElementById('amount').innerText = sum;
   

    

})