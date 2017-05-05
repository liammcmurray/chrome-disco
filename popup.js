// my stuff

document.getElementById("badURL").onkeydown= function (e) {
  if (e.keyCode == 13) {
    outboundLink = document.getElementsByName("badURL")[0].value;;
    encodedLink = outboundLink.split('&URL=')[1];
    realLink = decodeURIComponent(encodedLink);
    chrome.tabs.create({ url: realLink });
  }
}
