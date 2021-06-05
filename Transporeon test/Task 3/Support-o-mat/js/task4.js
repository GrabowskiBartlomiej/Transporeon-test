window.addEventListener('yt-navigate-start', run,   true);

function run(){
    let link = window.location.href
    console.log(link)
    
    
    console.log(getVideoId(link))
    let videoId = getVideoId(link);
    console.log("cookie value =  " + getCookie("currentLink"))
    
    if(!(getCookie("currentLink") === videoId)){
        console.log("sprawdzam linki : " + (getCookie("currentLink") === link));
        console.log("siemano");
        setCookie("currentLink", videoId);
        let newLink = link.split("com").join("com.")
        console.log(newLink)
        window.location.replace(newLink);
    }
   
}

  
    
    











/*




if( chrome.storage.sync.get("currentLink") !== link){
    console.log("linki sa rozne")
    chrome.storage.sync.set({ currentLink });
    console.log("link ustawiony")
    if(link.includes("com.") === false) {
        console.log("link nie ma com.")
        window.location.replace(link.split("com").join("com."));    
        console.log("link zmienion")
    }
}

*/

function getVideoId(str) {
    str = str.split('=')[1];
    return str.split('&')[0];
}


function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";";
  }


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }