// Initialize and add the map
// Latitude de ALGERIE	28.033886
// Longitude de ALGERIE	1.659626

// Latitude de Oran	35.6976541
// Longitude de Oran	-0.6337376
function initMap() {
  // The location of Uluru
  const uluruOran = { lat: 35.6976541, lng: -0.6337376 };
  const uluruAlgerie = { lat: 28.033886, lng: 1.659626 };

  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluruAlgerie,
  });
  // The marker, positioned at Uluru
  const image =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
 
  const marker = new google.maps.Marker({
    position: uluruOran,
    map: map,
    title:"Oran",
    icon : image,
    label:"S"

  });
  const marker2 = new google.maps.Marker({
    position: uluruAlgerie,
    map: map,
    title:"Algeria",
    label:"E"

  });
}

window.initMap = initMap;
