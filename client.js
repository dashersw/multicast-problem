var dgram = require('dgram');

var socket = dgram.createSocket({type: 'udp4', reuseAddr: true});

socket.bind('12345', '0.0.0.0', function() {
    console.log('bound on 0.0.0.0:12345');

    socket.addMembership('239.1.1.1');

    var msg = new Buffer('hello!');

    setInterval(function() {
        console.log('sending', msg.toString());
        socket.send(msg, 0, msg.length, '12345', '239.1.1.1');
    }, 1000);
});


