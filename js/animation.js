$(document).ready(function(){
  var classes = ["tree", "mountain", "small-mountain", "greentree", "orangetree", "yellowtree", "lasttree"];

  populateElements();


  setInterval(generateRandomSequence, 55000);

  function generateRandomSequence(){           
      // shuffleArray(classes);
      populateElements();
      console.log('random');
      console.log(classes);
    };

    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
    function populateElements(){
      for(i=0;i<=classes.length;i++){
        $('#element'+i).addClass(classes[i]);
      }
    }  
});
