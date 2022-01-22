console.log("extension loaded");

function mainThread(tab) {
  console.log("here is your tab id", tab.id);
  
  const GAME_CANVAS_SELECTOR = "#root > div > div > div.Layout > div > div";
  function maximizeGameCanvas() {
    console.log("starting maximizing");
    const gameCanvas = document.querySelector(GAME_CANVAS_SELECTOR);
    console.log("here is game canvas", gameCanvas);
    gameCanvas.requestFullscreen();
  }

  maximizeGameCanvas();
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: mainThread,
    args: [tab],
  });
});
