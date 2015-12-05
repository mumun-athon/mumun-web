describe('service session', () => {
  beforeEach(angular.mock.module('mumunWeb'));

  it('should be registered', inject(session => {
    expect(session).not.toEqual(null);
  }));

  describe('user variable', () => {
    it('should exist', inject(session => {
      expect(session.user).not.toEqual(null);
    }));
  });

  describe('create function', () => {
    it('should exist', inject(session => {
      expect(session.create).not.toEqual(null);
    }));

    it('should return session', inject((session, $httpBackend) => {
      $httpBackend.when('GET',  session.user + '/contributors?per_page=1').respond(200, [{pprt: 'value'}]);
      var data;
      session.create(1).then(function(fetchedData) {
        session = fetchedData;
      });

      $httpBackend.flush();
      expect(data).toEqual(jasmine.any(Array));
      expect(data.length === 1).toBeTruthy();
      expect(data[0]).toEqual(jasmine.any(Object));
    }));
  });
  describe('destroy function', () => {
    it('should exist', inject(session => {
      expect(session.destroy).not.toEqual(null);
    }));

    it('should return session', inject((session, $httpBackend) => {
      $httpBackend.when('GET',  session.user + '/contributors?per_page=1').respond(200, [{pprt: 'value'}]);
      var data;
      session.destroy(1).then(function(fetchedData) {
        data = fetchedData;
      });

      $httpBackend.flush();
      expect(data).toEqual(jasmine.any(Array));
      expect(data.length === 1).toBeTruthy();
      expect(data[0]).toEqual(jasmine.any(Object));
    }));
  });
});
