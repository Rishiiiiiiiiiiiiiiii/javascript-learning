let timer = 60;
let score = 0;
let hval = 0;
let curs = 0

function cursormove(){
    const move = document.querySelector('#main');
   curs = document.querySelector('.cursor');
 move.addEventListener( 'mousemove', (movement) => {
  curs.style.top = movement.y + "px"
  curs.style.left = movement.x +"px"
  
 })
}
function incscore(){
    score += 10;
    document.querySelector('#scv').textContent = score;
}

function getHit() {
    hval = Math.floor(Math.random () * 10);
   document.querySelector('#hit').textContent = hval;
}

function makeBubble(){
let bubbl = ""; 

for(let i = 1; i <= 180; i++){
   let num = Math.floor(Math.random()*10);
     bubbl += ` <div class="bubble">${num}</div>`;
}
document.querySelector('.card2').innerHTML = bubbl;
}


function runtimer() {
    const game = setInterval(() => {
      if (timer>0) {
            timer--;
            document.querySelector('#time').textContent = timer;   
        }else{
           clearInterval(game);
           document.querySelector('.card2').textContent = ` Game over`;
        }
    },1000)
}

document.querySelector('.card2')
.addEventListener('click', (val) => {
    const clickednum  = Number(val.target.textContent);
    if (clickednum === hval) {
        incscore();
        makeBubble();
        getHit();
    }
})
runtimer();
makeBubble();
getHit();
cursormove();
