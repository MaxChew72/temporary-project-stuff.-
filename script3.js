function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 3.129753736417666 , lng: 101.59581621196189},
        zoom: 13,
        mapId: 'dd123f1509656232'
      });       
}
var data = <?php echo json_encode("42", JSON_HEX_TAG); ?>; // Don't forget the extra semicolon!
// 3.0437318334217314, 101.64207130064379 <-- Petaling, zoom=18
// 3.129753736417666, 101.59581621196189 <-- Petaling Jaya, zoom=13
