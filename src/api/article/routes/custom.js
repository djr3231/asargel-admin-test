module.exports = {
    routes:[
        {
            method: 'GET',
            path: 'article/:slug',
            handler: 'article.findOne',
            config: {
                auth: false,
            }

        }
    ]
}