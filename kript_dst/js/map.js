function mapInit(){var o=new google.maps.LatLngBounds,n=new google.maps.LatLng(55.803506,37.5521);o.extend(n);var t=new google.maps.LatLng(55.803506,37.549934);o.extend(t);var e={zoom:17,scrollwheel:!1,streetViewControl:!1,panControl:!0,panControlOptions:{position:google.maps.ControlPosition.TOP_RIGHT},zoomControl:!0,zoomControlOptions:{position:google.maps.ControlPosition.LEFT_BOTTOM},center:n},a=document.getElementById("map"),l=new google.maps.Map(a,e);new google.maps.Marker({position:t,map:l,title:"Бизнес-центр Аэропорт"})}mapInit();