# lazyload-es2015-test

Test usage of LazyLoad as es2015 module through the `<script type="module"></script>` notation.

## Usage

```html
<script type="module" src="lazyload-init.js"></script>
```

Then, in `lazyload-init.js`:

```js
import LazyLoad from "./node_modules/vanilla-lazyload/dist/lazyload.es2015.js";
// or import LazyLoad from cdnjs.com;

var lazyLoadOptions = {/* your options here */};
var pageLazyLoad = new LazyLoad(lazyLoadOptions);
```

## Result

To see the result, open the `index.html` file.

## Take a look

Open [index.html](index.html) and [lazyload-init.js](lazyload-init.js) to see how LazyLoad is loaded as an ES2015 module, or go to [LazyLoad's readme file](https://github.com/verlok/lazyload/blob/master/README.md) for documentation.