const expresss = require('express');
const path = require('path');
const router = expresss.Router();

router.get('/chapter02', (req, res) => {
	"use strict";

	res.sendFile(path.join(__dirname, '../views/examples/chapter02.html'));

}).get('/chapter03', (req, res) => {
	"use strict";

	res.sendFile(path.join(__dirname, '../views/examples/chapter03.html'));
}).get('/chapter04', (req, res) => {
	"use strict";

	res.sendFile(path.join(__dirname, '../views/examples/chapter04.html'));
});

module.exports = router;