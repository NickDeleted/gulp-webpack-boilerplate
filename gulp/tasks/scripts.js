import gulp from 'gulp';
import plumber from 'gulp-plumber';
import browserSync from 'browser-sync';
import webpack from 'webpack-stream';

import { webpackConfig } from '../../webpack.config.js';
import { paths } from '../config/paths.js';

const scripts = async (isDev) => {
  return gulp.src(paths.src.scripts)
    .pipe(plumber())
    .pipe(webpack({ config: await webpackConfig(isDev) }))
    .pipe(gulp.dest(paths.build.scripts))
    .pipe(browserSync.stream());
}

export { scripts };
