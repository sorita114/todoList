const expresss = require('express');
const path = require('path');
const router = expresss.Router();

router
	.get('/chapter02', (req, res) => {
		"use strict";

		res.sendFile(path.join(__dirname, '../views/examples/chapter02.html'));
	})
	.get('/chapter02/:id', (req, res) => {
		"use strict";

		res.sendFile(path.join(__dirname, '../views/examples/chapter02_' + req.params.id +'.html'));
	})
	.get('/chapter03', (req, res) => {
		"use strict";

		res.sendFile(path.join(__dirname, '../views/examples/chapter03.html'));
	})
	.get('/chapter03/:id', (req, res) => {
		"use strict";

		res.sendFile(path.join(__dirname, '../views/examples/chapter03_' + req.params.id +'.html'));
	})
	.get('/chapter04', (req, res) => {
		"use strict";

		res.sendFile(path.join(__dirname, '../views/examples/chapter04.html'));
	})
	.get('/chapter04/search', (req, res) => {
		"use strict";

		res.sendFile(path.join(__dirname, '../views/examples/chapter04.html'));
	});

module.exports = router;