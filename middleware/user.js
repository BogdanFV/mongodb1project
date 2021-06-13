const User = require('../models/user')

module.exports = async function(req, res, next) {
  if (!req.session.user) {
    return next()
  }
  res.locals.isAdministrator = req.session.user.isAdmin
  console.log(res.locals.isAdministrator)

  req.user = await User.findById(req.session.user._id)
  next()
}