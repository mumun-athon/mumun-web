export class RaidController {
  constructor(data, toastr) {
    'ngInject';

    this.data = data;
    this.toastr = toastr;

    this.newRaid = {};
    this.center = {
      lat: -7.80,
      lng: 110.36,
      zoom: 15,
    };

    this.activate();
  }

  activate() {

  }

  addRaids(raids) {
    console.log(raids);
    this.data.request({
      method: 'POST',
      url: '/raids',
      data: raids,
    })
    .then(() => {
      this.toastr.success('Data berhasil ditambahkan.');
      this.newRaid = {};
    });
  }
}
