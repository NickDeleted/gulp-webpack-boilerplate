import gulp from 'gulp';

import { paths } from '../config/paths.js';

const images = () => {
  return gulp.src(paths.src.images)
    .pipe(gulp.dest(paths.build.images))

}

export { images };