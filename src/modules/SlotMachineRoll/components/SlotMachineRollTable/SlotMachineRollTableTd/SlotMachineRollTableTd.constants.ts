import type { SymbolName } from '@/modules/SlotMachineRoll/types'

export const SymbolSVGS: { [key in SymbolName]: string } = {
  cherry: 'bg-[url("@/assets/fruits/cherry.svg")]',
  lemon: 'bg-[url("@/assets/fruits/lemon.svg")]',
  orange: 'bg-[url("@/assets/fruits/orange.svg")]',
  watermelon: 'bg-[url("@/assets/fruits/watermelon.svg")]',
}
