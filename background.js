chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "download") {
        let i = 1;
        for (i < request.data.length; i++;){
            chrome.downloads.download({"url": request.data[i].src});
        };
        
        sendResponse("Done")
    } 
})