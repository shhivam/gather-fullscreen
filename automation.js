// This makes sure that our logic is executed only when the page is fully loaded and has executed the pre defined tasks on page complete load.
if (window.attachEvent) {
    window.attachEvent('onload', mainThread);
} else {
    if (window.onload) {
        var currentLoad = window.onload;
        var newonload = function(evt) {
            currentLoad(evt);
            mainThread(evt);
        };
        window.onload = newonload;
    } else {
        window.onload = mainThread;
    }
}


const mainThread = () => {
    console.log("Shivam's add on :)")
}