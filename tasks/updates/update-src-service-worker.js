const gulp = require('gulp')
const copy = require('../../utils/copy')
const dest = './src/service-worker'

gulp.task('update-src-service-worker', (done) => {
  copy(gulp.src(__dirname + '/../../templates/src/service-worker/**'), dest, done)
})
