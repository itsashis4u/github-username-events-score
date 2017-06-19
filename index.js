#!/usr/bin/env node

const axios = require('axios');

class User {
  constructor() {
    if (process.argv[2]) {
      this.username = process.argv[2];
    }

    this.request = axios.create({
      baseURL: 'https://api.github.com/users/',
    });
    this.publicEventsPath = '/events/public';

    this.lookUpTable = {
      IssuesEvent: 7,
      IssueCommentEvent: 6,
      PushEvent: 5,
      PullRequestReviewCommentEvent: 4,
      WatchEvent: 3,
      CreateEvent: 2,
    };
  }

  fetchData(page) {
    if (this.username) return this.request.get(`${this.username}${this.publicEventsPath}?page=${page}`);
    return Promise.reject('No user provided');
  }

  eventScore(event) {
    if (event in this.lookUpTable) {
      return this.lookUpTable[event];
    }
    return 1;
  }

  calculateScore() {
    let score = 0;
    this.fetchData()
      .then(({ data }) => {
        data.forEach(({ type }) => {
          score += this.eventScore(type);
        });

        return score;
      })
      .then(res => console.log(`Score for username '${this.username}' is ${res}`))
      .catch((err) => {
        if (typeof err === 'string') return console.log(err);
        return console.log(err.response.data.message);
      });
  }

  totalScore() {
    // TODO: Add support for pagination
  }
}

const user = new User();
user.calculateScore();
