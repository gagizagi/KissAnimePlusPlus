var vid = document.getElementById("my_video_1_html5_api");

vid.onvolumechange = function(){
    var newVolume = vid.volume,
        now = new Date();
    
    var time = now.getTime();
    var expireTime = time + (30*24*60*60*1000);//30 day cookie
    now.setTime(expireTime);
    
    document.cookie="kissanimestfu=" + newVolume + "; expires=" + now.toGMTString() + ";path=/";
};

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

var remVolume = getCookie('kissanimestfu');

if(remVolume == ''){
    vid.volume = 0.1;
}else{
    vid.volume = remVolume;
}