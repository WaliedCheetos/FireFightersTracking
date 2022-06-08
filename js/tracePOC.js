        /**
 * Create markers
 */
         function createMarkers(map, venuesProvider) {
            // create SVG Dom Icon
              var svg = `<svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" width="10px" height="10px">
                <circle cx="5" cy="5" r="4" fill="rgb(250, 127, 0)" stroke-width="1" stroke="black" opacity="1"/>
                </svg>`,

                 svgAnimatedPerson = '<svg id="mePin" xmlns="http://www.w3.org/2000/svg" width="27.3" height="29.4" viewBox="0 0 43.3 42.4"><path class="ring_outer" fill="#878787" d="M28.6 23c6.1 1.4 10.4 4.4 10.4 8 0 4.7-7.7 8.6-17.3 8.6-9.6 0-17.4-3.9-17.4-8.6 0-3.5 4.2-6.5 10.3-7.9.7-.1-.4-1.5-1.3-1.3C5.5 23.4 0 27.2 0 31.7c0 6 9.7 10.7 21.7 10.7s21.6-4.8 21.6-10.7c0-4.6-5.7-8.4-13.7-10-.8-.2-1.8 1.2-1 1.4z"/><path class="ring_inner" fill="#5F5F5F" d="M27 25.8c2 .7 3.3 1.8 3.3 3 0 2.2-3.7 3.9-8.3 3.9-4.6 0-8.3-1.7-8.3-3.8 0-1 .8-1.9 2.2-2.6.6-.3-.3-2-1-1.6-2.8 1-4.6 2.7-4.6 4.6 0 3.2 5.1 5.7 11.4 5.7 6.2 0 11.3-2.5 11.3-5.7 0-2-2.1-3.9-5.4-5-.7-.1-1.2 1.3-.7 1.5z"/><path class="mePin" d="M21.6 8.1a4 4 0 0 0 4-4 4 4 0 0 0-4-4.1 4.1 4.1 0 0 0-4.1 4 4 4 0 0 0 4 4.1zm4.9 8v-3.7c0-1.2-.6-2.2-1.7-2.6-1-.4-1.9-.6-2.8-.6h-.9c-1 0-2 .2-2.8.6-1.2.4-1.8 1.4-1.8 2.6V16c0 .9 0 2 .2 2.8.2.8.8 1.5 1 2.3l.2.3.4 1 .1.8.2.7.6 3.6c-.6.3-.9.7-.9 1.2 0 .9 1.4 1.7 3.2 1.7 1.8 0 3.2-.8 3.2-1.7 0-.5-.3-.9-.8-1.2l.6-3.6.1-.7.2-.8.3-1 .1-.3c.3-.8 1-1.5 1.1-2.3.2-.8.2-2 .2-2.8z" fill="#282828"/></svg>',

                domIcon = new H.map.DomIcon(svgAnimatedPerson),
                markers = [];
                // array of initial positions of 40 markers
            
            var fireFighter01_locs = [[25.2045635, 55.3754857],
            [25.2045572, 55.3755063],
            [25.2045486, 55.3755306],
            [25.2045476, 55.3755479],
            [25.2045461, 55.3755565],
            [25.2045304, 55.3755548],
            [25.2045078, 55.3755503],
            [25.2044976, 55.3755596],
            [25.2044901, 55.3755759],
            [25.2044713, 55.3755679],
             [25.2044581, 55.3755838],
             [25.2044393, 55.3755854],
             [25.2044077, 55.3755805],
             [25.2043973, 55.3755997],
             [25.204405, 55.3756138],
             [25.2044013, 55.3755946],
             [25.2043926, 55.3755649],
             [25.2043919, 55.3755396],
             [25.204393, 55.3755081],
             [25.2043942, 55.37548],
             [25.2043898, 55.3754658],
             [25.2043939, 55.3754426],
             [25.2043773, 55.3754622],
             [25.2043579, 55.3754578],
             [25.204328, 55.3754487],
             [25.2043162, 55.3754406],
             [25.2043059, 55.375458],
             [25.2042828, 55.3754791],
             [25.2042946, 55.3755116],
             [25.2043095, 55.3755195],
             [25.2043126, 55.3754763],
             [25.2042748, 55.375463],
             [25.204247, 55.3754549],
             [25.204231, 55.3754397],
             [25.2042024, 55.375454],
             [25.2042265, 55.3754585],
             [25.2042402, 55.3754422],
             [25.2042581, 55.3754567],
             [25.2042792, 55.3754619],
             [25.2042972, 55.3754719],
             [25.2043142, 55.3754747],
             [25.2043378, 55.3754562],
             [25.2043762, 55.3754619],
             [25.2043961, 55.3754514],
             [25.2044086, 55.3754238],
             [25.2044354, 55.3754226],
             [25.2044649, 55.3754242],
             [25.2044786, 55.375463],
             [25.2044745, 55.3754921],
             [25.2044738, 55.3755333],
             [25.204491, 55.3755642],
             [25.2045104, 55.3755566],
             [25.2045387, 55.3755532],
             [25.2045609, 55.3755336],
             [25.2045532, 55.3755091],
             [25.2045458, 55.3755131],
             [25.2045458, 55.3755203],
             [25.2045564, 55.3755118],
             [25.2045669, 55.3755042]];
            
             var fireFighter01 = [fireFighter01_locs[0]];
                
             // create markers
                fireFighter01.forEach(function(pos) {
                  markers.push(new H.map.DomMarker({lat: pos[0], lng: pos[1]}, {
                    icon: domIcon
                  }));
                });
            
                // add markers to map
                map.addObjects(markers);
            
                        //logic to add map object (marker) to the current active venue
                        venuesProvider.activeVenue.setMapObjects(
                            markers,
                      venuesProvider.activeVenue.getActiveLevelIndex(),
                      venuesProvider.activeVenue.getActiveDrawing()
                    );  
                // randomly update all markers positions in intervals
                setTimeout(updateMarkerPositions, 500);
                setInterval(updateMarkerPositions, 2500);
            
                var index = 0;
            
                /**
                 * update all markers' positions with animation using the ease function
                 */
                function updateMarkerPositions() {
                    if (index >= fireFighter01_locs.length) {
                        return;
                    } else {
                        index++;
                    }
            
                    
                  markers.forEach(function(marker) {
                    // get random position 0 - 450km from map's center in random direction
                    
                    let nextPoint = {lat: fireFighter01_locs[index][0], lng: fireFighter01_locs[index][1]};
            
                    // update marker's position within ease function callback
                    ease(
                      marker.getGeometry(),
                      nextPoint,
                      4000,
                      function(coord) {
                        marker.setGeometry(coord);
                      }
                    )
                  })
                }
            }
            

            function createMarkers2(map, venuesProvider){
              try {
              

                 // create SVG Dom Icon
              var svg = `<svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" width="10px" height="10px">
              <circle cx="5" cy="5" r="4" fill="rgb(250, 127, 0)" stroke-width="1" stroke="black" opacity="1"/>
              </svg>`,

               svgAnimatedPerson = '<svg id="mePin" xmlns="http://www.w3.org/2000/svg" width="27.3" height="29.4" viewBox="0 0 43.3 42.4"><path class="ring_outer" fill="#878787" d="M28.6 23c6.1 1.4 10.4 4.4 10.4 8 0 4.7-7.7 8.6-17.3 8.6-9.6 0-17.4-3.9-17.4-8.6 0-3.5 4.2-6.5 10.3-7.9.7-.1-.4-1.5-1.3-1.3C5.5 23.4 0 27.2 0 31.7c0 6 9.7 10.7 21.7 10.7s21.6-4.8 21.6-10.7c0-4.6-5.7-8.4-13.7-10-.8-.2-1.8 1.2-1 1.4z"/><path class="ring_inner" fill="#5F5F5F" d="M27 25.8c2 .7 3.3 1.8 3.3 3 0 2.2-3.7 3.9-8.3 3.9-4.6 0-8.3-1.7-8.3-3.8 0-1 .8-1.9 2.2-2.6.6-.3-.3-2-1-1.6-2.8 1-4.6 2.7-4.6 4.6 0 3.2 5.1 5.7 11.4 5.7 6.2 0 11.3-2.5 11.3-5.7 0-2-2.1-3.9-5.4-5-.7-.1-1.2 1.3-.7 1.5z"/><path class="mePin" d="M21.6 8.1a4 4 0 0 0 4-4 4 4 0 0 0-4-4.1 4.1 4.1 0 0 0-4.1 4 4 4 0 0 0 4 4.1zm4.9 8v-3.7c0-1.2-.6-2.2-1.7-2.6-1-.4-1.9-.6-2.8-.6h-.9c-1 0-2 .2-2.8.6-1.2.4-1.8 1.4-1.8 2.6V16c0 .9 0 2 .2 2.8.2.8.8 1.5 1 2.3l.2.3.4 1 .1.8.2.7.6 3.6c-.6.3-.9.7-.9 1.2 0 .9 1.4 1.7 3.2 1.7 1.8 0 3.2-.8 3.2-1.7 0-.5-.3-.9-.8-1.2l.6-3.6.1-.7.2-.8.3-1 .1-.3c.3-.8 1-1.5 1.1-2.3.2-.8.2-2 .2-2.8z" fill="#282828"/></svg>',

              domIcon = new H.map.DomIcon(svgAnimatedPerson),
              markers = [];
              // array of initial positions of 40 markers
          
              var fireFighter02_locs = [[25.2045596, 55.3755039],
              [25.2045607, 55.3755145],
              [25.2045378, 55.3755276],
              [25.204549, 55.3755517],
              [25.2045371, 55.3755555],
              [25.2045071, 55.3755576],
              [25.2044955, 55.3755517],
              [25.2044796, 55.3755471],
              [25.2044657, 55.3755141],
              [25.2044713, 55.3754958],
               [25.2044733, 55.3754587],
               [25.2044733, 55.3754587],
               [25.204476, 55.375433],
               [25.204463, 55.3754253],
               [25.2044386, 55.3754256],
               [25.2044272, 55.3754216],
               [25.2044049, 55.3754227],
               [25.2043942, 55.3754227],
               [25.2043959, 55.3754383],
               [25.2043956, 55.375463],
               [25.2043801, 55.3754628],
               [25.2043672, 55.3754588],
               [25.2043512, 55.3754582],
               [25.2043336, 55.3754395],
               [25.204317, 55.3754325],
               [25.2043127, 55.3754192],
               [25.2043123, 55.3753914],
               [25.2042987, 55.3753828],
               [25.2042961, 55.3754001],
               [25.2043146, 55.3754029],
               [25.2043134, 55.3754208],
               [25.2043162, 55.3754441],
               [25.2043024, 55.3754669],
               [25.2042904, 55.3754667],
               [25.2042632, 55.3754664],
               [25.204251, 55.3754632],
               [25.2042408, 55.3754414],
               [25.204233, 55.3754324],
               [25.2042469, 55.375453],
               [25.2042542, 55.3754611],
               [25.2042818, 55.3754667],
               [25.2043057, 55.375465],
               [25.2043307, 55.3754901],
               [25.204356, 55.3754592],
               [25.2043747, 55.375461],
               [25.204393, 55.3754703],
               [25.2043956, 55.3755059],
               [25.2043924, 55.3755592],
               [25.2043992, 55.3755796],
               [25.2044268, 55.3755796],
               [25.2044525, 55.3755815],
               [25.2044703, 55.3755746],
               [25.2044874, 55.3755594],
               [25.2045034, 55.3755717],
               [25.2045091, 55.3755506],
               [25.2045293, 55.3755538],
               [25.2045461, 55.3755533],
               [25.2045551, 55.3755362],
               [25.2045659, 55.3755117],
               [25.2045545, 55.3755066],
               [25.2045405, 55.3754779],
               [25.204563, 55.3754752]];

           var fireFighter02 = [fireFighter02_locs[0]];
              
           // create markers
              fireFighter02.forEach(function(pos) {
                markers.push(new H.map.DomMarker({lat: pos[0], lng: pos[1]}, {
                  icon: domIcon
                }));
              });
          
              // add markers to map
              map.addObjects(markers);
          
                      //logic to add map object (marker) to the current active venue
                      venuesProvider.activeVenue.setMapObjects(
                          markers,
                    venuesProvider.activeVenue.getActiveLevelIndex(),
                    venuesProvider.activeVenue.getActiveDrawing()
                  );  
              // randomly update all markers positions in intervals
              setTimeout(updateMarkerPositions, 500);
              setInterval(updateMarkerPositions, 2500);
          
              var index = 0;
          
              /**
               * update all markers' positions with animation using the ease function
               */
              function updateMarkerPositions() {
                  if (index >= fireFighter02_locs.length) {
                      return;
                  } else {
                      index++;
                  }
          
                  
                markers.forEach(function(marker) {
                  // get random position 0 - 450km from map's center in random direction
                  
                  let nextPoint = {lat: fireFighter02_locs[index][0], lng: fireFighter02_locs[index][1]};
          
                  // update marker's position within ease function callback
                  ease(
                    marker.getGeometry(),
                    nextPoint,
                    4000,
                    function(coord) {
                      marker.setGeometry(coord);
                    }
                  )
                })
              }
              } catch (error) {
                console.log(`WaliedCheetos - ERROR : ${error}`);
              }
            }
            /**
             * Ease function
             * @param   {H.geo.IPoint} startCoord   start geo coordinate
             * @param   {H.geo.IPoint} endCoord     end geo coordinate
             * @param   number durationMs           duration of animation between start & end coordinates
             * @param   function onStep             callback executed each step
             * @param   function onStep             callback executed at the end
             */
            function ease(
              startCoord = {lat: 0, lng: 0},
              endCoord = {lat: 1, lng: 1},
              durationMs = 200,
              onStep = console.log,
              onComplete = function() {},
            ) {
              var raf = window.requestAnimationFrame || function(f) {window.setTimeout(f, 16)},
                  stepCount = durationMs / 16,
                  valueIncrementLat = (endCoord.lat - startCoord.lat) / stepCount,
                  valueIncrementLng = (endCoord.lng - startCoord.lng) / stepCount,
                  sinValueIncrement = Math.PI / stepCount,
                  currentValueLat = startCoord.lat,
                  currentValueLng = startCoord.lng,
                  currentSinValue = 0;
            
              function step() {
                currentSinValue += sinValueIncrement;
                currentValueLat += valueIncrementLat * (Math.sin(currentSinValue) ** 2) * 2;
                currentValueLng += valueIncrementLng * (Math.sin(currentSinValue) ** 2) * 2;
            
                if (currentSinValue < Math.PI) {
                  onStep({lat: currentValueLat, lng: currentValueLng});
                  raf(step);
                } else {
                  onStep(endCoord);
                  onComplete();
                }
              }
            
              raf(step);
            }



            var arr = [];
            /**
 * An event listener is added to listen to tap events on the map.
 * Clicking on the map displays an alert box containing the latitude and longitude
 * of the location pressed.
 * @param  {H.Map} map      A HERE Map instance within the application
 */
 function setUpMapClickListener(map) {

try{

            // Attach an event listener to map display
            // obtain the coordinates and display in an alert box.
            map.addEventListener('tap', function (evt) {
                var coord = map.screenToGeo(evt.currentPointer.viewportX, evt.currentPointer.viewportY);


                  arr.push([Math.abs(coord.lat.toFixed(7)),
                     Math.abs(coord.lng.toFixed(7))]);

console.log (arr);

            });
          } catch (error) {
    console.error(error);
  }
}
            