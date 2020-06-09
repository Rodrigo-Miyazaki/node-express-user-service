/* eslint-disable radix */
// eslint-disable-next-line new-cap
var router = require("express").Router();

router.use("/", require("./users"));

// eslint-disable-next-line
router.use(function(err, req, res, next){
  if(err.name === "ValidationError"){
    return res.status(422).json({
      errors: Object.keys(err.errors).reduce(function(errors, key){
        const index = err.errors.indexOf(key, 0);
        errors[parseInt(index)] = err.errors[parseInt(index)].message;

        return errors;
      }, {})
    });
  }

  return next(err);
});

module.exports = router;