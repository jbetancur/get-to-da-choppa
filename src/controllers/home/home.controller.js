import './home.controller.scss';

export default class HomeCtrl {
  constructor($randomGreetings) {
    // Get our Service
    this.randomSvc = $randomGreetings;
    // Init a Greeting
    this.randomGreeting();
  }

  randomGreeting() {
    this.greeting = this.randomSvc.getGreeting();
  }
}

HomeCtrl.$inject = ['$randomGreetings'];
