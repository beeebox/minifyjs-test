var a = {
  b: {
    w: 'w',
    x: 'x',
    y: 'y'
  }  
}

var props = a.b
var c = {
  [props.w]: 1,
  [props.x]: 2,
  [props.y]: 3,
}

