class Perceptron {
  constructor(n = 3) {
    this.w = []
    this.n = n
    for (let i = 0; i < n; i++) {
      this.w.push(Math.random())
    }
  }

  guess(inputs) {
    let sum = 0
    this.w.forEach((weight, i) => {
      sum += inputs[i] * weight
    })
    return sum >= 0 ? 1 : 0
  }

  train(inputs, target) {
    let guess = this.guess(inputs)
    let error = target - guess
    err += error
    if (error != 0) err++
    this.w.forEach((_, i) => {
      this.w[i] += error * inputs[i] * lerRateTextField.value
    })
  }

  guessY(x) {
    let m = this.w[1] / this.w[2]
    let b = this.w[0] / this.w[2]
    // console.log(m, b)
    return -m * x - b
  }
}

class Point {
  constructor(x1, x2, label) {
    this.x0 = 1
    this.x1 = x1
    this.x2 = x2

    this.label = label
  }
}
