const pageDir = require('../../utils/folders');

exports.getHome = (req, res, next) => {
    res.render(pageDir.userDir + 'homepage', {
        pageTitle: 'Home',
        path: '/'
    });
};