# Plot

This module exports a Deno-on-jupyter compatible plotting library via [`@observablehq/plot`](https://observablehq.com/plot/).

To use, simply run:

```typescript
import Plot from "https://deno.land/x/plot/mod.ts"

Plot.rectY({length: 10000}, Plot.binX({y: "count"}, {x: Math.random})).plot()
```
