# GitHub Username Events Scorer
Calculates a score for a given user based on points asssigned to the type of events

| Event | Score |
| ------ | ------ |
| IssuesEvent |7 |
| IssueCommentEvent | 6 |
| PushEvent | 5 |
| PullRequestReviewCommentEvent | 4 |
| WatchEvent | 3 |
| CreateEvent | 2 |
| Any other event | 1 |

## Installation
- Clone the repository
- cd github-username-events-scorer
- `npm install` or `yarn`

## Usage
- Pass a GitHub username to the command line argument as `node index.js <username>`
OR
- Make file `github-scorer` executable using `chmod +x github-scorer`
- Pass a GitHub username to the command line argument as `./github-scorer <username>`
