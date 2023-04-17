import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    'src/easing',
    'src/func',
    'src/species',
  ],
  declaration: true,
  rollup: {
    emitCJS: true,
  },
})
