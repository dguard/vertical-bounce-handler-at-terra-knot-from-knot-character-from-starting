// keep

// use bottom-statement

// keep !

// use #vertical-bounce-handler-at-pencil-from-knot
// use bottom-statement

// it is very hard to use "const"

// use bottom-statement

// it should be const in ctx knot in definition

(function() {
    let passThrough = {}
    // keep

    // const Pencil = window['@pencil/draft-compact-knot-cubic']['Pencil']
    // const DraftFabrikk = window['@pencil/draft-compact-knot-cubic']['DraftFabrikk']

    // keep !
    let passThroughFromBottom = {}
    passThroughFromBottom['@pencil/draft-knot-cubic'] = {}
    // keep

    passThrough['@pencil/draft-knot-cubic'] = function (spawnedPointerBelongings, passThroughKnot) {

let canvas = document.querySelector('.statement-area').querySelector('.statement-at-front').querySelector('#scene')

let ctx = canvas.getContext('2d')
// keep !
// canvas.width = canvas.clientWidth
// canvas.height = canvas.clientHeight
//
// if(window.devicePixelRatio > 1) {
//     canvas.width = canvas.clientWidth * 2
//     canvas.height = canvas.clientHeight * 2
//
//     ctx.scale(2, 2)
// }

// use #sticked-album-in-queued-sequence
// use compact
width = canvas.width
height = canvas.height

let FIELD_OF_VIEW = width * 0.8
let PROJECTION_CENTER_Y = height * 0.5
let PROJECTION_CENTER_X = width * 0.5

// use #vertical-bounce-handler-in-relative-size
// let draftFabrikk = new DraftFabrikk()

// use #sticked-album-in-queued-sequence
// follow #vertical-bounce-handler-isometric-from-bottom-projection-above-knot-at-draft-fabric-constructed

// keep !


// keep !
// keep
let calc = function(expression) {
    return expression
}

let fromProjectionCenter = function(args) {
    // keep
    let [y,x] = args
    return [
        y + PROJECTION_CENTER_Y,
        x + PROJECTION_CENTER_X + 50
    ]
}

let fromCtx = function(ctx) {

  return {
      moveTo: function(y, x) {
          return ctx.moveTo(x, y)
      },
      lineTo: function(y, x) {
          return ctx.lineTo(x, y)
      },

      // keep
      arcTo: function(y1, x1, y2, x2, radius) {
          return ctx.arcTo(x1, y1, x2, y2, radius)
      },
      ellipse: function(y, x, yRadius, xRadois, rotation, startAngle, endAngle) {
          return ctx.ellipse(x, y, xRadois, yRadius, rotation, startAngle, endAngle)
      }

  }
}

// keep !
let throughStacking = function(fromY) {
  // keep
  // calc(fromY /* keep */ + 20)
  return fromY
}


// keep
let constructKnot = function(knotSample) {

  ctx.beginPath()

  let [y0, x0] = [knotSample.fromBottomLeft.fromY, knotSample.fromBottomLeft.fromX]
  let [yFromBottomRight, xFromBottomRight] = [knotSample.fromBottomRight.fromY, knotSample.fromBottomRight.fromX]

  fromCtx(ctx).moveTo(throughStacking(y0), x0)
  fromCtx(ctx).lineTo(throughStacking(yFromBottomRight), xFromBottomRight)

  let [yFromTopRight, xFromTopRight] = [throughStacking(knotSample.fromTopRight.fromY), knotSample.fromTopRight.fromX]

  fromCtx(ctx).moveTo(throughStacking(yFromBottomRight), xFromBottomRight)
  fromCtx(ctx).lineTo(throughStacking(yFromTopRight), xFromTopRight)

  let [yFromTopLeft, xFromTopLeft] = [throughStacking(knotSample.fromTopLeft.fromY), knotSample.fromTopLeft.fromX]

  fromCtx(ctx).moveTo(throughStacking(yFromTopRight), xFromTopRight)
  fromCtx(ctx).lineTo(throughStacking(yFromTopLeft), xFromTopLeft)

  // keep
  fromCtx(ctx).moveTo(throughStacking(yFromTopLeft), xFromTopLeft)
  fromCtx(ctx).lineTo(throughStacking(y0), x0)

  ctx.stroke()
}
// keep !


let computeFurtherKnotFromPointer = function(knotFurtherAnother, pointerStartingFrom) {
  let knotWi = knotFurtherAnother.fromBottomRight.fromX - knotFurtherAnother.fromBottomLeft.fromX
  let profileFromBottom = knotFurtherAnother.fromBottomLeft.fromY - knotFurtherAnother.fromBottomRight.fromY

  let profile = knotFurtherAnother.fromBottomLeft.fromY - knotFurtherAnother.fromTopLeft.fromY

  let [y0FromStructdKnot, x0FromStructdKnot] = [pointerStartingFrom.fromY, pointerStartingFrom.fromX]
  let [yFromBottomRight, xFromBottomRight] = [pointerStartingFrom.fromY - profileFromBottom, pointerStartingFrom.fromX + knotWi]

  let [yFromTopRight, xFromTopRight] = [pointerStartingFrom.fromY - profileFromBottom - profile, pointerStartingFrom.fromX + knotWi]
  let [yFromTopLeft, xFromTopLeft] = [pointerStartingFrom.fromY - profile, pointerStartingFrom.fromX]


  let pointerBelongings

  return {
    compute: function() {
      // keep
      pointerBelongings = {
        fromTopLeft: {fromY: yFromTopLeft, fromX: xFromTopLeft},
        fromTopRight: {fromY: yFromTopRight, fromX: xFromTopRight},
        fromBottomRight: {fromY: yFromBottomRight, fromX: xFromBottomRight},
        fromBottomLeft: {fromY: y0FromStructdKnot, fromX: x0FromStructdKnot}
      }
    },
    getPointerBelongings: function() {
        return pointerBelongings
    }
  }
}

let furtherProfileKnotFromBottom = computeFurtherKnotFromPointer(pointerBelongingsFromFurtherKnot, pointerStartingFrom)
furtherProfileKnotFromBottom.compute()

let pointerBelongingsFromFurtherProfileKnot = furtherProfileKnotFromBottom.getPointerBelongings()
constructKnot(pointerBelongingsFromFurtherProfileKnot)
// keep

pointerBelongingsFromKnotFurther = pointerBelongingsFromFurtherProfileKnot

// keep !
// pointerBelongingsFromKnotFurtherStarting
while(pointerBelongingsFromKnotFurther.fromBottomRight.fromX < knotFrontClosing.fromBottomLeft.fromX) {
  // keep
  knotRest = pointerBelongingsFromKnotFurther
  pointerStartingFromFurther = {
    fromY: pointerBelongingsFromKnotFurther.fromBottomRight.fromY, 
    fromX: pointerBelongingsFromKnotFurther.fromBottomRight.fromX
  }
  // keep !

  // keep
  knotFurhter = computeFurtherKnotFromPointer(knotRest, pointerStartingFromFurther)
  knotFurhter.compute()
  
  pointerBelongingsFromKnotFurther = knotFurhter.getPointerBelongings()
  constructKnot(pointerBelongingsFromKnotFurther)

  // keep !

  // keep !
  // knotRest = pointerBelongingsFromKnotFurther
  // knotRemaining = pointerBelongingsFromKnotFurther = {
  //   fromY: pointerBelongingsFromKnotFurther.fromBottomRight.fromY, 
  //   fromX: pointerBelongingsFromKnotFurther.fromBottomRight.fromX
  // }
  // keep !
}

// keep !
knotRest = pointerBelongingsFromKnotFurther
pointerStartingFromFurther = {
fromY: pointerBelongingsFromKnotFurther.fromBottomRight.fromY, 
fromX: pointerBelongingsFromKnotFurther.fromBottomRight.fromX
}
// keep !

// keep
knotFurhter = computeFurtherKnotFromPointer(knotRest, pointerStartingFromFurther)
knotFurhter.compute()

pointerBelongingsFromKnotFurther = knotFurhter.getPointerBelongings()
constructKnot(pointerBelongingsFromKnotFurther)

}
// keep
window['@pencil/draft-knot-cubic'] = {
    passThrough: passThrough['@pencil/draft-knot-cubic'],
    passThroughFromBottom: passThroughFromBottom['@pencil/draft-knot-cubic']
}
// keep


})()
// don't stay here
// use #vertical-bounce-handler