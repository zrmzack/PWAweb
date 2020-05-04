const video = document.getElementById('video');

function hasGetUserMedia() {
    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
}


function startup() {
    if (hasGetUserMedia()) {
        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: true
        }).then(stream => {
            video.srcObject = stream;
        }).catch(console.error)
    }
}

window.addEventListener('load', startup, false);