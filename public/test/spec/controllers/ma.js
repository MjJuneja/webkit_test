'use strict';

describe('Controller: MaCtrl', function () {

  // load the controller's module
  beforeEach(module('publicApp'));

  var MaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MaCtrl = $controller('MaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MaCtrl.awesomeThings.length).toBe(3);
  });
});
