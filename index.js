// Your code here


//grabbing dodger id from the HTML 
const dodger = document.getElementById("dodger");


//move our dodger to left until it reaches 0px and stops
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  // assigns left arrow key to perform the event (event listner)
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  //move our dodger to right until it reaches 0px and stops
  function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);
  
    if (left <= 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  // event listener
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });