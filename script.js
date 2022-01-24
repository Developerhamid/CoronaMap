function updateMap() {
    fetch('/data.json')
    .then((response) => response.json())
    .then((rsp) => {
        console.log(rsp.data)
        rsp.data.forEach((element) => {
            longitude = element.longitude;
            latitude = element.latitude;
            cases = element.infected;
            if(cases> 400){
                color = 'rgb(255,0,0)';
            }
            else if(cases>250){
                color = `rgb(${cases},32,0)`;
            }
            else{
                color = `rgb(${cases},0,45)`;
            }
            new mapboxgl.Marker({
                draggable: false,
                color : color,
    
            })
            .setLngLat([longitude, latitude])
            .addTo(map);
        });
             
    })
}



updateMap();