var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"

// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

// Step 2: drawSquare and drawCircle functions
// square drawing code here
function drawSquare(x, y, size, color) {
  var newSquare = document.createElementNS(namespace, "rect")
  newSquare.setAttribute("fill", color)
  newSquare.setAttribute("width", size)
  newSquare.setAttribute("height", size)
  newSquare.setAttribute("x", x)
  newSquare.setAttribute("y", y)
  screen.appendChild(newSquare)

}

// circle drawing code here
function drawCircle(x, y, size, color) {
  var newCircle = document.createElementNS(namespace, "circle")
  newCircle.setAttribute("fill", color)
  newCircle.setAttribute("r", size)
  newCircle.setAttribute("cx", x)
  newCircle.setAttribute("cy", y)
  screen.appendChild(newCircle)

}

// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
  var pt = transformPoint(e)
  // what do you want to do when the user presses down
  // on the mouse button?
})

document.addEventListener("mouseup", function(e) {
  var pt = transformPoint(e)
})
  // what do you want to do when the user presses down
  // on the mouse button?
  // step 4 mousemove event
 //1
document.addEventListener("mousemove", function (e) {
  var pt = transformPoint(e)
  var xpos = pt.x
  var ypos = pt.y
  //2
  var shapeSelect = document.getElementById("shapeSelect").value
  var colorSelect = document.getElementById("colorSelect").value
  var sizeSelect = document.getElementById("sizeSelect").value
  //3
  if (shapeSelect == "square") {
    drawSquare(pt.x,pt.y, sizeSelect,colorSelect)
  }
  else if (shapeSelect == "circle" ) {
    drawCircle(pt.x,pt.y,sizeSelect, colorSelect)
  }
})
