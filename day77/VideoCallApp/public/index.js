const socket = io('/');
const peer = new Peer();
peer.on('open', (id) => {
    socket.emit("newUser", id);
});

io.on('connection', (socket) => {
    socket.on("newUser", (id) => {
        socket.join('/');
        socket.to('/').broadcast.emit("userJoined", id);
    });
});

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then((stream) => {
    //some code

    //Client 1 will call client 2 
    socket.io("userJoined", id => {
        console.log('new user joined');

        //calling other client and sending our stream
        const call = peer.call(id, myVideoStream);
        const vid = document.createElement('video');
        call.on('error', (err) => {
            alert(err);
        })

        //taking the stream of the other client
        //when they will send it.
        call.on('stream', userStream => {
            //addVideo is a function which append the video of the client
            addVideo(vid, userStream);
        })
    })


    // how client 2 will respond to the client 1 call 

    peer.on('call', call => {
        //client 2 is answering the call and sending back their stream
        call.answer(stream);
        const vid = document.createElement('video');

        call.on('stream', userStream => {
            addVideo(vid, userStream);
        });
        call.on('error', (err) => {
            alert(err);
        });
    });
}).catch(err => {
    alert(err.message);
})