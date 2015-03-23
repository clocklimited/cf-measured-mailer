module.exports = function (mailer, metrics) {

  function send (mail, cb) {

    var timer = metrics.createTimer('mailer', mail.subject, 'send')
    mailer.send(mail, function(err, res, body) {
      timer.stop()
      cb(err, res, body)
    })

  }

  return { send: send, options: mailer.options }
}
