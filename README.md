# usePromiseState()

Like `React.useState()` but use promise value 

Inspired by [react-use-promise](https://github.com/bsonntag/react-use-promise)


## Install

```sh
yarn add use-promise-state
```

## Usage

```jsx
import React from 'react'
import usePromiseState from 'use-promise-state'

function Example (){
  const [{state, error, result}, setPromise] = usePromiseState()

  return (
    <div>
      <div>state: {state}</div>
      <div>result: {result || ''}</div>
      <button onClick={() => setPromsie(new Promise(resolve => setTimeout(() => resolve('hello'), 10000)))}>start</button> 
      <button onClick={() => setPromise(null)}>cancel</button> 
    </div>
  )
}
```

## License
MIT