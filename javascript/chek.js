// document.getElementById('Complete-btn').addEventListener('click',function(event){
//     event.preventDefault();
    
//    const amount = document.getElementById('amount').innerText;
//    const convertedAmound = parseFloat(amount);

//    const sum = convertedAmound + 1;
//    document.getElementById('amount').innerText = sum;
   

    

// })

let addCount = 0;
let subtractCount = 0;

function Complete1() {
    addCount += 1;
    document.getElementById("Complete11").textContent = addCount;
}

function Complete1() {
    subtractCount -= 1;
    document.getElementById("Complete1").textContent = subtractCount;
}


function changeBackground() {
    // Randomly generate a background color
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FFFF33", "#FF33FF", "#33FFFF"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}


function closePage() {
    document.getElementById("text").innerHTML = "";
}
