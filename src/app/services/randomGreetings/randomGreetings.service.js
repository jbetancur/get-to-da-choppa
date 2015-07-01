import angular from 'angular';

class RandomGreetings {
  constructor() {
    this.greetings = ['Stay Tuned!', 'It\'s not a Tuma!!!', 'Keep on Clickin...'];
  }

  getGreeting() {
    const totalGreetings = this.greetings.length;
    const rand = Math.floor(Math.random() * totalGreetings);
    return this.greetings[rand];

  }
}

export default angular.module('services.random-greetings', [])
  .service('randomGreetings', RandomGreetings).name;
