function drawMesh() {
  canvas.background(220)
  canvas.strokeWeight(1)
  canvas.stroke(200)
  for (let i = 0; i < 10; i++) {
    canvas.line(0, i * 50, canvas.width, i * 50)
    canvas.line(i * 50, 0, i * 50, canvas.height)
  }
  canvas.stroke(0)
  canvas.strokeWeight(2)
  canvas.line(0, canvas.height / 2, canvas.width, canvas.height / 2)
  canvas.line(canvas.width / 2, 0, canvas.width / 2, canvas.height)
}

// Check if a click is inside working canvas
function isInsideCanvas() {
  return (
    canvas.mouseX > 0 &&
    canvas.mouseX < canvas.width &&
    canvas.mouseY > 0 &&
    canvas.mouseY < canvas.height
  )
}

// Chunk to create and draw points
function addNewPoint() {
  let label
  let x1 = canvas.map(canvas.mouseX, 0, canvas.width, -1, 1)
  let x2 = canvas.map(canvas.mouseY, 0, canvas.height, 1, -1)
  if (!doesPointExists(x1, x2)) {
    if (done) {
      label = neuron.guess([1, x1, x2])
    } else {
      switch (canvas.mouseButton) {
        case canvas.LEFT:
          label = 0
          break
        case canvas.RIGHT:
          label = 1
          break
      }
    }
    points.push(new Point(x1, x2, label))
  }
}

function doesPointExists(x1, x2) {
  for (const point of points) {
    if (x1 === point.x1 && x2 === point.x2) return true
  }
  return false
}

function drawPoints() {
  canvas.strokeWeight(0)
  for (const point of points) {
    if (point.label) {
      canvas.fill(255, 0, 0)
    } else {
      canvas.fill(0)
    }
    let x1 = canvas.map(point.x1, -1, 1, 0, canvas.width)
    let x2 = canvas.map(point.x2, -1, 1, canvas.height, 0)
    canvas.circle(x1, x2, 10)
  }
}

// End points functions

function drawLine() {
  canvas.strokeWeight(2)
  canvas.stroke(43, 187, 206)
  canvas.line(
    canvas.map(-1, -1, 1, 0, canvas.width),
    canvas.map(neuron.guessY(-1), 1, -1, 0, canvas.height),
    canvas.map(1, -1, 1, 0, canvas.width),
    canvas.map(neuron.guessY(1), 1, -1, 0, canvas.height)
  )
}

function initializeEverything() {
  initiate = false
  done = false
  iter = 0
  err = 1
  errByIteration = []
  canvas.setup()
  canvas.frameRate(60)
  canvasError.setup()
  messageArea.innerHTML = ""
  messageArea.style.opacity = "0"
}

function drawError() {
  let rectPosition = canvasError.height / errByIteration.length
  errByIteration.forEach((elem, i) => {
    canvasError.fill(255)
    canvasError.rect(0, rectPosition * i, 20 * elem, rectPosition - 2)
    // canvasError.fill(0)
    canvasError.text(elem, 20 * elem + 10, rectPosition * i + rectPosition / 2)
  })
}

function displayErrorMessage(errMessage) {
  if (!messageArea.hasChildNodes()) {
    let element = document.createElement("p")
    element.setAttribute("id", "errMessage")
    let message = document.createTextNode(errMessage)
    element.appendChild(message)
    messageArea.appendChild(element)
    messageArea.style.opacity = "1"
  }
}
