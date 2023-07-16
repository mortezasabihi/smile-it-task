import { type VueWrapper } from '@vue/test-utils'

export type VueComponentWrapper<T extends new (...args: any) => any> = VueWrapper<InstanceType<T> & Record<string, any>>
