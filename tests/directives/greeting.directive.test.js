import angular from 'angular';
import greeting from '../../src/directives/greeting/greeting.directive';
import { name } from '../../src/app';
import template from '../../src/directives/greeting/greeting.directive.html';

describe('Directive: greeting', () => {

  let elem,
    parentScope;

  beforeEach(() => {
    angular.mock.module(name);
    inject(($compile, $rootScope) => {
      parentScope = $rootScope.$new();
      parentScope.greeting = {
        quote: 'This is ',
        movie: '-- a Test'
      };
      elem = angular.element(template);
      $compile(elem)(parentScope);
      parentScope.$digest();
    });
  });

  it('should display This is -- a Test', () => {
    expect(elem.html()).toContain('This is');
    expect(elem.html()).toContain('-- a Test');
  });

  it('should call the greeting function', () => {
    let test = greeting();
    expect(test instanceof Object).toBe(true);
  });

});
