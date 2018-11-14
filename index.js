const { useEffect, useState } = require('react')

module.exports = module.exports.default = usePromiseState

function resolvePromise (promise) {
  if (typeof promise === 'function') {
    return promise()
  }

  return promise
}

function usePromiseState (initPromise = null) {
  const [promiseState, setState] = useState({ state: 'none' })
  const [promise, setPromise] = useState(initPromise)

  useEffect(() => {
    let resolvedPromise = resolvePromise(promise)

    if (!resolvedPromise) {
      return
    }
    setState({ state: 'pending' })

    let canceled = false

    resolvedPromise.then(
      result => !canceled && setState({ state: 'fulfilled', result }),
      error => !canceled && setState({ state: 'rejected', error, result: error })
    )

    return () => {
      canceled = true
    }
  }, [promise])

  if (!promise) {
    return [{ state: 'none' }, setPromise]
  }

  return [promiseState, setPromise]
}
