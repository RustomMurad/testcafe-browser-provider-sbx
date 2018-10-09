# testcafe-browser-provider-sbx
[![Build Status](https://travis-ci.org/RustomMurad/testcafe-browser-provider-sbx.svg)](https://travis-ci.org/RustomMurad/testcafe-browser-provider-sbx)

This is the **sbx** browser provider plugin for [TestCafe](http://devexpress.github.io/testcafe).

## Install

```
npm install testcafe-browser-provider-sbx
```

## Usage


You can determine the available browser aliases by running
```
testcafe -b sbx
```

When you run tests from the command line, use the alias when specifying browsers:

```
testcafe sbx:browser1 'path/to/test/file.js'
```


When you use API, pass the alias to the `browsers()` method:

```js
testCafe
    .createRunner()
    .src('path/to/test/file.js')
    .browsers('sbx:browser1')
    .run();
```

## Author
Roman Lagunov 
