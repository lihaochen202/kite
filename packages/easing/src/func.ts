/* eslint-disable no-cond-assign */

/**
 *
 * @param t  Current time, refers to the point on the X-axis
 * @param b  Starting point
 * @param c  Difference from start point to end point
 * @param d  Transition time, refers to the end point on the X-axis
 */
export type EasingFunc = (t: number, b: number, c: number, d: number, s?: number) => number

export const linearFunc: EasingFunc = (t, b, c, d) => {
  return (c * t) / d + b
}

export const easeInSineFunc: EasingFunc = (t, b, c, d) => {
  return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b
}

export const easeOutSineFunc: EasingFunc = (t, b, c, d) => {
  return c * Math.sin((t / d) * (Math.PI / 2)) + b
}

export const easeInOutSineFunc: EasingFunc = (t, b, c, d) => {
  return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b
}

export const easeInQuadFunc: EasingFunc = (t, b, c, d) => {
  return c * (t /= d) * t + b
}

export const easeOutQuadFunc: EasingFunc = (t, b, c, d) => {
  return -c * (t /= d) * (t - 2) + b
}

export const easeInOutQuadFunc: EasingFunc = (t, b, c, d) => {
  if ((t /= d / 2) < 1)
    return (c / 2) * t * t + b
  return (-c / 2) * (--t * (t - 2) - 1) + b
}

export const easeInQuartFunc: EasingFunc = (t, b, c, d) => {
  return c * (t /= d) * t * t * t + b
}

export const easeOutQuartFunc: EasingFunc = (t, b, c, d) => {
  return -c * ((t = t / d - 1) * t * t * t - 1) + b
}

export const easeInOutQuartFunc: EasingFunc = (t, b, c, d) => {
  if ((t /= d / 2) < 1)
    return (c / 2) * t * t * t * t + b
  return (-c / 2) * ((t -= 2) * t * t * t - 2) + b
}

export const easeInQuintFunc: EasingFunc = (t, b, c, d) => {
  return c * (t /= d) * t * t * t * t + b
}

export const easeOutQuintFunc: EasingFunc = (t, b, c, d) => {
  return c * ((t = t / d - 1) * t * t * t * t + 1) + b
}

export const easeInOutQuintFunc: EasingFunc = (t, b, c, d) => {
  if ((t /= d / 2) < 1)
    return (c / 2) * t * t * t * t * t + b
  return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b
}

export const easeInExpoFunc: EasingFunc = (t, b, c, d) => {
  return t === 0 ? b : c * 2 ** (10 * (t / d - 1)) + b
}

export const easeOutExpoFunc: EasingFunc = (t, b, c, d) => {
  return t === d ? b + c : c * (-(2 ** ((-10 * t) / d)) + 1) + b
}

export const easeInOutExpoFunc: EasingFunc = (t, b, c, d) => {
  if (t === 0)
    return b
  if (t === d)
    return b + c
  if ((t /= d / 2) < 1)
    return (c / 2) * 2 ** (10 * (t - 1)) + b
  return (c / 2) * (-(2 ** (-10 * --t)) + 2) + b
}

export const easeInCircFunc: EasingFunc = (t, b, c, d) => {
  return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
}

export const easeOutCircFunc: EasingFunc = (t, b, c, d) => {
  return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
}

export const easeInOutCircFunc: EasingFunc = (t, b, c, d) => {
  if ((t /= d / 2) < 1)
    return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b
  return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
}

export const easeInBackFunc: EasingFunc = (t, b, c, d, s = 1.70158) => {
  return c * (t /= d) * t * ((s + 1) * t - s) + b
}

export const easeOutBackFunc: EasingFunc = (t, b, c, d, s = 1.70158) => {
  return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
}

export const easeInOutBackFunc: EasingFunc = (t, b, c, d, s = 1.70158) => {
  if ((t /= d / 2) < 1)
    return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b
  return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b
}

export const easeInElasticFunc: EasingFunc = (t, b, c, d) => {
  let s = 1.70158
  let p = 0
  let a = c
  if (t === 0)
    return b
  if ((t /= d) === 1)
    return b + c
  if (!p)
    p = d * 0.3
  if (a < Math.abs(c)) {
    a = c
    s = p / 4
  }
  else {
    s = (p / (2 * Math.PI)) * Math.asin(c / a)
  }
  return -(a * 2 ** (10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b
}

export const easeOutElasticFunc: EasingFunc = (t, b, c, d) => {
  let s = 1.70158
  let p = 0
  let a = c
  if (t === 0)
    return b
  if ((t /= d) === 1)
    return b + c
  if (!p)
    p = d * 0.3
  if (a < Math.abs(c)) {
    a = c
    s = p / 4
  }
  else {
    s = (p / (2 * Math.PI)) * Math.asin(c / a)
  }
  return a * 2 ** (-10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) + c + b
}

export const easeInOutElasticFunc: EasingFunc = (t, b, c, d) => {
  let s = 1.70158
  let p = 0
  let a = c
  if (t === 0)
    return b
  if ((t /= d / 2) === 2)
    return b + c
  if (!p)
    p = d * (0.3 * 1.5)
  if (a < Math.abs(c)) {
    a = c
    s = p / 4
  }
  else {
    s = (p / (2 * Math.PI)) * Math.asin(c / a)
  }
  if (t < 1)
    return -0.5 * (a * 2 ** (10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b
  return a * 2 ** (-10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) * 0.5 + c + b
}

export const easeOutBounceFunc: EasingFunc = (t, b, c, d) => {
  if ((t /= d) < 1 / 2.75)
    return c * (7.5625 * t * t) + b
  else if (t < 2 / 2.75)
    return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b
  else if (t < 2.5 / 2.75)
    return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b
  else return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b
}

export const easeInBounceFunc: EasingFunc = (t, b, c, d) => {
  return c - easeOutBounceFunc(d - t, 0, c, d) + b
}

export const easeInOutBounceFunc: EasingFunc = (t, b, c, d) => {
  if (t < d / 2)
    return easeInBounceFunc(t * 2, 0, c, d) * 0.5 + b
  return easeOutBounceFunc(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b
}
