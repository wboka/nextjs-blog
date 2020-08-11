export default (req, res) => {
	const {
		query: { word },
	} = req;

	res.end(word.toUpperCase());
};
