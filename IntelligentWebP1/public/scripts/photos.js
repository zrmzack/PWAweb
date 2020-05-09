function hasGetUserMedia() {
    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
}


function startup() {
    const video = document.getElementById('video'),
        canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        photo = document.getElementById('photo');
    if (hasGetUserMedia()) {
        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: true
        }).then(stream => {
            video.srcObject = stream;
        }).catch(console.error)
    }
}

function getphoto() {
    const video = document.getElementById('video'),
        canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        photo = document.getElementById('photo');
    context.drawImage(video, 0, 0, 200, 100)
    // photo.src = (canvas.toDataURL('image/png'))
    document.getElementById("img4_url").value = '<img src="' +canvas.toDataURL('image/png') + '"alt=""/>'
    // alert(canvas.toDataURL('image/png'))
}

// document.getElementById('capture').addEventListener('click', function () {
//
// })

//window.addEventListener('load', startup, false);