const container = document.querySelector('.container');
container.style.margin = '100px';
container.style.align = 'center'; 
const start = document.createElement('button');
const yellow = document.createElement('button');
const magenta= document.createElement('button');
const pink= document.createElement('button');
const lightblue = document.createElement('button');
const eraser = document.createElement('button');
yellow.style.backgroundColor = 'yellow';
magenta.style.backgroundColor = 'magenta';
pink.style.backgroundColor = 'pink';
lightblue.style.backgroundColor = 'lightblue';
eraser.style.backgroundColor = 'white';
eraser.textContent = 'eraser';
lightblue.textContent = 'lightblue';
pink.textContent = 'pink';
yellow.textContent = 'yellow';
magenta.textContent = 'magenta';
start.style.textAlign = 'center';
start.textContent = 'Lets get this show on the road!';
container.appendChild(start);
container.appendChild(yellow);
container.appendChild(magenta);
container.appendChild(pink);
container.appendChild(lightblue);
container.appendChild(eraser);
yellow.style.margin = '20px';
magenta.style.margin = '20px';
lightblue.style.margin = '20px';
pink.style.margin = '20px';
eraser.style.margin = '20px';
let size = 0;
let color = 'pink';
yellow.addEventListener('click', ()=> {
    color = 'yellow'
})
magenta.addEventListener('click', ()=> {
    color = 'magenta'
})
lightblue.addEventListener('click', ()=> {
    color = 'lightblue'
})
pink.addEventListener('click', ()=> {
    color = 'pink'
})
eraser.addEventListener('click', ()=> {
    color = 'white';
})
start.addEventListener('click', ()=> {
    size = prompt("How many squares would you like");
    createGrid(size);
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
    grid.addEventListener('mouseover' ,() => {
        console.log('hello');
        grid.style.backgroundColor = color;
    })
});
})
function createGrid(size){
    for(i = 0;i < size;i++){
        const row = document.createElement('div');
        row.style.margin = '-10px';
        container.appendChild(row);
       for(j = 0;j < size;j++){
            const grid = document.createElement('div');
            grid.className = 'grid'
            let x = 960/size
            grid.style.width = `${x}px`;
            grid.style.display = 'inline';
            grid.style.height = `${x}px`;
            grid.style.margin = '0px';
            grid.style.backgroundColor = 'white';
            grid.style.display = 'inline-block'
            grid.style.border = '0px solid pink';
            row.appendChild(grid);
       }
    }
}
