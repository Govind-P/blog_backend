import fetch from 'node-fetch';
import _ from 'lodash';

const searchstat = (req, res, next) => {
    const options = {
        method: 'GET',
        headers: {
            'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'
        }
    };

    fetch('https://intent-kit-16.hasura.app/api/rest/blogs', options)
        .then(response => response.json())
        .then(response => {
            req.blogData = response;
            const searchBlogs = _.filter(response.blogs, blog => blog.title.toLowerCase().includes(req.query.query.toLowerCase()));
            req.searchBlogs = searchBlogs;
            next();
        })
        .catch(err => res.status(500).json({ error: 'Something went wrong! \nPlease Check the connection!' }));
};

const cacheTTL = 10000;
export default searchstat;



