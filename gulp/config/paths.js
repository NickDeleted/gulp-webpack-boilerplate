const buildFolder = './build';
const srcFolder = './src';

const paths = {
  build: {
    styles: `${buildFolder}/assets/styles/`,
    scripts: `${buildFolder}/assets/scripts/`,
    fonts: `${buildFolder}/assets/fonts/`,
    images: `${buildFolder}/assets/images/`,
  },
  src: {
    html: `${srcFolder}/pages/*.html`,
    styles: `${srcFolder}/styles/**/*.scss`,
    scripts: `${srcFolder}/scripts/**/*.js`,
    fonts: `${srcFolder}/fonts/**/*.*`,
    images: `${srcFolder}/images/**/*.*`,
    svg: `${srcFolder}/images/svg/*.svg`,
  },
  watch: {
    html: `${srcFolder}/pages/**/*.html`,
    styles: `${srcFolder}/styles/**/*.scss`,
    scripts: `${srcFolder}/scripts/**/*.js`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,svg,gif,webp,ico}`
  },
  buildFolder,
  srcFolder
}

export { paths };