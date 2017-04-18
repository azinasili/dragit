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
Dragit only requires a container element. All needed styles can be added during initialization of Dragit or with a seperate stylesheet.

```html
<div id="dragme">
  ...
</div>
```

Apply Dragit to selected element(s) (all options with default values are shown).

```javascript
const el = document.getElementById('dragme');
const dragme = new Dragit(el, {
  addCursor: true,
  dragX: true,
  dragY: true,
  addOverflow: true,
  height: null,
  width: null,
});
```


### Configuration options
#### addCursor
**Type:** `Boolean` **Default:** `true`

**Usage:** Should Dragit add a grab and grabbing cursor style.

#### dragX
**Type:** `Boolean` **Default:** `true`

**Usage:** Should Dragit allow for dragging on the X axis.

#### dragY
**Type:** `Boolean` **Default:** `true`

**Usage:** Should Dragit allow for dragging on the Y axis.

#### addOverflow
**Type:** `Boolean` **Default:** `true`

**Usage:** Should Dragit add overflow styles to container.

#### height
**Type:** `Number` **Default:** `null`

**Usage:** Have Dragit add a height (in pixels) to container.

#### width
**Type:** `Number` **Default:** `null`

**Usage:** Have Dragit add a width (in pixels) to container.


### Methods
#### destroy()
**Usage:** Kills the instance of Dragit.

#### init()
**Usage:** Creates new instance of Dragit.


## License
MIT License
