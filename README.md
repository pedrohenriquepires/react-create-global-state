<div align="center">
  <h1>react-create-global-state</h1>

  [![NPM](https://img.shields.io/npm/v/react-create-global-state.svg)](https://www.npmjs.com/package/react-create-global-state)
  ![Tests](./workflows/Tests/badge.svg)
  ![Build](./workflows/Build/badge.svg)
  ![Downloads](https://img.shields.io/npm/dt/react-create-global-state.svg)
  ![Bundle Size](https://img.shields.io/bundlephobia/min/react-create-global-state.svg)
  ![License](https://img.shields.io/npm/l/vanilla-enum.svg)

  <p>Generate a useState, but for global variables.</p>
</div>

---

## Usage

1 - Create your custom hook

```tsx
// use-global-counter.tsx

import createGlobalState from 'react-create-global-state'

const [useGlobalCounter, GlobalCounterProvider] = createGlobalState<number>(0)

export GlobalCounterProvider
export default useGlobalCounter
```

2 - Link the provider in your application

```tsx
// app.tsx

import React, { Component } from 'react';
import { GlobalCounterProvider } from './use-global-counter'

const App = () => (
  <GlobalCounterProvider>
    <div>
      {/*...*/}
    </div>
  </GlobalCounterProvider>
)

export default App
```

3 - Use the hook

```tsx
// counter.tsx

import React from 'react'
import useGlobalCounter from './use-global-counter'

const Counter = () => {
  const [counter, setCounter] = useGlobalCounter()

  return (
    <div>
      <p>State: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={() => setCounter(counter - 1)}>-1</button>
    </div>
  )
}

export default Counter
```

```jsx
// app.tsx

import React, { Component } from 'react';
import { GlobalCounterProvider } from './useGlobalCounter'
import Counter from './Counter'

const App = () => (
  <GlobalCounterProvider>
    <div style={{ margin: '20px' }}>
      <Counter />
      <Counter />
    </div>
  </GlobalCounterProvider>
)

export default App
```

Result:

![result-image](docs/global-state.gif)


 ## Sample

You can check the sample code [HERE](https://github.com/benhurott/react-create-global-state-sample)

