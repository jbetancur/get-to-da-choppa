import { name } from '../../app';
import angular from 'angular';

describe('Service: $randomGreetings', ()=> {
  let mockService;

  beforeEach(()=>{
    angular.mock.module(($provide)=> {
      $provide.service('$randomGreetings', ()=> {
        //
      });
    });
    angular.mock.module(name);
  });

  beforeEach(inject(($randomGreetings)=> {
    mockService = $randomGreetings;
  }));

  it('should return a greeting object', ()=> {
    let greeting = mockService.getGreeting();
    expect(greeting instanceof Object).toBe(true);
  });

});
