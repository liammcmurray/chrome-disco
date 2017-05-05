// my stuff

document.getElementById("badURL").onkeydown= function connect2decoder(outboundLInk) {
    outboundLink = document.getElementsByName("badURL")[0].value;;
    encodedLink = outboundLink.split('&URL=')[1];
    realLink = decodeURIComponent(encodedLink);
    console.log (realLink);
}
