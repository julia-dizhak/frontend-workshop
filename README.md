# Frontend workshop
Test project to show front-end development tools from moneypark projects

[Presentation](https://julia-dizhak.github.io/presentations/topic-moneypark-frontend-workshop/)


## Development

### Gulp
```run default task
./node_modules/.bin/gulp
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

```[usage](https://yarnpkg.com/en/docs/usage)
yarn init -y
yarn add jquery@1.6 (you don't need mention --save)
yarn add global gulp
yarn add angular@1.4.7 --offline
yarn add [package] [--dev/-D]
yarn start
```

#### [Migrating from npm](https://yarnpkg.com/lang/en/docs/migrating-from-npm/)
Migrating from npm should be a fairly easy process for most users. Yarn can consume the same package.json format as npm, and can install any package from the npm registry.

#### [Bower away](https://github.com/sheerun/bower-away)
Convert your project from Bower to Yarn.
https://bower.io/blog/2017/how-to-migrate-away-from-bower/


### Babel
https://raw.githubusercontent.com/codedojo/babel-intro/master/README.md

```run
yarn run
```

yarn add babel-cli -D
yarn add babel-preset-es2015 -D
./node_modules/.bin/babel js/es6.js --watch --out-file assets/dist/js/es2015.js

```
./node_modules/.bin/babel js/es6.js -o js/es2015.js --presets es2015
```

### Karma

```install
yarn add karma -dev
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
