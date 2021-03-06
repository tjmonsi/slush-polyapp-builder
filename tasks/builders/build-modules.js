const gulp = require('gulp')
const data = require('../../utils/build')
const copy = require('../../utils/module-copy')

gulp.task('build-modules', (done) => {
  const dest = data.buildDest + '/modules'
  copy(gulp.src(data.utils.modules), data, dest, done)
})
