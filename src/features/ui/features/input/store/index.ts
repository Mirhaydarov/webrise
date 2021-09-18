import { forward, restore } from 'effector'
import { onBlur, onFocus, toggleFocus } from './events'

const $inputFocus = restore(toggleFocus, false)

forward({
  from: onBlur.map(() => false),
  to: toggleFocus
})

forward({
  from: onFocus.map(() => true),
  to: toggleFocus
})

export {
  $inputFocus,
  onBlur,
  onFocus
}
