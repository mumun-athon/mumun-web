export class DashboardController {
  constructor(data) {
    'ngInject';

    this.data = data;
    this.center = {
      lat: -7.80,
      lng: 110.36,
      zoom: 15,
    };
    this.markers = {};
    this.icons = {
      blue: {
        type: 'div',
        iconSize: [10, 10],
        className: 'blue',
        iconAnchor:  [5, 5],
      },
      red: {
        type: 'div',
        iconSize: [10, 10],
        className: 'red',
        iconAnchor:  [5, 5],
      },
    };
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
    this.cegatan = 100;
    this.laporan = 4;
    this.activate();
  }

  activate() {
    this.data.request({url: '/raids'})
      .then(response => {
        response.data.forEach(doc => {
          doc.locations.forEach(marker => {
            let id = [
              'raid',
              doc.doc_number,
              marker.id,
              marker.raid_id,
            ].join('/');
            this.markers[ id ] = {
              lat: +marker.latitude,
              lng: +marker.longitude,
              message: id + ' ' + doc.description,
              icon: this.icons.blue,
            };
          });
        });
      });
    this.data.request({url: '/ilegal-reports'})
      .then(response => {
        response.data.forEach(report => {
          let id = [
            'report',
            report.id,
          ].join('/');
          this.markers[ id ] = {
            lat: +report.latitude,
            lng: +report.longitude,
            message: id + ' ' + report.description,
            icon: this.icons.red,
          };
        });
      });
  }
}
