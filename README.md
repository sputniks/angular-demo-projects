# Angular Demo projects 

#### add in `angular.json` under build

```
npm install --save bootstrap jquery jqwidgets-ng
ng serve --port 
```


#### add in `angular.json` under build
```
"architect": {
  "build": {
    [...], 
    "styles": [
      "src/styles.css", 
        "node_modules/bootstrap/dist/css/bootstrap.min.css"
      ],
      "scripts": [
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.min.js"
      ]
    },
```