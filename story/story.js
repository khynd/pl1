let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 45.055155, lng: -77.854767 },
    zoom: 6,
  });
}
