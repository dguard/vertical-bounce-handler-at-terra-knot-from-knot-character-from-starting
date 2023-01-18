// keep


(function() {
	// keep Pencil
	// keep DraftFabrikk

	// keep 
	// follow @knot-locate-draftar-from-front

	let passThrough = {}
	// keep !
  let passThroughFromBottom = {}
  passThroughFromBottom['@pencil/draft-knot-cubic'] = {}
  // keep

  passThrough['@pencil/draft-sample-from-knot-locate'] = function (spawnedPointerBelongings, passThroughKnot) {
  	let canvas = document.querySelector('.statement-area').querySelector('.statement-at-front').querySelector('#scene')
  	let ctx = canvas.getContext('2d')

	  canvas.width = canvas.clientWidth
	  canvas.height = canvas.clientHeight

	  if(window.devicePixelRatio > 1) {
	      canvas.width = canvas.clientWidth * 2
	      canvas.height = canvas.clientHeight * 2

	      ctx.scale(2, 2)
	  }
	  

  	document.querySelector('.statement-at-front').querySelector('#scene').addEventListener('click', function(event){
			// let providedY = event.clientY
			// let providedX = event.clientX

			let providedY = event.layerY
			let providedX = event.layerX

	

			console.log({fromY: providedY, fromX: providedX})
		})
  }	

// keep
window['@pencil/draft-sample-from-knot-locate'] = {
    passThrough: passThrough['@pencil/draft-sample-from-knot-locate'],
    passThroughFromBottom: passThroughFromBottom['@pencil/draft-sample-from-knot-locate']
}
	
})()

// keep 
// please knot stay here