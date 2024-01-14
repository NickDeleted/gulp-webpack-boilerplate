import gulp from 'gulp';
import { paths } from './gulp/config/paths.js';

import { server } from './gulp/tasks/server.js';
import { reset } from './gulp/tasks/reset.js';

import { html } from './gulp/tasks/html.js';
import { styles } from './gulp/tasks/styles.js';
import { scripts } from './gulp/tasks/scripts.js';
import { fonts } from './gulp/tasks/fonts.js';
import { images } from './gulp/tasks/images.js';



const isBuild = process.argv.includes('--build');
const handleHTML = html.bind(null, isBuild);
const handleStyles = styles.bind(null, isBuild);
const handleScripts = scripts.bind(null, !isBuild);
const handleImages = images.bind(null, isBuild);

function watcher() {
  // gulp.watch(paths.watch.static, copy);
  gulp.watch(paths.watch.html, handleHTML);
  gulp.watch(paths.watch.styles, handleStyles);
  gulp.watch(paths.watch.scripts, handleScripts);
  gulp.watch(paths.watch.images,handleImages);
}
const devTasks = gulp.parallel(handleHTML, handleStyles, handleScripts, handleImages);
const mainTasks = gulp.series(fonts, devTasks)

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);

gulp.task('default', dev);

export { dev, build };