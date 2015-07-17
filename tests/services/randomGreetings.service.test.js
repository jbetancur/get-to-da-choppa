import { name } from '../../src/app';
import angular from 'angular';
describe('Service: $randomGreetings', () => {
  let mockService;

  beforeEach(() => {
    angular.mock.module(name);
  });

  beforeEach(inject(($randomGreetings) => {
    mockService = $randomGreetings;
  }));

  it('should have been called', () => {
    let spy = sinon.spy(mockService, 'getGreeting');
    mockService.getGreeting();
    expect(spy).toHaveBeenCalled();
  });

  it('should return a greeting object', () => {
    let test = mockService.getGreeting();
    expect(test instanceof Object).toBe(true);
  });

});
