import type { Colors, Variant } from './BaseButton.types'

export const colorClass: { [key in Variant]: { [key in Colors]: string } } = {
  filled: {
    primary: 'bg-blue-500',
    secondary: 'bg-red-500',
  },
  outlined: {
    primary: 'text-blue-500 border-blue-500 hover:bg-blue-500',
    secondary: 'text-red-500 border-red-500 hover:bg-red-500',
  },
}
