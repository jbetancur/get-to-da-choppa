export default class HomeCtrl {
  constructor(randomGreetings) {
    this.random = randomGreetings;
    this.name = 'Get To Da Choppa!';
  }

  randomGreeting() {
    this.name = this.random.getGreeting();
  }
}
