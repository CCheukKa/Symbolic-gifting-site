const url = document.URL;
const video = document.getElementById('video');

const mediaOptions = {
    video: {
        cursor: 'always'
    },
    audio: false
}


startCapture(mediaOptions);

async function startCapture(displayMediaOptions) {
    let captureStream = null;

    try {
        captureStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
        timestampLog('Started capturing');
        console.log(captureStream);
        video.srcObject = captureStream;
        post(captureStream.id);
    } catch (err) {
        console.error("Error: " + err);
    }
    return captureStream;
}

function timestampLog(content) {
    let date = new Date();
    console.log(`${(date.getDate() + 100).toString().substring(1)}/${(date.getMonth() + 100).toString().substring(1)}/${date.getFullYear()} ${(date.getHours() + 100).toString().substring(1)}:${(date.getMinutes() + 100).toString().substring(1)}:${(date.getSeconds() + 100).toString().substring(1)}.${(date.getMilliseconds() + 1000).toString().substring(1)} | ${content}`);
    return;
}

function post(data) {
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(data));
}