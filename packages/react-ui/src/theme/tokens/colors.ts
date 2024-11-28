import { defineTokens } from "@pandacss/dev"

export const colors = defineTokens.colors({
  transparent: { value: "transparent" },
  current: { value: "currentColor" },
  black: { value: "#09090B" },
  white: { value: "#FFFFFF" },
  whiteAlpha: {
    50: { value: "rgba(255, 255, 255, 0.04)" },
    100: { value: "rgba(255, 255, 255, 0.06)" },
    200: { value: "rgba(255, 255, 255, 0.08)" },
    300: { value: "rgba(255, 255, 255, 0.16)" },
    400: { value: "rgba(255, 255, 255, 0.24)" },
    500: { value: "rgba(255, 255, 255, 0.36)" },
    600: { value: "rgba(255, 255, 255, 0.48)" },
    700: { value: "rgba(255, 255, 255, 0.64)" },
    800: { value: "rgba(255, 255, 255, 0.80)" },
    900: { value: "rgba(255, 255, 255, 0.92)" },
    950: { value: "rgba(255, 255, 255, 0.95)" },
  },
  blackAlpha: {
    50: { value: "rgba(0, 0, 0, 0.04)" },
    100: { value: "rgba(0, 0, 0, 0.06)" },
    200: { value: "rgba(0, 0, 0, 0.08)" },
    300: { value: "rgba(0, 0, 0, 0.16)" },
    400: { value: "rgba(0, 0, 0, 0.24)" },
    500: { value: "rgba(0, 0, 0, 0.36)" },
    600: { value: "rgba(0, 0, 0, 0.48)" },
    700: { value: "rgba(0, 0, 0, 0.64)" },
    800: { value: "rgba(0, 0, 0, 0.80)" },
    900: { value: "rgba(0, 0, 0, 0.92)" },
    950: { value: "rgba(0, 0, 0, 0.95)" },
  },
  gray: {
    50: { value: "#F8F9F6" },
    100: { value: "#F0F1ED" },
    200: { value: "#E1E3DE" },
    300: { value: "#C5C7C3" },
    400: { value: "#AAACA8" },
    500: { value: "#8F918D" },
    600: { value: "#757874" },
    700: { value: "#5C5F5C" },
    800: { value: "#505350" },
    900: { value: "#444744" },
    950: { value: "#191C1A" },
  },
  red: {
    50: { value: "#fef2f2" },
    100: { value: "#fee2e2" },
    200: { value: "#fecaca" },
    300: { value: "#fca5a5" },
    400: { value: "#f87171" },
    500: { value: "#ef4444" },
    600: { value: "#dc2626" },
    700: { value: "#991919" },
    800: { value: "#511111" },
    900: { value: "#300c0c" },
    950: { value: "#1f0808" },
  },
  orange: {
    50: { value: "#fff7ed" },
    100: { value: "#ffedd5" },
    200: { value: "#fed7aa" },
    300: { value: "#fdba74" },
    400: { value: "#fb923c" },
    500: { value: "#f97316" },
    600: { value: "#ea580c" },
    700: { value: "#92310a" },
    800: { value: "#6c2710" },
    900: { value: "#3b1106" },
    950: { value: "#220a04" },
  },
  yellow: {
    50: { value: "#fefce8" },
    100: { value: "#fef9c3" },
    200: { value: "#fef08a" },
    300: { value: "#fde047" },
    400: { value: "#facc15" },
    500: { value: "#eab308" },
    600: { value: "#ca8a04" },
    700: { value: "#845209" },
    800: { value: "#713f12" },
    900: { value: "#422006" },
    950: { value: "#281304" },
  },
  // green: {
  //   50: { value: "#f0fdf4" },
  //   100: { value: "#dcfce7" },
  //   200: { value: "#bbf7d0" },
  //   300: { value: "#86efac" },
  //   400: { value: "#4ade80" },
  //   500: { value: "#22c55e" },
  //   600: { value: "#16a34a" },
  //   700: { value: "#116932" },
  //   800: { value: "#124a28" },
  //   900: { value: "#042713" },
  //   950: { value: "#03190c" },
  // },
  green: {
    50: {value: '#F5FFF4'},
    100: {value: '#C1FFD5'},
    200: {value: '#93F7BB'},
    300: {value: '#77DAA0'},
    400: {value: '#5BBE86'},
    500: {value: '#3EA26D'},
    600: {value: '#1C8855'},
    700: {value: '#006D41'},
    800: {value: '#005230'},
    900: {value: '#00391F'},
    950: {value: '#002110'},
  },
  
  // teal: {
  //   50: { value: "#f0fdfa" },
  //   100: { value: "#ccfbf1" },
  //   200: { value: "#99f6e4" },
  //   300: { value: "#5eead4" },
  //   400: { value: "#2dd4bf" },
  //   500: { value: "#14b8a6" },
  //   600: { value: "#0d9488" },
  //   700: { value: "#0c5d56" },
  //   800: { value: "#114240" },
  //   900: { value: "#032726" },
  //   950: { value: "#021716" },
  // },
  teal: {
    50: { value: "#F5FFF4" },
    100: { value: "#DFF7E3" },
    200: { value: "#D1E8D5" },
    300: { value: "#B5CCBA" },
    400: { value: "#9AB19F" },
    500: { value: "#809685" },
    600: { value: "#677C6C" },
    700: { value: "#4E6354" },
    800: { value: "#374B3E" },
    900: { value: "#213528" },
    950: { value: "#0C1F14" },
  },
  blue: {
    50: { value: "#eff6ff" },
    100: { value: "#dbeafe" },
    200: { value: "#bfdbfe" },
    300: { value: "#a3cfff" },
    400: { value: "#60a5fa" },
    500: { value: "#3b82f6" },
    600: { value: "#2563eb" },
    700: { value: "#173da6" },
    800: { value: "#1a3478" },
    900: { value: "#14204a" },
    950: { value: "#0c142e" },
  },
  cyan: {
    50: { value: "#F9FDFF" },
    100: { value: "#DAF5FF" },
    200: { value: "#BFE9F8" },
    300: { value: "#A3CDDB" },
    400: { value: "#88B2BF" },
    500: { value: "#6E97A4" },
    600: { value: "#547D8A" },
    700: { value: "#3B6471" },
    800: { value: "#224C58" },
    900: { value: "#033541" },
    950: { value: "#001F27" },
  },
  // cyan: {
  //   50: { value: "#ecfeff" },
  //   100: { value: "#cffafe" },
  //   200: { value: "#a5f3fc" },
  //   300: { value: "#67e8f9" },
  //   400: { value: "#22d3ee" },
  //   500: { value: "#06b6d4" },
  //   600: { value: "#0891b2" },
  //   700: { value: "#0c5c72" },
  //   800: { value: "#134152" },
  //   900: { value: "#072a38" },
  //   950: { value: "#051b24" },
  // },
  purple: {
    50: { value: "#faf5ff" },
    100: { value: "#f3e8ff" },
    200: { value: "#e9d5ff" },
    300: { value: "#d8b4fe" },
    400: { value: "#c084fc" },
    500: { value: "#a855f7" },
    600: { value: "#9333ea" },
    700: { value: "#641ba3" },
    800: { value: "#4a1772" },
    900: { value: "#2f0553" },
    950: { value: "#1a032e" },
  },
  pink: {
    50: { value: "#fdf2f8" },
    100: { value: "#fce7f3" },
    200: { value: "#fbcfe8" },
    300: { value: "#f9a8d4" },
    400: { value: "#f472b6" },
    500: { value: "#ec4899" },
    600: { value: "#db2777" },
    700: { value: "#a41752" },
    800: { value: "#6d0e34" },
    900: { value: "#45061f" },
    950: { value: "#2c0514" },
  },
})
// green: {
//   950: {value: '#002110'},
//   900: {value: '#00391F'},
//   800: {value: '#005230'},
//   700: {value: '#006D41'},
//   600: {value: '#1C8855'},
//   500: {value: '#3EA26D'},
//   400: {value: '#5BBE86'},
//   300: {value: '#77DAA0'},
//   200: {value: '#93F7BB'},
//   100: {value: '#C1FFD5'},
//   50: {value: '#F5FFF4'}
// },

// secondary: {
//   main: '#4E6354',
//   '5': '#03140A',
//   '10': '#0C1F14',
//   '20': '#213528',
//   '25': '#2C4033',
//   '30': '#374B3E',
//   '35': '#435749',
//   '40': '#4E6354',
//   '50': '#677C6C',
//   '60': '#809685',
//   '70': '#9AB19F',
//   '80': '#B5CCBA',
//   '90': '#D1E8D5',
//   '95': '#DFF7E3',
//   '98': '#E9FFED',
//   '99': '#F5FFF4',
// },
// tertiary: {
//   main: '#3B6471',
//   '5': '#001319',
//   '10': '#001F27',
//   '20': '#033541',
//   '25': '#14414C',
//   '30': '#224C58',
//   '35': '#2F5864',
//   '40': '#3B6471',
//   '50': '#547D8A',
//   '60': '#6E97A4',
//   '70': '#88B2BF',
//   '80': '#A3CDDB',
//   '90': '#BFE9F8',
//   '95': '#DAF5FF',
//   '98': '#F1FBFF',
//   '99': '#F9FDFF',
// },
// error: {
//   main: '#BA1A1A',
//   '5': '#2D0001',
//   '10': '#410002',
//   '20': '#690005',
//   '25': '#7E0007',
//   '30': '#93000A',
//   '35': '#A80710',
//   '40': '#BA1A1A',
//   '50': '#DE3730',
//   '60': '#FF5449',
//   '70': '#FF897D',
//   '80': '#FFB4AB',
//   '90': '#FFDAD6',
//   '95': '#FFEDEA',
//   '98': '#FFF8F7',
//   '99': '#FFFBFF',
// },
// neutral: {
//   main: '#5C5F5C',
//   '5': '#0F120F',
//   '10': '#191C1A',
//   '20': '#2E312E',
//   '25': '#393C39',
//   '30': '#505350',
//   '35': '#505350',
//   '40': '#5C5F5C',
//   '50': '#757874',
//   '60': '#8F918D',
//   '70': '#AAACA8',
//   '80': '#C5C7C3',
//   '90': '#E1E3DE',
//   '95': '#F0F1ED',
//   '98': '#F8FAF5',
//   '99': '#F8F9F6',
// },
// neutralVariant: {
//   main: '#586059',
//   '5': '#0B130D',
//   '10': '#161D18',
//   '20': '#2A322C',
//   '25': '#353D37',
//   '30': '#414942',
//   '35': '#4C544E',
//   '40': '#586059',
//   '50': '#717972',
//   '60': '#8A938B',
//   '70': '#A5ADA5',
//   '80': '#C0C9C0',
//   '90': '#DCE5DC',
//   '95': '#EAF3EA',
//   '98': '#F3FCF2',
//   '99': '#F6FFF5',
// },
// 'daisy-bush': {
//   main: '#4a06a2',
//   '5': '#2e0075',
//   '10': '#4a06a2',
//   '20': '#5e05d2',
//   '30': '#7107fa',
//   '40': '#7d18ff',
//   '50': '#883fff',
//   '60': '#a376ff',
//   '70': '#c0a7ff',
//   '80': '#daceff',
//   '90': '#ece5ff',
//   '95': '#f4f1ff',
// },
// 'extreme': {
//   main: '#FC9090',
//   '5': '#450a0a',
//   '10': '#801c1c',
//   '20': '#9a1a1a',
//   '30': '#ba1b1b',
//   '40': '#dd2525',
//   '50': '#f04343',
//   '60': '#f97070',
//   '70': '#fc9090',
//   '80': '#fecaca',
//   '90': '#fee2e2',
//   '95': '#fef2f2',
// },
// 'moderate': {
//   main: '#ffdf8c',
//   '5': '#461502',
//   '10': '#7a2b0d',
//   '20': '#94340c',
//   '30': '#b74506',
//   '40': '#dd6602',
//   '50': '#f98c07',
//   '60': '#ffb020',
//   '70': '#ffc74a',
//   '80': '#ffdf8c',
//   '90': '#fff0c6',
//   '95': '#fff9eb',
// },
// 'mild': {
//   main: '#ffb885',
//   '5': '#440e06',
//   '10': '#7e2210',
//   '20': '#9c2610',
//   '30': '#c52f09',
//   '40': '#ed4209',
//   '50': '#fc5c13',
//   '60': '#fe8039',
//   '70': '#ffb885',
//   '80': '#ffcfa9',
//   '90': '#ffe9d4',
//   '95': '#fff5ed',
// }