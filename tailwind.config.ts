import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,vue}',
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [],
} satisfies Config
