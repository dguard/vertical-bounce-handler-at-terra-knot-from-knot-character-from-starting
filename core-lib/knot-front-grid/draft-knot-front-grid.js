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

    // const Pencil = window['@pencil/draft-compact-knot-front-grid']['Pencil']
    // const DraftFabrikk = window['@pencil/draft-compact-knot-front-grid']['DraftFabrikk']

    // keep !
    let passThroughFromBottom = {}
    passThroughFromBottom['@pencil/draft-knot-front-grid'] = {}
    // keep

    passThrough['@pencil/draft-knot-front-grid'] = function (spawnedPointerBelongings, passThroughKnot) {


    // keep !
    let canvas = document.querySelector('.statement-area').querySelector('.statement-at-front').querySelector('#scene')
    let ctx = canvas.getContext('2d')


    let PROJECTION_CENTER_Y = /* keep 250 */ 100
    let PROJECTION_CENTER_X = 100

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


// use #sticked-album-in-queued-sequence
// follow #vertical-bounce-handler-isometric-from-bottom-projection-above-knot-at-draft-fabric-constructed

// keep !


      let fromBottom = function(fromY) {
          return fromY /* keep */ + 400 + /* keep */ 200
      }

      let knotFromSampleProjection = {
        fromTopLeft: { fromY: 390, fromX: 733 },

        fromTopRight: { fromY: 389, fromX: 889 },
        
        fromBottomRight: { fromY: 470, fromX: 940 },
        
        fromBottomLeft: { fromY: 470, fromX: 784 }
        
        
      }

      let knotAnotherFromSampleProjection = {
        fromTopLeft: { fromY: 288, fromX: 703 },
        fromTopRight: { fromY: 293, fromX: 885 },
        fromBottomRight: { fromY: 353, fromX: 913 },
        fromBottomLeft: { fromY: 357, fromX: 742 }
        
      }

      let knotFromBottomFromSampleProjection = {
        fromTopLeft: { fromY: 529, fromX: 748 },

        fromTopRight: { fromY: 523, fromX: 922 },
        
        fromBottomRight: { fromY: 648, fromX: 966 },
        
        fromBottomLeft: { fromY: 637, fromX: 776 }
      }

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

      // keep
      constructKnot(knotFromSampleProjection)
      constructKnot(knotAnotherFromSampleProjection)

      // keep !
      constructKnot(knotFromBottomFromSampleProjection)


      let knotConstructionFromStarting = [
        { fromY: 383, fromX: 446 },

        { fromY: 519, fromX: 718 },
        
        { fromY: 726, fromX: 616 },
        
        { fromY: 635, fromX: 400 },
      ]

      let knotConstructionFromBottom = [
        { fromY: 719, fromX: 615 },
        { fromY: 586, fromX: 607 }
      ]

      let knotConstructionFromBottomAnother = [
        { fromY: 515, fromX: 719 },
        { fromY: 366, fromX: 720 }
      ]

      let knotConstructionThroughBottomStatement = [
        { fromY: 587, fromX: 607 },
        { fromY: 531, fromX: 413 }
      ]

      let knotConstructionThroughBottomStatementAnother = [
        { fromY: 366, fromX: 721 },
        { fromY: 271, fromX: 467 }
      ]

      let constructKnotSample = function(knotConstructionFromStarting) {
        // keep
        for(let k = 0; k < knotConstructionFromStarting.slice(1).length; k++) {
          fromCtx(ctx).moveTo(knotConstructionFromStarting[k].fromY, knotConstructionFromStarting[k].fromX)
          fromCtx(ctx).lineTo(knotConstructionFromStarting[k+1].fromY, knotConstructionFromStarting[k+1].fromX)
        }
        ctx.stroke()
      }

      let computeFurtherKnotFront = function(knotFrontStarting, knotFrontAnother) {

          let knotWi = knotFrontStarting.fromBottomRight.fromX - knotFrontStarting.fromBottomLeft.fromX
          let profile = knotFrontStarting.fromBottomLeft.fromY - knotFrontStarting.fromTopLeft.fromY

          let profileFromBottom = knotFrontStarting.fromBottomRight.fromY - knotFrontStarting.fromBottomLeft.fromY

          // diff

          let [y0FromFurhterKnot, x0FromFurtherKnot] = [knotFrontAnother.fromBottomRight.fromY, knotFrontAnother.fromBottomRight.fromX]
          let [yFromBottomRight, xFromBottomRight] = [calc(knotFrontAnother.fromBottomRight.fromY - profile), calc(knotFrontAnother.fromBottomRight.fromX + knotWi)]

          // keep yFromBottomRight - profile, xFromBottomRight
          let [yFromTopRight, xFromTopRight] = [yFromBottomRight - profile, xFromBottomRight]
          let [yFromTopLeft, xFromTopLeft] = [calc(knotFrontAnother.fromBottomRight.fromY - profile), knotFrontAnother.fromBottomRight.fromX]

          let pointerBelongings

          return {
            compute: function() {
              // keep
              pointerBelongings = {
                fromTopLeft: {fromY: yFromTopLeft, fromX: xFromTopLeft},
                fromTopRight: {fromY: yFromTopRight, fromX: xFromTopRight},
                fromBottomRight: {fromY: yFromBottomRight, fromX: xFromBottomRight},
                fromBottomLeft: {fromY: y0FromFurhterKnot, fromX: x0FromFurtherKnot}
              }
            },
            getPointerBelongings: function() {
                return pointerBelongings
            }
          }
      }


      let knotProfileStarting = {
        fromTopLeft: { fromY: 693, fromX: 619 },
        fromTopRight: { fromY: 674, fromX: 632 },
        fromBottomRight: { fromY: 689, fromX: 632 },
        fromBottomLeft: { fromY: 713, fromX: 622 }        
      }

      let knotFrontAnother = {
        fromTopLeft: { fromY: 655, fromX: 640 },
        fromTopRight: { fromY: 634, fromX: 653 },
        fromBottomRight: { fromY: 649, fromX: 652 },
        fromBottomLeft: { fromY: 673 + 4 + 4, fromX: 639 },
      }


      let knotFrontClosing = {
        fromTopLeft: { fromY: 520, fromX: 705 },
        fromTopRight: { fromY: 499, fromX: 718 },
        fromBottomRight: { fromY: 514, fromX: 719 },
        fromBottomLeft: { fromY: 538, fromX: 705 },
      }

      constructKnot(knotProfileStarting)
      constructKnot(knotFrontAnother)
      constructKnot(knotFrontClosing)


      constructKnotSample(knotConstructionFromStarting)
      constructKnotSample(knotConstructionFromBottom)
      
      constructKnotSample(knotConstructionFromBottomAnother)
      constructKnotSample(knotConstructionThroughBottomStatement)

      constructKnotSample(knotConstructionThroughBottomStatementAnother)


      // let knotFurhter = computeFurtherKnotFront(knotProfileStarting, knotFrontAnother)
      // knotFurhter.compute()

      // let pointerBelongingsFromKnotFurther = knotFurhter.getPointerBelongings()
      // constructKnot(pointerBelongingsFromKnotFurther)


      // let knotFurtherAnother = computeFurtherKnotFront(knotFrontAnother, pointerBelongingsFromKnotFurther)
      // knotFurtherAnother.compute()


      // let pointerBelongingsFromKnotFurtherAnother = knotFurtherAnother.getPointerBelongings()
      // constructKnot(pointerBelongingsFromKnotFurtherAnother)

      // let knotFurhterRemaining = computeFurtherKnotFront(pointerBelongingsFromKnotFurther, pointerBelongingsFromKnotFurtherAnother)
      // knotFurhterRemaining.compute()

      // let pointerBelongingsFromKnotFurtherRemaining = knotFurhterRemaining.getPointerBelongings()
      // constructKnot(pointerBelongingsFromKnotFurtherRemaining)


      let knotRest = knotProfileStarting
      let knotRemaining = knotFrontAnother

      knotFurhter = computeFurtherKnotFront(knotProfileStarting, knotFrontAnother)
      knotFurhter.compute()


      let pointerBelongingsFromKnotFurtherStarting = knotFurhter.getPointerBelongings()
      constructKnot(pointerBelongingsFromKnotFurtherStarting)

      // keep !
      let pointerBelongingsFromKnotFurther = pointerBelongingsFromKnotFurtherStarting

      // keep !
      // pointerBelongingsFromKnotFurtherStarting
      while(pointerBelongingsFromKnotFurther.fromBottomRight.fromX < knotFrontClosing.fromBottomLeft.fromX) {
          // keep
          knotRest = knotRemaining
          knotRemaining = pointerBelongingsFromKnotFurther
          // keep !

          // keep
          knotFurhter = computeFurtherKnotFront(knotRest, knotRemaining)
          knotFurhter.compute()
          
          pointerBelongingsFromKnotFurther = knotFurhter.getPointerBelongings()
          constructKnot(pointerBelongingsFromKnotFurther)

          // keep !
          knotRest = knotRemaining
          knotRemaining = pointerBelongingsFromKnotFurther
      }

      let computeFurhterProfileKnot = function(knotFrontStarting, knotProfileAnother) {
          // keep

          let knotWi = knotProfileAnother.fromBottomRight.fromX - knotProfileAnother.fromBottomLeft.fromX
          let profileFromBottom = knotProfileAnother.fromBottomRight.fromY - knotProfileAnother.fromBottomLeft.fromY

          let profile = knotProfileAnother.fromBottomLeft.fromY - knotProfileAnother.fromTopLeft.fromY


          let [y0FromProfileKnotFurhter, x0FromProfileKnotFurther] = [knotFrontStarting.fromTopLeft.fromY, knotFrontStarting.fromTopLeft.fromX]
          let [yFromBottomRight, xFromBottomRight] = [knotFrontStarting.fromTopRight.fromY, knotFrontStarting.fromTopRight.fromX]
          
          let [yFromTopRight, xFromTopRight] = [calc(knotFrontStarting.fromTopRight.fromY - profile), knotFrontStarting.fromTopRight.fromX]

          let [yFromTopLeft, xFromTopLeft] = [calc(knotFrontStarting.fromTopLeft.fromY - profile), knotFrontStarting.fromTopLeft.fromX]


          let pointerBelongings

          return {
            compute: function() {
              // keep
              pointerBelongings = {
                fromTopLeft: {fromY: yFromTopLeft, fromX: xFromTopLeft},
                fromTopRight: {fromY: yFromTopRight, fromX: xFromTopRight},
                fromBottomRight: {fromY: yFromBottomRight, fromX: xFromBottomRight},
                fromBottomLeft: {fromY: y0FromProfileKnotFurhter, fromX: x0FromProfileKnotFurther}
              }
            },
            getPointerBelongings: function() {
                return pointerBelongings
            }
          }
      }


      // another layer

      // keep
      knotFurhterAnother = computeFurtherKnotFront(knotFrontAnother, pointerBelongingsFromKnotFurtherStarting)
      knotFurhterAnother.compute()


      let pointerBelongingsFromKnotFurtherAnother = knotFurhterAnother.getPointerBelongings()
      constructKnot(pointerBelongingsFromKnotFurtherAnother)

      // // keep
      // let knotProfileFurther = computeFurhterProfileKnot(knotProfileStarting, pointerBelongingsFromKnotFurtherAnother)
      // knotProfileFurther.compute()

      // let pointerBelongingsFromKnotProfileFurther = knotProfileFurther.getPointerBelongings()
      // constructKnot(pointerBelongingsFromKnotProfileFurther)

      
      // // keep !
      // let knotProfileFurtherAnother = computeFurhterProfileKnot(knotFrontAnother, pointerBelongingsFromKnotFurtherAnother)
      // knotProfileFurtherAnother.compute()

      // let pointerBelongingsFromKnotProfileFurtherAnother = knotProfileFurtherAnother.getPointerBelongings()
      // constructKnot(pointerBelongingsFromKnotProfileFurtherAnother)
      // // keep !

      let structKnotFromAnotherKnot = function(knotFurhterAnother, knotFrontStarting) {
          let knotWi = knotFurhterAnother.fromBottomRight.fromX - knotFurhterAnother.fromBottomLeft.fromX
          let profileFromBottom = knotFurhterAnother.fromBottomLeft.fromY - knotFurhterAnother.fromBottomRight.fromY

          let profile = knotFurhterAnother.fromBottomLeft.fromY - knotFurhterAnother.fromTopLeft.fromY

          let [y0FromStructdKnot, x0FromStructdKnot] = [knotFrontStarting.fromBottomLeft.fromY, knotFrontStarting.fromBottomLeft.fromX]
          let [yFromBottomRight, xFromBottomRight] = [knotFrontStarting.fromBottomLeft.fromY - profileFromBottom, knotFrontStarting.fromBottomLeft.fromX + knotWi]

          let [yFromTopRight, xFromTopRight] = [knotFrontStarting.fromBottomLeft.fromY - profileFromBottom - profile, knotFrontStarting.fromBottomLeft.fromX + knotWi]
          let [yFromTopLeft, xFromTopLeft] = [knotFrontStarting.fromBottomLeft.fromY - profile, knotFrontStarting.fromBottomLeft.fromX]


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


      let knotFromAnotherKnot = structKnotFromAnotherKnot(pointerBelongingsFromKnotFurtherAnother, knotProfileStarting)
      knotFromAnotherKnot.compute()

      let pointerBelongingsFromStructdKnot = knotFromAnotherKnot.getPointerBelongings()
      constructKnot(pointerBelongingsFromStructdKnot)


      knotFromAnotherKnot = structKnotFromAnotherKnot(pointerBelongingsFromKnotFurtherAnother, knotFrontAnother)
      knotFromAnotherKnot.compute()

      pointerBelongingsFromStructdKnot = knotFromAnotherKnot.getPointerBelongings()
      constructKnot(pointerBelongingsFromStructdKnot)

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

      // keep from pointer starting from
      knotRest = pointerBelongingsFromKnotFurtherAnother

      let pointerStartingFrom = { fromY: 722, fromX: 614 }

      let pointerStartingFromFurther = pointerStartingFrom
      let furtherKnotFromPointer = computeFurtherKnotFromPointer(pointerBelongingsFromKnotFurtherAnother, pointerStartingFrom)
      furtherKnotFromPointer.compute()

      let pointerBelongingsFromFurtherKnot = furtherKnotFromPointer.getPointerBelongings()
      constructKnot(pointerBelongingsFromFurtherKnot)

      // keep !
      pointerBelongingsFromKnotFurther = pointerBelongingsFromKnotFurtherStarting

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
      // keep original !
      // let pointerStartingFrom = { fromY: 722, fromX: 614 }

      // keep !
      pointerStartingFrom = pointerBelongingsFromFurtherKnot.fromTopLeft

      pointerStartingFromFurther = pointerStartingFrom
      furtherKnotFromPointer = computeFurtherKnotFromPointer(pointerBelongingsFromKnotFurtherAnother, pointerStartingFrom)
      furtherKnotFromPointer.compute()

      pointerBelongingsFromFurtherKnot = furtherKnotFromPointer.getPointerBelongings()
      constructKnot(pointerBelongingsFromFurtherKnot)

 
      // keep !     
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

      let constructPointerBelongingsFromProfileKnot = function(profileKnot) {
          // keep !
          let pointerBelongingsThroughBottomStatement = { fromY: 587, fromX: 607 }
          
          let furtherProfileKnotFromBottom = computeFurtherKnotFromPointer(/* keep */ profileKnot, pointerStartingFrom)
          furtherProfileKnotFromBottom.compute()

          let pointerBelongingsFromFurtherProfileKnot = furtherProfileKnotFromBottom.getPointerBelongings()
          constructKnot(pointerBelongingsFromFurtherProfileKnot)
          // keep


          pointerBelongingsFromKnotFurther = pointerBelongingsFromFurtherProfileKnot

          // keep original !
          while(/* keep original */ pointerBelongingsThroughBottomStatement.fromY < pointerBelongingsFromKnotFurther.fromTopLeft.fromY) {
              // keep !
              pointerStartingFrom = pointerBelongingsFromFurtherProfileKnot.fromTopLeft

              let furtherProfileKnotFromBottom = computeFurtherKnotFromPointer(/* keep */ profileKnot, pointerStartingFrom)
              furtherProfileKnotFromBottom.compute()

              pointerBelongingsFromFurtherProfileKnot = furtherProfileKnotFromBottom.getPointerBelongings()
              constructKnot(pointerBelongingsFromFurtherProfileKnot)

              // keep !
              pointerBelongingsFromKnotFurther = pointerBelongingsFromFurtherProfileKnot
          }


          // keep !
          pointerBelongingsThroughBottomStatement = { fromY: 587, fromX: 607 }
          pointerStartingFrom = { fromY: 722, fromX: 614 }
          
          
          furtherProfileKnotFromBottom = computeFurtherKnotFromPointer(/* keep */ profileKnot, pointerStartingFrom)
          furtherProfileKnotFromBottom.compute()

          pointerBelongingsFromFurtherProfileKnot = furtherProfileKnotFromBottom.getPointerBelongings()
          constructKnot(pointerBelongingsFromFurtherProfileKnot)

          pointerBelongingsFromKnotFurther = pointerBelongingsFromFurtherProfileKnot
          // keep
          // alert("sample")

          while(/* keep original */ pointerBelongingsThroughBottomStatement.fromY < pointerBelongingsFromKnotFurther.fromTopLeft.fromY) {
              // keep !
              pointerStartingFrom = pointerBelongingsFromFurtherProfileKnot.fromTopLeft

              // alert(JSON.stringify({fromTopLeftFromKnot: pointerBelongingsFromKnotFurther.fromTopLeft.fromY, fromY: pointerBelongingsThroughBottomStatement.fromY}))

              let furtherProfileKnotFromBottom = computeFurtherKnotFromPointer(/* keep */ profileKnot, pointerStartingFrom)
              furtherProfileKnotFromBottom.compute()

              pointerBelongingsFromFurtherProfileKnot = furtherProfileKnotFromBottom.getPointerBelongings()
              constructKnot(pointerBelongingsFromFurtherProfileKnot)


              // keep !
              pointerBelongingsFromKnotFurther = pointerBelongingsFromFurtherProfileKnot


              // keep knot-front-row-from-grid
              knotRest = pointerBelongingsFromKnotFurther

              let frontPointerStartingFrom = pointerBelongingsFromKnotFurther.fromBottomRight

              let pointerStartingFromFurther = pointerStartingFrom
              let furtherKnotFromPointer = computeFurtherKnotFromPointer(pointerBelongingsFromKnotFurtherAnother, pointerStartingFrom)
              furtherKnotFromPointer.compute()

              let pointerBelongingsFromFurtherKnot = furtherKnotFromPointer.getPointerBelongings()
              constructKnot(pointerBelongingsFromFurtherKnot)

              // keep !
              pointerBelongingsFromKnotFurther = pointerBelongingsFromFurtherKnot

              // keep !
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
              }

              // keep closing !
              pointerStartingFromFurther = {
                fromY: pointerBelongingsFromKnotFurther.fromBottomRight.fromY, 
                fromX: pointerBelongingsFromKnotFurther.fromBottomRight.fromX
              }
              
              furtherKnotFromPointer = computeFurtherKnotFromPointer(pointerBelongingsFromKnotFurtherAnother, pointerStartingFromFurther)
              furtherKnotFromPointer.compute()

              pointerBelongingsFromFurtherKnot = furtherKnotFromPointer.getPointerBelongings()
              constructKnot(pointerBelongingsFromFurtherKnot)
              // keep !


              // keep !

              pointerBelongingsFromKnotFurther = pointerBelongingsFromFurtherProfileKnot
            }
      }


      let constructPointerBelongingsFromBottom = function() {
        knotRest = pointerBelongingsFromKnotFurtherAnother

        let pointerStartingFrom = { fromY: 722, fromX: 614 }

        let pointerStartingFromFurther = pointerStartingFrom
        let furtherKnotFromPointer = computeFurtherKnotFromPointer(pointerBelongingsFromKnotFurtherAnother, pointerStartingFrom)
        furtherKnotFromPointer.compute()

        let pointerBelongingsFromFurtherKnot = furtherKnotFromPointer.getPointerBelongings()
        constructKnot(pointerBelongingsFromFurtherKnot)

        // keep !
        pointerBelongingsFromKnotFurther = pointerBelongingsFromKnotFurtherStarting

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

            // keep !

            // keep !
            // knotRest = pointerBelongingsFromKnotFurther
            // knotRemaining = pointerBelongingsFromKnotFurther = {
            //   fromY: pointerBelongingsFromKnotFurther.fromBottomRight.fromY, 
            //   fromX: pointerBelongingsFromKnotFurther.fromBottomRight.fromX
            // }
            // keep !
        }
      }
      // keep !
      // constructPointerBelongingsFromProfileKnot(pointerBelongingsFromFurtherKnot)


}
// keep
window['@pencil/draft-knot-front-grid'] = {
    passThrough: passThrough['@pencil/draft-knot-front-grid'],
    passThroughFromBottom: passThroughFromBottom['@pencil/draft-knot-front-grid']
}
// keep


})()
// don't stay here
// use #vertical-bounce-handler