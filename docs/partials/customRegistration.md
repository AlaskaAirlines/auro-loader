```js
// Import the class only
import { AuroLoader } from '@aurodesignsystem/auro-loader/class';

// Register with a custom name if desired
AuroLoader.register('custom-loader');
```

The `register` call registers a new custom element, `<custom-loader>`, that behaves like `<auro-loader>`, so both can exist on the same page without interfering with each other.
