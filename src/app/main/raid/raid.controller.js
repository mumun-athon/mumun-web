export class RaidController {
  constructor(data, toastr, $scope, moment) {
    'ngInject';

    this.data = data;
    this.toastr = toastr;
    this.$scope = $scope;
    this.markers = [];

    this.newRaid = {};

    this.layers = {
      baselayers: {
        googleTerrain: {
          name: 'Google Terrain',
          layerType: 'TERRAIN',
          type: 'google',
        },
        googleHybrid: {
          name: 'Google Hybrid',
          layerType: 'HYBRID',
          type: 'google',
        },
        googleRoadmap: {
          name: 'Google Streets',
          layerType: 'ROADMAP',
          type: 'google',
        },
      },
    };
    this.center = {
      lat: -7.80,
      lng: 110.36,
      zoom: 15,
    };

    this.activate();
  }

  activate() {
    this.$scope.$on('leafletDirectiveMap.click', (event, args) => {
      let leafEvent = args.leafletEvent;
      this.markers.push({
        lat: leafEvent.latlng.lat,
        lng: leafEvent.latlng.lng,
        draggable: true,
        focus: true,
        message: 'Location ' + this.markers.length,
      });
    });
  }

  addRaids(raids) {
    let locations = this.markers.map(location => {
      return {
        latitude: location.lat,
        longitude: location.lng,
      };
    });
    let data = {
      doc_number: raids.docNumber,
      start_date: moment(raids.startDate).format('YYYY-MM-DD'),
      end_date: moment(raids.endDate).format('YYYY-MM-DD'),
      description: raids.description,
      locations: locations,
    };
    this.data.request({
      method: 'POST',
      url: '/raids',
      data: data,
    })
    .then(() => {
      this.toastr.success('Data berhasil ditambahkan.');
      this.newRaid = {};
      this.markers.length = 0;
    });
  }
}
