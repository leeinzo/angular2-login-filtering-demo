## Get site going:
	
```
npm init -y
npm i angular2@2.0.0-alpha.44 systemjs@0.19.2 --save --save-exact
npm i typescript live-server --save-dev
```

## Ensure index page (src/index.html) references library scripts

```
<head>
  [...]
  <script src="../node_modules/systemjs/dist/system.src.js"></script>
  <script src="../node_modules/angular2/bundles/angular2.dev.js"></script>
  [...]
</head>
```

## Add to system config script on index.html:

```
<script>
  System.config({
    packages: {'app': {defaultExtension: 'js'}}
  });
  System.import('app/app');
</script>
```

system.js has been reconfigured to expect .js files by default.

## Add tsconfig.json file to src

```
{
  "compilerOptions": {
    "target": "ES5",
    "module": "commonjs",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": false
  }
}
``` 

Tells editor how to interpret the TypeScript code.

## Compiling TypeScript to JavaScript

```
npm run tsc
```

in terminal in app folder root.
Can leave this running to watch for changes to .ts files and compile into JavaScript.