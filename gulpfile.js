const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('node-sass');

// Task to process scss into css
gulp.task('sass', ()=>{
    return gulp.src('src/styles/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/styles/css'));
})

// Task to process css into global --webkit and --ms
gulp.task('autoprefixer', ()=>{
    return gulp.src('src/styles/css/**/*.css')
    .pipe(autoprefixer(
        {
            browsers: ['last 2 versions'],
            cascade: false
        }
    ))
    .pipe(gulp.dest('src/styles/build'));
})

// Task to build synchronous 
gulp.task('default', ()=>{
    gulp.watch('src/styles/scss/**/*.scss', gulp.series(['sass','autoprefixer']))
});
