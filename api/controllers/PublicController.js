/**
 * PublicController
 *
 * @description :: Server-side logic for managing publics
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	home: (req, res) => {
		res.view(null, {
        bodyClass: 'homepage'
   	});
  },
  contact: (req, res) => {
    res.view(null, {
        bodyClass: 'contact-us'
    });
  },
  creative: (req, res) => {
    res.view(null, {
        bodyClass: 'creative'
    });
  },
  insights: (req, res) => {
    res.view(null, {
        bodyClass: 'insights'
    });
  }
};
