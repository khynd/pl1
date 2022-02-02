let map: google.maps.Map;

function initMap(): void{
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: new google.maps.LatLng(45.055155, -77.854767),
    // Made a mapID with google cloud platform-- remade Atlas style with lightened labels
    mapId: "2d5f156f4e4ca58f",
    zoom: 8,
  });


  const icons: Record<string, { icon: string }> = {
    date: {
      icon: "https://maps.google.com/mapfiles/ms/micons/ltblue-dot.png",
    },
    met: {
      icon: "http://maps.google.com/mapfiles/ms/micons/red-pushpin.png",
    },
    official: {
      icon: "http://maps.google.com/mapfiles/ms/micons/pink-pushpin.png",
    },
    school: {
      icon: "http://maps.google.com/mapfiles/ms/micons/homegardenbusiness.png",
    },
  };

  const features = [
    {
      position: new google.maps.LatLng(43.907,-77.2392),
      type: "met",
    },
    {
      position: new google.maps.LatLng(44.48128,-77.658782),
      type: "date",
    },
    {
      position: new google.maps.LatLng(44.521854,-77.714206),
      type: "date",
    },
    {
      position: new google.maps.LatLng(45.579765,-77.825874),
      type: "official",
    },
    {
      position: new google.maps.LatLng(43.838789,-77.155363),
      type: "date",
    },
    {
      position: new google.maps.LatLng(44.39166,-77.314451),
      type: "date",
    },
    {
      position: new google.maps.LatLng(44.272881,-77.345619),
      type: "date",
    },
    {
      position: new google.maps.LatLng(44.314093,-78.316577),
      type: "date",
    },
    {
      position: new google.maps.LatLng(44.341479,-78.741105),
      type: "school",
    },
    {
      position: new google.maps.LatLng(44.341847,-78.550774),
      type: "date",
    },
    {
      position: new google.maps.LatLng(44.148531,-77.588256),
      type: "date",
    },
    {
      position: new google.maps.LatLng(43.991581,-77.696531),
      type: "date",
    },
  ];

  // Create markers.
  for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map,
    });
  }
}

