// Story.js
// Created by Kacy Hyndman for GEOM99, Fleming College
// Adapted from: https://github.com/googlemaps/js-samples/blob/main/samples/custom-markers/src/index.ts
// Last Updated: Feb 2, 2022

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(45.055155, -77.854767),
        // Made a mapID with google cloud platform-- adapted preexisting Atlas style with lightened labels
        mapId: "2d5f156f4e4ca58f",
        zoom: 8,
    });
    
    // Found links for icons using https://sites.google.com/site/gmapsdevelopment/
    var icons = {
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
            icon: "http://maps.google.com/mapfiles/kml/pal2/icon10.png",
        },
    };
    
    // Defining marker locations and selecting which marker to use
    var features = [
        {
            position: new google.maps.LatLng(43.907, -77.2392),
            type: "met",
        },
        {
            position: new google.maps.LatLng(44.48128, -77.658782),
            type: "date",
        },
        {
            position: new google.maps.LatLng(44.521854, -77.714206),
            type: "date",
        },
        {
            position: new google.maps.LatLng(45.579765, -77.825874),
            type: "official",
        },
        {
            position: new google.maps.LatLng(43.838789, -77.155363),
            type: "date",
        },
        {
            position: new google.maps.LatLng(44.39166, -77.314451),
            type: "date",
        },
        {
            position: new google.maps.LatLng(44.272881, -77.345619),
            type: "date",
        },
        {
            position: new google.maps.LatLng(44.314093, -78.316577),
            type: "date",
        },
        {
            position: new google.maps.LatLng(44.341479, -78.741105),
            type: "school",
        },
        {
            position: new google.maps.LatLng(44.341847, -78.550774),
            type: "date",
        },
        {
            position: new google.maps.LatLng(44.148531, -77.588256),
            type: "date",
        },
        {
            position: new google.maps.LatLng(43.991581, -77.696531),
            type: "date",
        },
    ];
    
    // Creating markers
    for (var i = 0; i < features.length; i++) {
        var marker = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            map: map,
        });
    }
}

