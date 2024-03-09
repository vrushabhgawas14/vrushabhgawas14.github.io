const dropDown = document.getElementById('dropDown');
let tempDiv = document.querySelector(".showclick");
let subUl = document.querySelector(".subUl");
let isOpen = false;

dropDown.addEventListener('click',()=>{
    if(!isOpen){
        // console.log("Drop down is open for you!");
        tempDiv.classList.add("toggle-dropDown");
        subUl.style.display = 'flex';
        subUl.style.flexDirection = 'column';
        subUl.style.position = 'absolute';
        subUl.style.top = '50%';
        subUl.style.left = '50%';
        subUl.style.transform = 'translateX(-50%)';
    }else{
        // console.log("Drop down is closed now");
        subUl.style.display = 'none';
        tempDiv.classList.remove("toggle-dropDown");
    }
    isOpen = (isOpen)? false : true;
});

// let timeout;
window.addEventListener('mousemove', function() {
    // console.log("I can feel the touch on screen");
    if(isOpen){
        setTimeout(vanish,50);
    }
});

function vanish(){
    subUl.style.display = 'none'
    tempDiv.classList.remove("toggle-dropDown");
    isOpen = false;
}

// function stopTimeout(timeout){
// 	clearTimeout(timeout);
// }