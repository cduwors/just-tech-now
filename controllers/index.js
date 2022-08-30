const router = require('express').Router();

const apiRoutes = require('./api');

//front end adds
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
//front end add end


router.use('/api', apiRoutes);

//if we make a request to any endpoint that doesn't exist, we'll receive a 404 error indicating we have requested an incorrect resource, another RESTful API practice
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;