const router = require("express").Router();
const { User, Post } = require("../../models");

// get all users
router.get("/", (req, res) => {
	Post.findAll({
		attributes: ["id", "post_url", "title", "created_at"],
		//include property is like JOIN in SQL
		include: [
			{
				model: User,
				attributes: ["username"],
			},
		],
		// Query configuration
	})
		.then((dbPostData) => res.json(dbPostData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
