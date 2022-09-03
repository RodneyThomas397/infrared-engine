function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function music() {
    document.getElementById('song').play();
}