import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.themoviedb.org/3/movie/550?api_key=2e4ae5c75cd2edc8a208bd921ff797fa',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        headers: {
          'accept': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTRhZTVjNzVjZDJlZGM4YTIwOGJkOTIxZmY3OTdmYSIsInN1YiI6IjY2MzM1MGU4YWQ1OWI1MDEyODZkMjk0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vZ6hstm8BK4gLfHvq8k28SKgPwTrzKnznB1i5AdXm_k'
        }
      }
    },
  },
});
