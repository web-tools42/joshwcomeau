 
function render() {
 
    bgCanvas.patternizer(
    {
      stripes : [ 
          {
              color: '#ff7e64',
              rotation: 45,
              opacity: 10,
              mode: 'normal',
              width: 50,
              gap: 40,
              offset: 0
          },
          {
              color: '#f6c4b9',
              rotation: 45,
              opacity: 50,
              mode: 'normal',
              width: 25,
              gap: 25,
              offset: 0
          }
      ],
      bg : '#FFE3DD'
      }


    );

 
}
 
 
function init() {
    // number of pixels of extra canvas drawn
    var buffer = 100;
 
    // if extra canvas size is less than the buffer amount
    if (bgCanvas.width - window.innerWidth < buffer ||
        bgCanvas.height - window.innerHeight < buffer) {
 
        // resize the canvas to window plus double the buffer
        bgCanvas.width = window.innerWidth + (buffer * 2);
        bgCanvas.height = window.innerHeight + (buffer * 2);
 
        render();
    }   
 
}

