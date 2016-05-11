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
  },
  consulting: (req, res) => {
    res.view(null, {
        bodyClass: 'consulting'
    });
  },
  technology: (req, res) => {
    res.view(null, {
        bodyClass: 'technology'
    });
  },
  advertising: (req, res) => {
    res.view(null, {
        bodyClass: 'advertising'
    });
  },
  sendEmail: (req, res) => {
    var e = req.body.emaildata;
    var str = 'Lead information: '+"\n\n";
    _.each(e, (v, k) => {
      str += v+': '+k+"\n";
    });
    var data = {
      from: 'UI to UX Inc. <noreply@uitoux.com>',
      to: 'collab@uitoux.com',
      subject: 'Visitor Inquiry - UI to UX Inc.',
      text: str
    };
     
    mailgun.messages().send(data, function (error, body) {
      res.json(body);
    });
  }
};
