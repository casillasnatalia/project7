var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"
var drawing = false;



function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}


function drawSquare(x, y, size, color) {
  var newSquare = document.createElementNS(namespace, "rect")
  newSquare.setAttribute("fill", color)
  newSquare.setAttribute("width", size)
  newSquare.setAttribute("height", size)
  newSquare.setAttribute("x", x)
  newSquare.setAttribute("y", y)
  screen.appendChild(newSquare)

}



function drawCircle(x, y, size, color) {
  var newCircle = document.createElementNS(namespace, "circle")
  newCircle.setAttribute("fill", color)
  newCircle.setAttribute("r", size)
  newCircle.setAttribute("cx", x)
  newCircle.setAttribute("cy", y)
  screen.appendChild(newCircle)

}


document.addEventListener("mousedown", function(e) {
  var pt = transformPoint(e)
drawing = true;

})

document.addEventListener("mouseup", function(e) {
  var pt = transformPoint(e)
  drawing = false;
})


document.addEventListener("mousemove", function (e) {
  if(drawing == true) {
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
}
})
