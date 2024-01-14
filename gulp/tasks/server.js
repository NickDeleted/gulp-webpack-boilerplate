import browserSync from 'browser-sync';

import { paths } from '../config/paths.js';

const server = () => {
  browserSync.init({
    server: {
      baseDir: paths.buildFolder,
    },
    logLevel: 'info',
    cors: true,
    notify: true,
    port: 3000,
  });
  browserSync.watch(paths.buildFolder + '/**/*.*', browserSync.reload);
}

export { server };