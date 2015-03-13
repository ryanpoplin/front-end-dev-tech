(function() {
    "use strict";
    var express = require('express'),
        cors = require('cors'),
        bodyParser = require('body-parser'),
        _ = require('underscore'),
        json = require('./contacts.json'),
        app = express();
    app.set('port', process.env.PORT || 3500);
    app.use(bodyParser.urlencoded());
    app.use(cors());
    app.use(bodyParser.json());
    var router = new express.Router();
    router.get('/', function (req, res) {
        "use strict";
        res.json(json);
    });
    router.post('/', function (req, res) {
        "use strict";
        if (req.body.name && req.body.email) {
            json.push(req.body);
            res.json(json);
        } else {
            res.join(500, {
                error: 'There was an error...'
            });
        }
    });
    router.put('/:id', function (req, res) {
        "use strict";
        if (req.params.name && req.body.email) {
            _.each(json, function (elem, index) {
                if (elem.Id === req.params.id) {
                    elem.name = req.body.name;
                    elem.email = req.body.email;
                }
            });
            res.json(json);
        } else {
            res.join(500, {
                error: 'There was an error...'
            });
        }
    });
    router.delete('/:id', function (req, res) {
        "use strict";
        var indexToDelete = -1;
        _.each(json, function (elem, index) {
            if (elem.Id === req.params.id) {
                indexToDelete = index;
            }
        });
        if (~indexToDelete) {
            json.splice(indexToDelete, 1);
        }
        res.json(json);
    });
    app.use('/', router);
    var server = app.listen(app.get('port'), function () {
        "use strict";
        console.log('Server up: http://localhost:' + app.get('port'));
    });
}());