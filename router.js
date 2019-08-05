const express = require('express');
const router = express.Router();

const pagesController = require('./controllers/pagesController.js')


router.get('/', pagesController.getIndexPage)
    .router.get('/detail', pagesController.getDetailPage)
    .router.get('/list', pagesController.getListPage)
    .router.get('/admin/index', pagesController.getAdminIndexPage)
    .router.get('/admin/categories', pagesController.getAdminCategoriesPage)
    .router.get('/admin/comments', pagesController.getAdminCommentsPage)
    .router.get('/nav-menus', pagesController.getAdminMenusPage)
    .router.get('/admin/password-reset', pagesController.getAdminPasswordPage)
    .router.get('/admin/post-add', pagesController.getAdmPostAddPage)
    .router.get('/admin/posts', pagesController.getAdminPostsPage)
    .router.get('/admin/profile', pagesController.getAdminProfilePage)
    .router.get('/admin/settings', pagesController.getAdmSettingsPage)
    .router.get('/admin/slides', pagesController.getAdmSlidesPage)
    .router.get('/admin/users', pagesController.getAdminUsersPage)

module.exports = router;