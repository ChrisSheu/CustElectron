let ipcRenderer = require('electron').ipcRenderer;


let cust = document.querySelector("#custom");
cust.textContent = "Hellow Custom";

ipcRenderer.send('get_message');


ipcRenderer.on('ret get_message', function(even, ret){
	//cust.textContent = app.getAppPath();
	$("#custom").text(ret);
});