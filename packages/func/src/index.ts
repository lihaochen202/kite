export function noop() {}

export function sleep(timeout = 1500) {
  return new Promise<void>(resolve => setTimeout(() => resolve(), timeout))
}

export function lock<T>(fn: () => Promise<T>) {
  let locked = false
  return async () => {
    if (locked)
      return
    locked = true
    const result = await fn()
    locked = false
    return result
  }
}
