

function basicAuth (req, res, next) {
    console.log(req.signedCookies);
    if (!req.session.user) {
        var authHeader = req.headers.authorization;
        if (!authHeader) {
            var err = new Error('You are not authenticated!');
            res.setHeader('WWW-Authenticate', 'Basic');              
            err.status = 401;
            next(err);
            return;
        }
        var auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
        var user = auth[0];
        var pass = auth[1];
        if (user == 'admin' && pass == 'password') {
            res.cookie('user','admin',{signed: true});
            next(); // authorized
        } else {
            var err = new Error('You are not authenticated!');
            res.setHeader('WWW-Authenticate', 'Basic');              
            err.status = 401;
            next(err);
        }
      }
      else {
          if (req.signedCookies.user === 'admin') {
              next();
          }
          else {
              var err = new Error('You are not authenticated!');
              err.status = 401;
              next(err);
          }
      }
    }

  module.exports = basicAuth;