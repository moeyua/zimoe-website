import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({}),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: [
    ...Array.from({ length: 4 }, (_, i) => `left--${i * 35}`),
    ...Array.from({ length: 10 }, (_, i) => `z-${i}`),
  ],
  theme: {
    colors: {
      /** 颜色/主题色 */
      primary: '#1C74BE',
      bg: {
        /** 颜色/背景色_浅 */
        light: '#F0F8FF',
        /** 颜色/背景色_深 */
        dark: '#E7F4FF',
        /** 颜色/背景色_更深 */
        darker: '#DDEFFF',
      },
      text: {
        /** 颜色/字体颜色_主题色 */
        primary: '#333333',
      },
    },
  },
  rules: [
    [
      /^contain-(\.*)$/,
      ([, contain]) => ({ contain }),
    ],
    [
      /^cols-([\d.]+(?:-[\d.]+)*)$/,
      ([, cols]) => ({
        'grid-template-columns': cols.split('-').map(col => `${Number.parseFloat(col) / 4}rem`).join(' '),
      }),
    ],
    [
      /^rows-([\d.]+(?:-[\d.]+)*)$/,
      ([, rows]) => ({
        'grid-template-rows': rows.split('-').map(row => `${Number.parseFloat(row) / 4}rem`).join(' '),
      }),
    ],
    [
      /^row-(\d+)-(\d)$/,
      ([, start, end]) => ({ 'grid-row': `${start}/${end}` }),
    ],
    [
      /^col-(\d+)-(\d)$/,
      ([, start, end]) => ({ 'grid-column': `${start}/${end}` }),
    ],
    [
      /^scrollbar-hide$/,
      ([_]) => `.scrollbar-hide { scrollbar-width:none;-ms-overflow-style: none; }
      .scrollbar-hide::-webkit-scrollbar {display:none;}`,
    ],
  ],
})
