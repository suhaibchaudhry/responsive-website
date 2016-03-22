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
        }
};

