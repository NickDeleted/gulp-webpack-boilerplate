import gulp from 'gulp';

import { paths } from '../config/paths.js';

const html = () => {
  return gulp.src(paths.src.html)
    .pipe(gulp.dest(paths.buildFolder));
}

export { html };