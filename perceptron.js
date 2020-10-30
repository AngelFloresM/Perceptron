// Variables Globales
let err = 1,
   errByIteration = [],
   points = [],
   neuron,
   initiate = false,
   done = false,
   iter = 0,
   scale = { x: [-2.6, 2.6], y: [2, -2] }

let sketchPlane = p => {
   p.setup = function () {
      p.createCanvas(800, 500)
      p.background(220)
      drawMesh()
   }

   p.draw = function () {
      p.background(220)
      drawMesh()
      if (neuron) {
         if (initiate) {
            p.background(220)
            drawMesh()
            if (err != 0) {
               err = 0
               iter++
               for (const p of points) {
                  neuron.train([p.x0, p.x1, p.x2], p.label)
                  if (iter >= max_iter.value) {
                     displayErrorMessage(
                        "Exedió el número de iteraciones máximas"
                     )
                     initiate = false
                  }
               }
               errByIteration.push(err)
            } else {
               drawError()
               initiate = false
               done = true
               p.frameRate(60)
            }
         }
         drawLine()
      }
      if (p.mouseIsPressed) {
         if (isInsideCanvas()) addNewPoint()
      } else {
         drawPoints()
      }
   }
}

let canvas = new p5(sketchPlane, document.querySelector("#canvas"))

let sketchError = p => {
   p.setup = function () {
      p.createCanvas(1100, 450)
      p.background(50)
   }
}

let canvasError = new p5(sketchError, document.querySelector("#error"))
