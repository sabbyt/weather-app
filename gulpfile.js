const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

gulp.task('lint', () => {
  return gulp.src(['**/*.js', '!**/node_modules/**/*'])
    .pipe(eslint({ //eslint-disable-line
      'rules': {
        'indent': [2, 2],
        'quotes': [2, 'single'],
        'semi': [2, 'always'],
        'no-console': 0,
        'max-len': 0,
        'no-undef': 0,
        'curly': 0,
        'consistent-return': 0,
        'no-empty-label': 0,
        'space-after-keywords': 0,
        'space-before-keywords': 0,
        'space-return-throw-case': 0,
        'require-jsdoc': 0,
        'no-path-concat': 0
      },
      'env': { //eslint-disable-line
        'es6': true,
        'node': true,
        'browser': true,
        'mocha': true
      },
      'extends': 'eslint:recommended'
    }))
    .pipe(eslint.format());
});

gulp.task('default', ['lint'], () => {
  return gulp.src(['test/**/*test.js'], {read: false})
    .pipe(mocha())
    .once('error', () => {
      process.exit(1);
    })
    .once('end', () => {
      process.exit();
    });
});
