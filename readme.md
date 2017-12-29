# ToDo List Offline
is a simple to-do-list app with drag & drop option that will be read to be used offline and in case of lie-fie.

### Overview
This is a simple, REACT based app that will use Service Workers and IndexedDb that brings Offline First benefits.

IN PROGRESS ...

### Next steps
* add Service Workers and IndexedDB functionalities

### Install
1. To run this app, you need installed NodeJS and npm. At the root of your project, run```npm install ``` to install all dependencies.
2. Please check package.json devDependencies and install all packages in required version:
```
"devDependencies": {
  "babel-core": "^6.26.0",
  "babel-loader": "^7.1.2",
  "babel-preset-es2015": "^6.24.1",
  "babel-preset-react": "^6.24.1",
  "babel-preset-stage-2": "^6.24.1",
  "gulp": "^3.9.1",
  "gulp-plumber": "^1.1.0",
  "gulp-sass": "^3.1.0",
  "gulp-sourcemaps": "^2.6.1",
  "react": "^15.4.0",
  "react-dom": "^16.2.0",
  "react-sortable-hoc": "^0.6.8",
  "style-loader": "^0.19.0",
  "webpack": "^3.10.0",
  "webpack-dev-server": "^2.9.7"
}
```

### Running the App
1. In console run webpack-dev-server: ```./node_modules/.bin/webpack-dev-server --inline --hot```
2. Visit http://localhost:8888/ in your browser. Webpack is running.


### Built With
* [React.js](https://reactjs.org/) -  A JavaScript library for building user interfaces.
* [react-sortable-hoc] (https://github.com/clauderic/react-sortable-hoc) - A set of higher-order components to turn any list into an animated, touch-friendly, sortable list
* CSS3/ Sass
* HTML5
* Webpack
* Gulp

### Author
* [Anna Sobkowiak](https://github.com/anielkapa)

### License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

### Acknowledgments
* This is project done after completing the Google Developer Challenge Scholarship: Mobile Web Specialist track
