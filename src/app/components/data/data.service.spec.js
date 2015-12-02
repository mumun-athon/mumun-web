describe('service data', () => {
  beforeEach(angular.mock.module('mumunWeb'));

  it('should be registered', inject(data => {
    expect(data).not.toEqual(null);
  }));

  describe('appUrl variable', () => {
    it('should exist', inject(data => {
      expect(data.appUrl).not.toEqual(null);
    }));
  });

  describe('request function', () => {
    it('should exist', inject(data => {
      expect(data.request).not.toEqual(null);
    }));

    it('should return data', inject((data, $httpBackend) => {
      $httpBackend.when('GET',  data.appUrl + '/contributors?per_page=1').respond(200, [{pprt: 'value'}]);
      var result;
      data.request(1).then(function(fetchedData) {
        result = fetchedData;
      });

      $httpBackend.flush();
      expect(result).toEqual(jasmine.any(Array));
      expect(result.length === 1).toBeTruthy();
      expect(result[0]).toEqual(jasmine.any(Object));
    }));
  });
});
