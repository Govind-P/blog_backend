import fetch from 'node-fetch';
import _ from 'lodash';

let cachedResult = null;
const blogstat = async (req, res, next) => {
    const options = {
        method: 'GET',
        headers: {
            'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'
        }
    };
    try {
        if (cachedResult && Date.now()-cachedResult.fetchtime < cacheTTL) {
            req.blogData = cachedResult.response;
            req.totalBlogs = cachedResult.totalBlogs;
            req.longestTitleBlog = cachedResult.longestTitleBlog;
            req.privacyBlogs = cachedResult.privacyBlogs;
            req.uniqueTitles = cachedResult.uniqueTitles;
            next();
        } else {
            const response = await fetch('https://intent-kit-16.hasura.app/api/rest/blogs', options);
            const responseData = await response.json();

            const totalBlogs = Object.keys(responseData.blogs).length;
            const longestTitleBlog = _.maxBy(responseData.blogs, blog => blog.title.length);
            const privacyBlogs = _.filter(responseData.blogs, blog => blog.title.toLowerCase().includes('privacy')).length;
            const uniqueTitles = _.uniq(_.map(responseData.blogs, 'title'));

            req.blogData = responseData;
            req.totalBlogs = totalBlogs;
            req.longestTitleBlog = longestTitleBlog;
            req.privacyBlogs = privacyBlogs;
            req.uniqueTitles = uniqueTitles;

            cachedResult = {
                response: responseData,
                totalBlogs,
                longestTitleBlog,
                privacyBlogs,
                uniqueTitles,
                fetchtime: Date.now()
            };
            next();
        }
    } catch (err) {
        res.status(500).json({ error: 'Something went wrong! \nPlease Check the connection!' });
        next();
    }
};

const cacheTTL = 10000;

export default blogstat;
