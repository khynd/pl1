let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    // Made a mapID with google cloud platform-- remade Atlas style with lightened labels
    mapId: "2d5f156f4e4ca58f",
    center: { lat: 45.055155, lng: -77.854767 },
    zoom: 8,
  });
}
