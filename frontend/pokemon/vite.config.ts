import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // definindo a porta , e se o host for true, o projeto fica em um endereço público
  preview: {
    host: true,
    port: 8082,
  },
});
