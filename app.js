// ALL IMPORTED MODULES
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const port = Math.floor(Math.random() * 10000) + 1240;
const PORT = 3000;


// REQUIRED STUFF
app.use('/static', express.static(path.join(__dirname, '/static')));
app.set('views', __dirname + '/template');
app.engine('html', require('ejs').renderFile);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ALL RESPONSE STUFFS
// Home
app.route('/')
	.get((req, res) => {
		res.status(200).render('home.html');
	})
	.post((req, res) => {
		let user = req.body;
		res.status(203).render('home.html');
	})

app.route('/account')
  .get((req, res)=>{
    res.status(200).render('account.html');
  })

// Feature
app.route('/feature')
	.get((req, res) => {
		res.status(200).render('feature.html');
	})
	.post((req, res) => {
		let user = req.body;
		res.status(203).render('feature.html');
	})
// admin on feature page
app.route('/feature/admin')
	.get((req, res) => {
		res.status(200).render('admin.html')
	})
	.post((req, res) => {
		res.status(203).render('admin.html')
	})

// Join
app.route('/join')
	.get((req, res) => {
		res.status(200).render('join.html');
	})
	.post((req, res) => {
		let user = req.body;
		
		fs.writeFileSync('QnA.txt', `Username: ${user.username} \nEmail: ${user.mail} \nTopic: ${user.topic} \nQuestion: ${user.comment}`)
		res.status(203).render('join.html');
	})


// Gallery
app.route('/gallery')
	.get((req, res) => {
		res.status(200).render('gallery.html');
	})
	.post((req, res) => {
		let user = req.body;
		res.status(203).render('gallery.html');
	})

// Gallery upload
app.route('/gallery/upload')
	.get((req, res) => {
		res.status(200).render('upload.html');
	})
	.post((req, res) => {
		let user = req.body;
		res.status(203).render('upload.html');
	})

// Privacy 
app.route('/privacy')
	.get((req, res) => {
		res.status(200).render('privacy.html');
	})
	.post((req, res) => {
		let user = req.body;
		res.status(203).render('privacy.html');
	})

// login 
app.route('/login')
	.get((req, res) => {
		res.status(200).render('login.html');
	})
	.post((req, res) => {
		let user = req.body;
		res.status(203).render('login.html');
	})

// register
app.route('/register')
	.get((req, res) => {
		res.status(200).render('register.html');
	})
	.post((req, res) => {
		let user = req.body;
		fs.writeFileSync('register.txt', `Username: ${user.username} \nEmail: ${user.email} \nPassword: ${user.password}`);
		res.status(203).render('register.html');
	})


// Not Found
app.get('/*', (req, res) => {
	res.status(404).render('notfound.html');
})

// SERVER LISTENING APP
app.listen(PORT, () => {
	console.log(`Server is running on Port https://localhost:${PORT}`)
})