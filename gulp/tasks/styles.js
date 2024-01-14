import gulp from 'gulp';
import plumber from 'gulp-plumber';
import browserSync from 'browser-sync';

import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cleanCss from 'gulp-clean-css';
import postcssPresetEnv from 'postcss-preset-env';
import sortMediaQueries from 'postcss-sort-media-queries';
import sourcemaps from "gulp-sourcemaps";
import rename from 'gulp-rename';
import gulpIf from 'gulp-if';

import { paths } from '../config/paths.js';

const sass = gulpSass(dartSass);

const styles = (isBuild) => {
  const plugins = [
    autoprefixer(),
    sortMediaQueries({
      sort: 'desktop-first'
    }),
    postcssPresetEnv()
  ];
  return gulp.src(paths.src.styles)
    .pipe(plumber())
    .pipe(gulpIf(!isBuild, sourcemaps.init()))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulpIf(isBuild, postcss(plugins)))
    //.pipe(gulp.dest(paths.build.styles))
    .pipe(gulpIf(isBuild, cleanCss()))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulpIf(!isBuild, sourcemaps.write('.')))
    .pipe(gulp.dest(paths.build.styles))
    .pipe(browserSync.stream());
}

export { styles };