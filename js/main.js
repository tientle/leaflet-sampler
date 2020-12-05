var mymap = L.map('map').setView([42.359620, -71.045400], 13.26);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidGllbnRsZSIsImEiOiJja2lhZGpjMnUwNm94MnJzM2NwOHc0dXc4In0.uNK8EhTu-Q3k2VuUGhZndQ'
}).addTo(mymap);

let marker1 = L.marker([42.360222, -71.054802]).addTo(mymap); // quincy market
marker1.bindPopup("<b>Quincy Market</b><br>Filled with good food and good times. (And the best lobster macaroni and cheese in the world.)").openPopup();

let marker2 = L.marker([42.359169, -71.049538]).addTo(mymap); // new england aquarium
marker2.bindPopup("<b>New England Aquarium</b><br>The penguins were the star of the show.").openPopup();

let marker3 = L.marker([42.364281, -71.054382]).addTo(mymap); // mike's pastry
marker3.bindPopup("<b>Mike's Pastry</b><br>After a long day, there's nothing like a cannoli from Mike's!").openPopup();

let marker4 = L.marker([42.355980, -71.069221]).addTo(mymap); // boston public garden
marker4.bindPopup("<b>Boston Public Garden</b><br>A great place to walk around to take in the nature and city.").openPopup();
