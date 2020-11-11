# TwitterAI [![Build Version](https://img.shields.io/badge/Version-Alpha_0.2-blue.svg)]

Node.js Artificial Intelligence Twitter User.

![Preview Thumbnail](https://github.com/StereoPT/TwitterAI/blob/main/screens/Dashboard02.JPG)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
* Node.js
* Text Editor (Visual Studio Code)
* Twitter Account
```

### Installing

To install this AI Bot, you need to follow these steps:

1. Clone this repository to your computer.
2. In the */server/config* directory create a new file called: **TwiterConfig.js**
    1. In that file add your Twitter Authentication Keys & Tokens
```
  module.exports = {
    consumer_key: '...',
    consumer_secret: '...',
    access_token: '...',
    access_token_secret: '...'
  }
```
3. Open the **config.js** file and to change your configurations
```
{
  SCREEN_NAME: 'TheStereoPT',   //Username
  ANALYZE_AMOUNT: 25,           //Amount of Tweets to Analyze
}
```
4. Open the console and install all the dependencies with
```
npm install
```
5. Run the Server with
```
npm run dev
```

## Features

[Full List and Plans](https://github.com/StereoPT/TwitterAI/wiki)

## Built With

* [Twit](https://github.com/ttezel/twit) - Node.js Twitter API
* [Express.js](https://expressjs.com/) - Web Application Framework
* [React](https://reactjs.org/) - JavaScript library for building UI 
* [Redux](https://redux.js.org/) - Predictable State Container
* [Bootstrap](http://getbootstrap.com/) - Web Front-End Library

## Contributing

Please read [CONTRIBUTING.md](https://github.com/StereoPT/TwitterAI/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **StereoPT** - *Initial work* - [StereoPT](https://github.com/StereoPT)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Marty Santalucia - [Twitter Bot](https://hackernoon.com/we-need-to-talk-about-kevin-eed1ed01127f)
