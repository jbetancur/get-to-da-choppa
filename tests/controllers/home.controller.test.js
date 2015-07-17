import { name } from '../../src/app';
import angular from 'angular';

let myController,
  scope,
  $randomGreetings;

angular.mock.module(($provide) => {
  $provide.value('$randomGreetings', new $randomGreetings());
});

describe('Controller: HomeCtrl', () => {
  beforeEach(() => {
    angular.mock.module(name);
    inject(($controller, _$randomGreetings_) => {
      scope = {};
      $randomGreetings = _$randomGreetings_;
      myController = $controller('HomeCtrl', {
        $scope: scope
      });
    });
  });

  it('should exist', () => {
    expect(!!myController).toBe(true);
  });

  it('the greeting quote has a value length > than 0', () => {
    expect(myController.greeting.quote.length).toBeGreaterThan(0);
  });

  it('should provide a randomGreeting function', () => {
    expect(typeof myController.randomGreeting).toBe('function');
  });

  it('should provide a greeting variable with an Object value', () => {
    expect(myController.greeting).toBeDefined();
    expect(myController.greeting instanceof Object).toBe(true);
  });
});
