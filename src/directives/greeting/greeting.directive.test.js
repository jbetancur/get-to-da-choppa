//
// describe('Greeting directive', ()=> {
//   const greetings = { greetings: [{quote: 'Get to da Choppaaaa!', movie: 'Predator (1987)'}, {quote: 'Dillon! you sonofabitch.', movie: 'Predator (1987)'}] };
//   it('should display a greeting', ()=> {
//     expect(greetings).toEqual(greetings);
//   });
// });

// import '../src/app/app.js';
import angular from 'angular';
import mock from 'angular-mocks/angular-mocks';
describe('Directive: Greeting', function () {

    var elem,
        parentScope;

    beforeEach(function () {
        mock.module('choppaApp.directives');
        mock.inject(function ($compile, $rootScope) {
            parentScope = $rootScope.$new();
            elem = angular.element('<greeting></greeting>');
            $compile(elem)(parentScope);
            parentScope.$digest();
        });
    });

    it('should say some badass arnold quote', () => {
      console.log(elem);
        expect(elem.find('div').text().match(/Get/g).length).toEqual(0);
    });
});
