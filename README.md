# Dragit
Click/tap and drag to scroll content within a container. Apply Dragit to a single container or every container on your page. Dragit is a small and simple plugin to use however you need.

[DEMO](https://codepen.io/azinasili/pen/bWdXGr?editors=1010)

## Installation
With [NPM](https://www.npmjs.com/package/dragit):

```bash
npm install dragit --save
```

With [Bower](https://bower.io/):

```bash
bower install dragit --save
```

Or include Dragit directly:

```html
<script src="/path/to/dragit.js"></script>
```

Dragit is written using [ES2015 modules](http://2ality.com/2014/09/es6-modules-final.html). To import Dragit into an ES2015 application:

```javascript
import Dragit from 'dragit';
```


## Usage
Dragit only requires the container element to be smaller than it's contents.

```html
<div id="dragme">
  ...
</div>
```

```css
#dragme {
  height: 100px;
  overflow: auto;
  width: 100px;
}
```

```javascript
const dragme = new Dragit('#dragme');
```


### Methods
#### destroy()
**Usage:** Kills the instance of Dragit.

#### init()
**Usage:** Creates new instance of Dragit.


## License
MIT License
