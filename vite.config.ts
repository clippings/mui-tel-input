import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import dts from 'vite-plugin-dts'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'Mui-phone-number',
      fileName: format => `mui-phone-number.${format}.js`
    },
    rollupOptions: {
      output: {
        globals: {
          react: 'React',
          '@mui/material/InputAdornment': 'InputAdornment',
          '@mui/material/TextField': 'TextField',
          '@mui/material/IconButton': 'IconButton',
          '@mui/material/styles': 'styles',
          'react/jsx-runtime': 'jsxRuntime',
          '@mui/material/Menu': 'Menu',
          '@mui/material/MenuItem': 'MenuItem',
          '@mui/material/Typography': 'Typography',
          '@mui/material/ListItemIcon': 'ListItemIcon',
          '@mui/material/ListItemText': 'ListItemText'
        }
      }
    }
  },
  plugins: [
    peerDepsExternal(),
    react(),
    tsconfigPaths(),
    dts({
      include: ['src/index.tsx'],
      insertTypesEntry: true
    })
  ]
})