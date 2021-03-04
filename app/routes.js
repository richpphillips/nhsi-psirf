// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

router.post('/Q5', function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var doPSII = req.session.data['doPSII']
  
    // Check whether the variable matches a condition
    if (doPSII == "yes"){
      // Send user to next page
      res.redirect('/Q5')
    }
    else {
      // Send user to ineligible page
      res.redirect('/Q6')
    }
  
  })


module.exports = router;
