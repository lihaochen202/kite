export function isUndefined(val: unknown): val is undefined {
  return typeof val === 'undefined'
}

export function isNull(val: unknown): val is null {
  return val === null
}

export function isBoolean(val: unknown): val is boolean {
  return typeof val === 'boolean'
}

export function isString(val: unknown): val is string {
  return typeof val === 'string'
}

export function isSymbol(val: unknown): val is symbol {
  return typeof val === 'symbol'
}

export function isNumber(val: unknown): val is number {
  return typeof val === 'number'
}

export function isBigInt(val: unknown): val is bigint {
  return typeof val === 'bigint'
}

export function isArray<T>(val: unknown): val is T[] {
  return Array.isArray(val)
}

export function isObject(val: unknown): val is object {
  return toString(val, 'Object')
}

export function isFunction(val: unknown): val is Function {
  return toString(val, 'Function')
}

export function isDate(val: unknown): val is Date {
  return toString(val, 'Date')
}

export function isRegExp(val: unknown): val is RegExp {
  return toString(val, 'RegExp')
}

export function isMap<K, V>(val: unknown): val is Map<K, V> {
  return toString(val, 'Map')
}

export function isWeakMap<K extends object, V>(val: unknown): val is WeakMap<K, V> {
  return toString(val, 'WeakMap')
}

export function isSet<T>(val: unknown): val is Set<T> {
  return toString(val, 'Set')
}

export function isWeakSet<T extends object>(val: unknown): val is WeakSet<T> {
  return toString(val, 'WeakSet')
}

function toString(val: unknown, type: string) {
  return Object.prototype.toString.call(val) === `[object ${type}]`
}
