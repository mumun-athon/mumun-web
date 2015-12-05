describe('service authorization', () => {
  beforeEach(angular.mock.module('mumunWeb'));

  it('should be registered', inject(authorization => {
    expect(authorization).not.toEqual(null);
  }));

  describe('data variable', () => {
    it('should exist', inject(authorization => {
      expect(authorization.data).not.toEqual(null);
    }));
  });

  describe('login function', () => {
    it('should exist', inject(authorization => {
      expect(authorization.login).not.toEqual(null);
    }));

    it('should return authorization', inject((authorization, $httpBackend) => {
      $httpBackend.when('GET',  authorization.data + '/contributors?per_page=1').respond(200, [{pprt: 'value'}]);
      var data;
      authorization.login(1).then(function(fetchedData) {
        data = fetchedData;
      });

      $httpBackend.flush();
      expect(data).toEqual(jasmine.any(Array));
      expect(data.length === 1).toBeTruthy();
      expect(data[0]).toEqual(jasmine.any(Object));
    }));
  });
});
