module.exports = {
    routes:[
        {
            method: 'GET',
            path: 'articles/:slug',
            handler: 'article.findOne',
            config: {
                auth: false,
            }

        }
    ]
}


