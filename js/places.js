var mymap = L.map('mapA').setView([37.406308, -119.323020], 5.40);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidGllbnRsZSIsImEiOiJja2lhZGpjMnUwNm94MnJzM2NwOHc0dXc4In0.uNK8EhTu-Q3k2VuUGhZndQ'
}).addTo(mymap);

places =
[{"placeName":"University of California, Berkeley","desc":"Alex Morgan, a member of the very successful United States women's national soccer team.","lat":37.87161442,"long":-122.2601454},
{"placeName":"University of California, Davis","desc":"Hasan Minhaj, the host of Netflix's popular show Patriot Act.","lat":38.53800896,"long":-121.7617233},
{"placeName":"University of California, Irvine","desc":"Janet Nguyen, a California State Senator.","lat":33.64042372,"long":-117.8442533},
{"placeName":"University of California, Los Angeles","desc":"Taylor Wang, the first Chinese person to go to space.","lat":34.06886543,"long":-118.4450953},
{"placeName":"University of California, Merced","desc":"Shavone Charles, a musician featured on Forbes 30 Under 30. ","lat":37.36592875,"long":-120.4223106},
{"placeName":"University of California, Riverside","desc":"Jamie Chung, an actress featured in movies such as Big Hero 6 and Grown Ups.","lat":33.97385674,"long":-117.3279571},
{"placeName":"University of California, San Diego","desc":"Angela Davis, a political activist for civil rights. ","lat":32.88001533,"long":-117.2339277},
{"placeName":"University of California, Santa Barbara","desc":"Steve Aoki, an entertainer known for his work as a DJ and music producer. ","lat":34.41397173,"long":-119.8486895},
{"placeName":"University of California, Santa Cruz","desc":"Maya Rudolph, an actress known for her appearances on Saturday Night Live.","lat":36.98800743,"long":-122.0582415},
{"placeName":"California Institute of Technology","desc":"David Ho, a Taiwanese researcher who made significant contributions to understanding and treating HIV. ","lat":34.13753326,"long":-118.1252368},
{"placeName":"Scripps College","desc":"Gabby Giffords, a former US representative who survived an assasination attempt.","lat":34.10384663,"long":-117.7100243},
{"placeName":"Stanford University","desc":"Ellen Ochoa, the first Hispanic woman to go to space.","lat":37.42750004,"long":-122.1696332},
{"placeName":"University of Southern California","desc":"Eugene Lee Yang, a filmmaker a part of the internet group The Try Guys.","lat":34.02236077,"long":-118.2854389},
{"placeName":"Pomona College","desc":"Marianne Williamson, an author and politican with four New York Times #1 bestsellers. ","lat":34.09777716,"long":-117.7119803},
{"placeName":"Pitzer College","desc":"Eli Erlick, an activist and director of Trans Student Educational Resources.","lat":34.10424804,"long":-117.7054738},
{"placeName":"Harvey Mudd College","desc":"George Nelson, a retired NASA astronaut. ","lat":34.1060817,"long":-117.7088148},
{"placeName":"Occidental College","desc":"Barack Obama, former US president.","lat":34.12724763,"long":-118.2100071},
{"placeName":"California State University, Monterey Bay","desc":"Jane Kim, an artist who creates science illustrations to promote nature. ","lat":36.65169782,"long":-121.7978521},
{"placeName":"Humboldt State University","desc":"Stephen Hillenburg, an animator and marine educator who created Spongebob Squarepants. ","lat":40.87475752,"long":-124.0789375},
{"placeName":"California Institute of the Arts","desc":"Tim Burton, a director known for his horror films.","lat":34.39288448,"long":-118.5668769}]

for (let i = 0; i < places.length; i++) {
  L.marker([ places[i].lat, places[i].long ])
  .bindPopup('<h3>' + places[i].placeName + '</h3>' + '<p>' +
    places[i].desc + '</p>')
  .addTo(mymap)
}
