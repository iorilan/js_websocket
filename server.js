const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
	console.log("broadcasting to everyone...");
	 wss.clients.forEach(function each(client) {
      if (//client !== ws && 
	  client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
	console.log("broadcasting done...");
    });
  });

  ws.send('something');
});