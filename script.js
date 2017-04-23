var vid = document.getElementById("my_video_1_html5_api") || false;
var currentPath = window.location.pathname;

//Sets video settings to remembered values
if(vid){
    chrome.storage.sync.get('KissAnimePlusPlusVolume', function(storage){
        if(storage.KissAnimePlusPlusVolume) vid.volume = storage.KissAnimePlusPlusVolume;
        else vid.volume = 0.1;
    });

    chrome.storage.sync.get(currentPath, function(storage){
        if(storage[currentPath]) {
            vid.currentTime = storage[currentPath];
            vid.pause();
        }
    });
}

//Saves volume to chrome cloud storage
vid.onvolumechange = function(){
    chrome.storage.sync.set({'KissAnimePlusPlusVolume': vid.volume});
};

//Saves video time to chrome cloud storage when user closes/refreshes window
window.onbeforeunload = function(){
    var obj = {};
    obj[currentPath] = vid.currentTime;
    chrome.storage.sync.set(obj);
};
