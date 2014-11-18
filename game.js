var player = {
items: [],
pickup: function (item) {
  this.items.push(item);
  }
 };


var interpret = function (input) {
  var cmd = input.trm().toLowerCase().split(' ');
    
  return cmd; 
};



var execute = function (cmd) {
  var action = cmd [0];
  var object = cmd[1];
  player[action](object);
  if (method) {
    method(object);
   } else{ 
        alert ('Invalid Action');
   }
};

var report = function () {


};


var gameStep = function () {



};

var input = document.querySelector ('input');
input.addEventListener ('keyup', function(event){
      if (event.keycode == 13) {
          var cmd = interpret (this.value);
          exectute (cmd);
          alert (player.items);
       }
});