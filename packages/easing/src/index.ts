import { noop } from '@lihaochen/func'
import {
  easeInBackFunc,
  easeInBounceFunc,
  easeInCircFunc,
  easeInElasticFunc,
  easeInExpoFunc,
  easeInOutBackFunc,
  easeInOutBounceFunc,
  easeInOutCircFunc,
  easeInOutElasticFunc,
  easeInOutExpoFunc,
  easeInOutQuartFunc,
  easeInOutQuintFunc,
  easeInOutSineFunc,
  easeInQuadFunc,
  easeInQuintFunc,
  easeInSineFunc,
  easeOutBackFunc,
  easeOutBounceFunc,
  easeOutCircFunc,
  easeOutElasticFunc,
  easeOutExpoFunc,
  easeOutQuadFunc,
  easeOutQuintFunc,
  easeOutSineFunc,
  linearFunc,
} from './func'
import type { EasingFunc } from './func'

export * from './func'

export type EasingHandler = (
  from: number,
  to: number,
  duration: number,
  hooks?: EasingHandlerHooks
) => void

export interface EasingHandlerHooks {
  update?: (val: number) => void
  finish?: () => void
}

export function easingHandlerProvider(
  easingFunc: EasingFunc,
  from: number,
  to: number,
  duration: number,
  hooks: EasingHandlerHooks = { update: noop, finish: noop },
) {
  const diff = to - from
  if (!diff) {
    hooks.finish && hooks.finish()
    return
  }

  if (duration <= 0) {
    hooks.update && hooks.update(to)
    hooks.finish && hooks.finish()
    return
  }

  const start = performance.now()
  const tick = () => {
    const current = performance.now()
    const time = Math.min(current - start, duration)
    if (time === duration) {
      hooks.finish && hooks.finish()
      return
    }

    hooks.update && hooks.update(easingFunc(time, from, diff, duration))
    requestAnimationFrame(tick)
  }
  tick()
}

export const linear: EasingHandler = (from, to, duration, hooks) => {
  easingHandlerProvider(linearFunc, from, to, duration, hooks)
}

export const easeInSine: EasingHandler = (from, to, duration, hooks) => {
  easingHandlerProvider(easeInSineFunc, from, to, duration, hooks)
}

export const easeOutSine: EasingHandler = (from, to, duration, hooks) => {
  easingHandlerProvider(easeOutSineFunc, from, to, duration, hooks)
}

export const easeInOutSine: EasingHandler = (from, to, duration, hooks) => {
  easingHandlerProvider(easeInOutSineFunc, from, to, duration, hooks)
}

export const easeInQuad: EasingHandler = (from, to, duration, hooks) => {
  easingHandlerProvider(easeInQuadFunc, from, to, duration, hooks)
}

export const easeOutQuad: EasingHandler = (from, to, duration, hooks) => {
  easingHandlerProvider(easeOutQuadFunc, from, to, duration, hooks)
}

export const easeInOutQuart: EasingHandler = (from, to, duration, hooks) => {
  easingHandlerProvider(easeInOutQuartFunc, from, to, duration, hooks)
}

export const easeInQuint: EasingHandler = (from, to, duration, hooks) => {
  easingHandlerProvider(easeInQuintFunc, from, to, duration, hooks)
}

export const easeOutQuint: EasingHandler = (from, to, duration, hooks) => {
  easingHandlerProvider(easeOutQuintFunc, from, to, duration, hooks)
}

export const easeInOutQuint: EasingHandler = (from, to, duration, hooks) => {
  easingHandlerProvider(easeInOutQuintFunc, from, to, duration, hooks)
}

export const easeInExpo: EasingHandler = (from, to, duration, hooks) => {
  easingHandlerProvider(easeInExpoFunc, from, to, duration, hooks)
}

export const easeOutExpo: EasingHandler = (from, to, duration, hooks) => {
  easingHandlerProvider(easeOutExpoFunc, from, to, duration, hooks)
}

export const easeInOutExpo: EasingHandler = (from, to, duration, hooks) => {
  easingHandlerProvider(easeInOutExpoFunc, from, to, duration, hooks)
}

export const easeInCirc: EasingHandler = (from, to, duration, hooks) => {
  easingHandlerProvider(easeInCircFunc, from, to, duration, hooks)
}

export const easeOutCirc: EasingHandler = (from, to, duration, hooks) => {
  easingHandlerProvider(easeOutCircFunc, from, to, duration, hooks)
}

export const easeInOutCirc: EasingHandler = (from, to, duration, hooks) => {
  easingHandlerProvider(easeInOutCircFunc, from, to, duration, hooks)
}

export const easeInBack: EasingHandler = (from, to, duration, hooks) => {
  easingHandlerProvider(easeInBackFunc, from, to, duration, hooks)
}

export const easeOutBack: EasingHandler = (from, to, duration, hooks) => {
  easingHandlerProvider(easeOutBackFunc, from, to, duration, hooks)
}

export const easeInOutBack: EasingHandler = (from, to, duration, hooks) => {
  easingHandlerProvider(easeInOutBackFunc, from, to, duration, hooks)
}

export const easeInElastic: EasingHandler = (from, to, duration, hooks) => {
  easingHandlerProvider(easeInElasticFunc, from, to, duration, hooks)
}

export const easeOutElastic: EasingHandler = (from, to, duration, hooks) => {
  easingHandlerProvider(easeOutElasticFunc, from, to, duration, hooks)
}

export const easeInOutElastic: EasingHandler = (from, to, duration, hooks) => {
  easingHandlerProvider(easeInOutElasticFunc, from, to, duration, hooks)
}

export const easeOutBounce: EasingHandler = (from, to, duration, hooks) => {
  easingHandlerProvider(easeOutBounceFunc, from, to, duration, hooks)
}

export const easeInBounce: EasingHandler = (from, to, duration, hooks) => {
  easingHandlerProvider(easeInBounceFunc, from, to, duration, hooks)
}

export const easeInOutBounce: EasingHandler = (from, to, duration, hooks) => {
  easingHandlerProvider(easeInOutBounceFunc, from, to, duration, hooks)
}
