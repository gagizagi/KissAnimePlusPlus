var vid = document.getElementById("my_video_1_html5_api") || false,
    currentPath = window.location.pathname,
    remVolume = getCookie('kissanimestfu'),
    remTime = getCookie('kissanimegoon');

//Refreshes volume cookie if it exists
if(remVolume != '') makeCookie('kissanimestfu', remVolume);

//Configures video to remembered values
if(vid){
    if(remVolume == '') vid.volume = 0.1;
    else vid.volume = remVolume;
    if(remTime != ''){
        vid.currentTime = remTime;
        vid.pause();
    }
}

//Sets a cookie with current time when user stops watching
window.onbeforeunload = function(){
    makeCookie('kissanimegoon', vid.currentTime, currentPath);
};

//Sets a cookie with new volume any time volume is changed
vid.onvolumechange = function(){
    makeCookie('kissanimestfu', vid.volume);
};

//Function that takes cookie name and returns cookie value
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function makeCookie(cname, cvalue, cpath){
    var cookieMaker = '',
        path = cpath || '/',
        name = cname + '=' + cvalue,
        now = new Date(); 
    var time = now.getTime();
    var expireTime = time + (30*24*60*60*1000);//30 day cookie
    now.setTime(expireTime);
    
    cookieMaker += name + '; ';
    cookieMaker += 'expires=' + now.toGMTString() + '; ';
    cookieMaker += 'path=' + path;
    document.cookie = cookieMaker;
}