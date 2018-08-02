
exports.showFirstPage = function (req, res) {
	res.sendFile('index.html', { root: './public' });;
};

