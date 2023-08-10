// vite.config.ts
import { defineConfig } from "file:///home/qodestackr/Desktop/PROJECTS/PERSONAL/DAZZLE-HR/dazzle_hr_facade/node_modules/vite/dist/node/index.js";
import react from "file:///home/qodestackr/Desktop/PROJECTS/PERSONAL/DAZZLE-HR/dazzle_hr_facade/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@api", replacement: "/src/api" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@constants", replacement: "/src/constants" },
      { find: "@core", replacement: "/src/core" },
      { find: "@layouts", replacement: "/src/layouts" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@types", replacement: "/src/types" }
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9xb2Rlc3RhY2tyL0Rlc2t0b3AvUFJPSkVDVFMvUEVSU09OQUwvREFaWkxFLUhSL2RhenpsZV9ocl9mYWNhZGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3FvZGVzdGFja3IvRGVza3RvcC9QUk9KRUNUUy9QRVJTT05BTC9EQVpaTEUtSFIvZGF6emxlX2hyX2ZhY2FkZS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9xb2Rlc3RhY2tyL0Rlc2t0b3AvUFJPSkVDVFMvUEVSU09OQUwvREFaWkxFLUhSL2RhenpsZV9ocl9mYWNhZGUvdml0ZS5jb25maWcudHNcIjsvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczogW1xuICAgICAgeyBmaW5kOiBcIkBcIiwgcmVwbGFjZW1lbnQ6IFwiL3NyY1wiIH0sXG4gICAgICB7IGZpbmQ6IFwiQGFwaVwiLCByZXBsYWNlbWVudDogXCIvc3JjL2FwaVwiIH0sXG4gICAgICB7IGZpbmQ6IFwiQGFzc2V0c1wiLCByZXBsYWNlbWVudDogXCIvc3JjL2Fzc2V0c1wiIH0sXG4gICAgICB7IGZpbmQ6IFwiQGNvbnN0YW50c1wiLCByZXBsYWNlbWVudDogXCIvc3JjL2NvbnN0YW50c1wiIH0sXG4gICAgICB7IGZpbmQ6IFwiQGNvcmVcIiwgcmVwbGFjZW1lbnQ6IFwiL3NyYy9jb3JlXCIgfSxcbiAgICAgIHsgZmluZDogXCJAbGF5b3V0c1wiLCByZXBsYWNlbWVudDogXCIvc3JjL2xheW91dHNcIiB9LFxuICAgICAgeyBmaW5kOiBcIkBwYWdlc1wiLCByZXBsYWNlbWVudDogXCIvc3JjL3BhZ2VzXCIgfSxcbiAgICAgIHsgZmluZDogXCJAdHlwZXNcIiwgcmVwbGFjZW1lbnQ6IFwiL3NyYy90eXBlc1wiIH0sXG4gICAgXSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsRUFBRSxNQUFNLEtBQUssYUFBYSxPQUFPO0FBQUEsTUFDakMsRUFBRSxNQUFNLFFBQVEsYUFBYSxXQUFXO0FBQUEsTUFDeEMsRUFBRSxNQUFNLFdBQVcsYUFBYSxjQUFjO0FBQUEsTUFDOUMsRUFBRSxNQUFNLGNBQWMsYUFBYSxpQkFBaUI7QUFBQSxNQUNwRCxFQUFFLE1BQU0sU0FBUyxhQUFhLFlBQVk7QUFBQSxNQUMxQyxFQUFFLE1BQU0sWUFBWSxhQUFhLGVBQWU7QUFBQSxNQUNoRCxFQUFFLE1BQU0sVUFBVSxhQUFhLGFBQWE7QUFBQSxNQUM1QyxFQUFFLE1BQU0sVUFBVSxhQUFhLGFBQWE7QUFBQSxJQUM5QztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
