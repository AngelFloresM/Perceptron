// Seleccionando elementos en el DOM
const workSpace = document.querySelector(".workspace")
const initiateWeights = document.querySelector(".weights")
const startBtn = document.querySelector(".start")
const redoBtn = document.querySelector(".redo")
const lerRateTextField = document.querySelector("#learningRate")
const max_iter = document.querySelector("#max_iter")
const messageArea = document.querySelector("#message")

// Listener al canvas
workSpace.addEventListener("contextmenu", e => e.preventDefault())

// Listener para limpiar canvas
redoBtn.addEventListener("click", () => {
  points = []
  neuron = null
  initializeEverything()
})
// Listener generar pesos
initiateWeights.addEventListener("click", () => {
  neuron = new Perceptron()
  initializeEverything()
})

// Listener iniciar perceptron
startBtn.addEventListener("click", () => {
  if (lerRateTextField.value == "") {
    displayErrorMessage("Campo 'Learning Rate' no puede estar vacio")
  }
  if (max_iter.value == "") {
    displayErrorMessage("Campo 'Iteraciones Máximas' no puede estar vacio")
	}
	if(!neuron){
		displayErrorMessage("No se han creado los pesos")
	}
  initiate = true
  canvas.frameRate(5)
})
