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
    var e = req.body;
    var str = 'Lead information: '+"\n\n";
    //_.each(e, (v, k) => {
    //  str += v+': '+k+"\n";
    //});
    str += 'Name: '+e.name+"\n";
    str += 'Phone: '+e.phone+"\n";
    str += 'E-mail: '+e.email+"\n";
    str += 'Message: '+e.message+"\n";

    var data = {
      from: 'UI to UX Inc. <noreply@uitoux.com>',
      to: 'collab@uitoux.com,asadpakistani@gmail.com,samiwami420@gmail.com,mansoorcollege@gmail.com,pm@uitoux.com',
      subject: 'Visitor Inquiry - UI to UX Inc.',
      text: str
    };
     
    sails.config.mailgun.messages().send(data, function (error, body) {
      res.json(body);
    });
  }
};
