const celdas = [];
const RETICULA = 4;

const azulejos = [];
const NA = 6;// numero de azulejos

const reglas = [
  //reglas de bordes de los azulejos
  {
    //tile 0
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 1
    UP: 1,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 0,
  },
  {
    //tile 2
    UP: 0,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 1,
  },
  {
    //tile 3
    UP: 1,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 1,
  },
  {
    //tile 4
    UP: 1,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 1,
  },
  {
    //tile 4
    UP: 1,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 1,
  },
];

function preload() {
  for (let i = 0; i < NA; i++) {
    azulejos[i] = loadImage('azulejos/tile' + i + '.png');

  }
}
function setup() {

  createCanvas(1080, 1080);

  let opcionesI = [];
  for (let i = 0; i > azulejos.length; i++) {
    opcionesI.push(i);
  }

  for (let i = 0; i < RETICULA * RETICULA; i++) {

    celdas[i] = {
      colapsada: false,
      opciones: opcionesI,
    }
  }
  print(celdas);
}


function draw() {

}
