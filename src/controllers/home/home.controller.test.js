import home from './index';
import angular from 'angular';

describe('Controller: Home', function() {
  let $controller;

  beforeEach(angular.mock.module(home));

  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('name is initialized to World', function() {
    let ctrl = $controller('HomeCrtl');
    expect(ctrl.name).toBe('choppaApp.home');
  });
});
