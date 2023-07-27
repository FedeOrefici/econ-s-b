const express = require("express")
const app = express()
const mercadopago = require("mercadopago")

mercadopago.configure({
	access_token: 'TEST-5337660667507993-063016-fe8dc4ede6de445aeb5fe9112a122af5-1308401162'
})

app.post("/create_preference", (req, res) => {
	let preference = {
		items: [
			{
				title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity),
			}
		],
		back_urls: {
			"success": "http://localhost:5173/",
			"failure": "http://localhost:5173/",
			"pending": ""
		},
		auto_return: "approved",
	};

	mercadopago.preferences
    .create(preference)
	.then(function (response) {
		res.json({id: response.body.id});
	}).catch(function (error) {
		console.log(error);
	})
})

module.exports = app;