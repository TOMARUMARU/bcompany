$(document).on('turbolinks:load', function() {
  var map;
  var marker;
  var center = {
    lat: 35.658689, // 緯度
    lng: 139.697798 // 経度
  };
  initMap()
function initMap() {
    map = new google.maps.Map(document.getElementById('sample'), { // #sampleに地図を埋め込む
        center: center,
        zoom: 19 // 地図のズームを指定
    });
    marker = new google.maps.Marker({ // マーカーの追加
        position: center, // マーカーを立てる位置を指定
      map: map // マーカーを立てる地図を指定
   });
}
})
