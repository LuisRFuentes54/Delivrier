import axios from "axios";

export default {
  async getAddresses(search) {
    let response = {
      addresses:[]
    }
    await axios
    .get(
      `${process.env.VUE_APP_LOCATION_IQ_URL_ADDRESS}/autocomplete.php?key=${process.env.VUE_APP_LOCATION_IQ_TOKEN}&q=${search}&countrycodes=us&format=json`
    )
    .then(res => {
      response.addresses = res.data;
    })
    return response;
  },
  async getRoute(origin, destination) {
    let response = {
      route:null
    }
    await axios
    .get(
      `${process.env.VUE_APP_LOCATION_IQ_URL_ROUTE}/directions/driving/${
        origin.lon
      },${origin.lat};${destination.lon},${
        destination.lat
      }?key=${process.env.VUE_APP_LOCATION_IQ_TOKEN}&steps=${true}&annotations=${true}&geometries=geojson`
    )
    .then(res => {
      response.route = res.data;
    })
    return response;
  },
  async getRouteWithMiddlePoints(coordinates) {
    let response = {
      route:null
    }
    let routeString = '';
    coordinates.forEach((coordinate)=>{
      if(routeString){
        routeString = routeString + ';';
      }
      routeString = routeString + coordinate[0] + ',' + coordinate[1];
    });
    await axios
    .get(
      `${process.env.VUE_APP_LOCATION_IQ_URL_ROUTE}/directions/driving/${routeString}?key=${process.env.VUE_APP_LOCATION_IQ_TOKEN}&steps=${true}&annotations=${true}&geometries=geojson`
    )
    .then(res => {
      response.route = res.data;
    })
    return response;
  },
  async getAddressGivenCoordinates(coordinates) {
    let response = {
      address:{}
    }
    await axios
    .get(
      `${process.env.VUE_APP_LOCATION_IQ_URL_ROUTE}/reverse.php?key=${process.env.VUE_APP_LOCATION_IQ_TOKEN}&lat=${coordinates[1].toString()}&lon=${coordinates[0].toString()}&format=json`
    )
    .then(res => {
      response.address= res.data;
    })
    
    return response;
  },
}
