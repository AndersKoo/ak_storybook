

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  "viteFinal": async (config) => {
    // Configure Vite for optimal chunking
    if (config.build) {
      config.build.rollupOptions = {
        ...config.build.rollupOptions,
        output: {
          ...config.build.rollupOptions?.output,
          // Best practice: Use function-based chunking for better control
          manualChunks: (id) => {
            // Core React libraries (small, stable)
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-core';
            }
            
            // Storybook core (medium size, changes occasionally)
            if (id.includes('@storybook/') && !id.includes('addon')) {
              return 'storybook-core';
            }
            
            // Storybook addons (can be large, split by functionality)
            if (id.includes('@storybook/addon-a11y')) {
              return 'addon-a11y';
            }
            if (id.includes('@storybook/addon-docs')) {
              return 'addon-docs';
            }
            if (id.includes('@storybook/addon-onboarding')) {
              return 'addon-onboarding';
            }
            if (id.includes('@storybook/addon-vitest')) {
              return 'addon-vitest';
            }
            
            // Chromatic addon (separate chunk for external service)
            if (id.includes('@chromatic-com/')) {
              return 'chromatic';
            }
            
            // Testing libraries (separate chunk for dev tools)
            if (id.includes('vitest') || id.includes('playwright')) {
              return 'testing';
            }
            
            // Other vendor libraries (group by size)
            if (id.includes('node_modules')) {
              // Large libraries get their own chunks
              if (id.includes('prop-types')) return 'prop-types';
              if (id.includes('lodash')) return 'lodash';
              
              // Group smaller libraries
              return 'vendor';
            }
          },
          // Best practice: Descriptive chunk names for better debugging
          chunkFileNames: 'chunks/[name]-[hash].js',
          entryFileNames: 'entries/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]'
        },
        // Best practice: Enable tree shaking and optimize bundle
        treeshake: {
          moduleSideEffects: false,
          propertyReadSideEffects: false,
          unknownGlobalSideEffects: false
        },
        // Best practice: Preserve only necessary entry signatures
        preserveEntrySignatures: 'strict'
      };
      
      // Best practice: Set reasonable warning limits
      // Note: Storybook chunks are typically 300-800 kB, which is normal
      // Setting to 800 kB provides realistic warnings without false positives
      config.build.chunkSizeWarningLimit = 800;
      
      // Best practice: Enable source maps for debugging (optional)
      config.build.sourcemap = false;
      
      // Best practice: Minify and compress (use esbuild as default, terser as fallback)
      config.build.minify = 'esbuild';
      config.build.esbuild = {
        drop: ['console', 'debugger'],
        pure: ['console.log', 'console.warn', 'console.error']
      };
      
      // Alternative: Use terser for more aggressive minification if needed
      // config.build.minify = 'terser';
      // config.build.terserOptions = {
      //   compress: {
      //     drop_console: true,
      //     drop_debugger: true
      //   }
      // };
    }
    
    return config;
  }
};
export default config;