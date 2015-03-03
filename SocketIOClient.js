//========================================================
//============ SOCKET.IO CLIENT PORTION ==================
//========================================================

var socket = require('socket.io-client')('http://104.131.39.242:4000');

socket.on('connect', function(){

	console.log('Connection Established with Server');

});

socket.on('inputVals', function(data){
	console.log(data);
});

socket.on('disconnect', function(){
	console.log('Disconnected from Server');
});


//========================================================
//============== LINEREADER PORTION ======================
//========================================================

var readline = require('readline'); 

// create an interface to read lines from the Arduino:
var lineReader = readline.createInterface({
  input: process.stdin,	
  output: process.stdout,
  terminal: false
});

lineReader.on('line', function (data) {

	socket.emit('sensorChange', data);

	console.log('You sent: '+ data);

});