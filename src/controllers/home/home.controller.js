import './home.controller.scss';

export default class HomeCtrl {
  constructor(randomGreetings) {
    this.random = randomGreetings;
    this.randomGreeting();
  }

  randomGreeting() {
    this.greeting = this.random.getGreeting();
  }
}

HomeCtrl.$inject = ['randomGreetings'];
