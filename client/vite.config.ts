import { defineConfig, loadEnv } from 'vite'
import solid from 'vite-plugin-solid'



export default ({mode}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    plugins: [solid()],
    build: {
      sourcemap: true
    },
    server: { 
      host: "0.0.0.0",
      hmr:{
        host: 'localhost',
        clientPort: Number(process.env.VITE_OUTER_PORT_FRONTEND),
      },
      port: Number(process.env.VITE_INNER_PORT_FRONTEND_DEV),
      watch: {
        usePolling: true
      },
    },
  })
}
