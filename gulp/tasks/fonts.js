import gulp from 'gulp';

import { paths } from '../config/paths.js';

const fonts = () => {
  return gulp.src(paths.src.fonts)
  .pipe(gulp.dest(paths.build.fonts))
}

export { fonts };