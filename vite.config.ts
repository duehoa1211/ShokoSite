import { vitePlugin as remix } from '@remix-run/dev';
import { installGlobals } from '@remix-run/node';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

installGlobals();

export default defineConfig({
  plugins: [
    remix({
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route('/about', 'routes/about/About.tsx');
          route('/contributors', 'routes/contributors/Contributors.tsx');
          route('/downloads', 'routes/downloads/Downloads.tsx', () => {
            route(':id', 'routes/downloads/DownloadPageLevel1.tsx');
            route(':id/:subid', 'routes/downloads/DownloadPageLevel2.tsx');
          });
          route('blog', 'routes/blog/Blog.tsx');
          route('*', 'routes/404.tsx', { id: '404' });
        });
      }
    }),
    tsconfigPaths()
  ]
});
