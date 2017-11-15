# Frontend workshop
Test project to show front-end development tools from moneypark projects

[Presentation](https://julia-dizhak.github.io/presentations/topic-moneypark-frontend-workshop/)


## Development

#### Node.js
```version
nvm use v6.9.5
```

### [Yarn](https://yarnpkg.com)
#### Benfits
<ul>
<li>ultra fast: yarn caches every package it downloads so it never needs to download it again</li>
<li>secure: yarn uses checksums to verify the integrity of every installed package before its code is executed</li>
<li>reliable: with yarn.lock file format, and a deterministic algorithm for installs, Yarn is able to guarantee that an install that worked on one system will work exactly the same way on any system.</li>
</ul>

```installation
brew install yarn
```

#### Yarn [usage](https://yarnpkg.com/en/docs/usage)


#### [Migrating from npm](https://yarnpkg.com/lang/en/docs/migrating-from-npm/)
Migrating from npm should be a fairly easy process for most users. Yarn can consume the same package.json format as npm, and can install any package from the npm registry.


#### [Bower away](https://github.com/sheerun/bower-away)
Convert your project from Bower to Yarn.
https://bower.io/blog/2017/how-to-migrate-away-from-bower/


### Gulp
```run default task
./node_modules/.bin/gulp
```

### Babel
https://raw.githubusercontent.com/codedojo/babel-intro/master/README.md

```install
yarn add babel-cli -D
yarn add babel-preset-es2015 -D
```

```run
npm run babel
```

```
./node_modules/.bin/babel js/es6.js --watch --out-file assets/dest/js/es2015.js
./node_modules/.bin/babel js/es6.js -o js/es2015.js --presets es2015
```

### Karma

```install Karma
yarn add karma
```

```install Jasmine
yarn add karma-jasmine
yarn add jasmine-core
```

```install ngMock
ngMock allows you to inject and mock angular services to help you test your application.
yarn add angular-mocks
```

```install Browsers
yarn add karma-phantomjs-launcher
```

```
karma start
```

### Interpolate django



# TODO: describe list
idea with describe what moneypark is doing like value
gulp: clean dist, pug html

svg: describe

yarn.lock

angular router

deploy

Webpack

linters
