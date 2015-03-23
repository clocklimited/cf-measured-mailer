var measuredMailer = require('..')

function noop(cb) {
  cb()
}

function noopStop() {
  return { stop: noop }
}

describe('cf-measured-mailer', function () {

  it('should return expected interface', function (done) {
    measuredMailer({ send: noop }, { createTimer: noopStop })
    done()
  })

})
