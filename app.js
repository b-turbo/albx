const express = require('express');
const app = express();
const router = require('./router.js');
app.listen(8080, () => {
    console.log('http://127.0.0.1:8080');
});

app.use('/assets', express.static('assets'));
app.use('/uploads', express.static('uploads'));

app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");

// app.get('/', (req, res) => {
//     res.render('index.ejs')
// })

// app.get('/admin', (req, res) => {
//     res.render('admin/index.ejs');
// })
// app.get('/categories', (req, res) => {
//     res.render('admin/categories.ejs');
// })
// app.get('/comments', (req, res) => {
//     res.render('admin/comments.ejs');
// })
// app.get('/nav-menus', (req, res) => {
//     res.render('admin/nav-menus.ejs');
// })
// app.get('/password-reset', (req, res) => {
//     res.render('admin/password-reset.ejs');
// })
// app.get('/post-add', (req, res) => {
//     res.render('admin/post-add.ejs');
// })
// app.get('/posts', (req, res) => {
//     res.render('admin/posts.ejs');
// })
// app.get('/profile', (req, res) => {
//     res.render('admin/profile.ejs');
// })
// app.get('/settings', (req, res) => {
//     res.render('admin/settings.ejs');
// })
// app.get('/slides', (req, res) => {
//     res.render('admin/slides.ejs');
// })
// app.get('/users', (req, res) => {
//     res.render('admin/users.ejs');
// })
app.use(router)