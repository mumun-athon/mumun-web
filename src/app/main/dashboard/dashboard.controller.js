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
    this.cegatan = 100;
    this.laporan = 4;
    this.activate();
  }

  activate() {
    this.data.request({url: '/raids'})
      .then(response => {
        this.markers.length = 0;
        response.data.forEach(doc => {
          doc.locations.forEach(marker => {
            let id = [
              doc.doc_number,
              marker.id,
              marker.raid_id,
            ].join('/');
            this.markers[id] = {
              lat: +marker.latitude,
              lng: +marker.longitude,
              message: id + ' ' + doc.description,
            };
          });
        });
      });
  }
}
