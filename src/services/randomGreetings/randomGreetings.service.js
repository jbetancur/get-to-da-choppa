import quotes from '../../data/quotes.data.js';

export default class RandomGreetings {
  constructor() {
    this.greetings = quotes;
  }

  getGreeting() {
    const totalGreetings = this.greetings.quotes.length;
    const rand = Math.floor(Math.random() * totalGreetings);
    return this.greetings.quotes[rand];

  }
}

RandomGreetings.$inject = [];
