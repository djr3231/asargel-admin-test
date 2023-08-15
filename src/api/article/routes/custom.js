module.exports = {
    routes:[
        {
            method: 'GET',
            path: 'article/:slug_2',
            handler: 'article.findOne',
            config: {
                auth: false,
            }

        }
    ]
}