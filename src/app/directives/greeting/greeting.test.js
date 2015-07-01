import greetingDirective from './greeting.directive';

describe('Greeting directive', ()=> {
  it('should display a greeting', ()=> {
    const greetings = { greetings: [{quote: 'Get to da Choppaaaa!', movie: 'Predator (1987)'}, {quote: 'Dillon! you sonofabitch.', movie: 'Predator (1987)'}] };
    expect(greetings).toEqual(greetings);
  });
});
