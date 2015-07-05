import { name } from '../../app';
import angular from 'angular';

describe('Directive: Greeting', function () {
  let element, parentScope;
  beforeEach(()=> {
    angular.mock.module(name);
    angular.mock.inject(($compile, $rootScope)=> {
      parentScope = $rootScope.$new();
      element = angular.element('<greeting greeting="{ quotes:[ { quote: \'I am\', movie: \'a test\'} ] }"></greeting>');
      $compile(element)(parentScope);
      parentScope.$digest();
    });
  });

  it('should accept a greeting object', () => {
    expect(element.isolateScope().greeting instanceof Object).toBe(true);
  });
});
