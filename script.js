function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 3.129753736417666 , lng: 101.59581621196189},
        zoom: 13,
        mapId: 'dd123f1509656232'
      });       
}
// 3.0437318334217314, 101.64207130064379 <-- Petaling, zoom=18
// 3.129753736417666, 101.59581621196189 <-- Petaling Jaya, zoom=13
function showLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var latlongvalue = position.coords.latitude + ","
    + position.coords.longitude;
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
    +latlongvalue+"&amp;zoom=14&amp;size=400x300&amp";key
    ="-AIzaSyA03W-kOdi5xsVGgh7VyQVcSmKq68hk6fI";
    document.getElementById("mapholder").innerHTML =
    "<img src='"+img_url+"'>";
 }
 function errorHandler(err) {
    if(err.code == 1) {
       alert("Error: Access is denied!");
    } else if( err.code == 2) {
       alert("Error: Position is unavailable!");
    }
 }
 function getLocation(){
    if(navigator.geolocation){
       // timeout at 60000 milliseconds (60 seconds)
       var options = {timeout:60000};
       navigator.geolocation.getCurrentPosition
       (showLocation, errorHandler, options);
    } else{
       alert("Sorry, browser does not support geolocation!");
    }
 }
