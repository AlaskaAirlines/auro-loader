```js
// Import the class only
import { AuroLoader } from '@aurodesignsystem/auro-loader/class';

// Register with a custom name if desired
AuroLoader.register('custom-loader');
```

This will create a new custom element `<custom-loader>` that behaves exactly like `<auro-loader>`, allowing both to coexist on the same page without interfering with each other.
