

const blogStat= (req, res) => {
    const data=req.blogData;
    const totalBlogs = req.totalBlogs;
    const longestTitle = req.longestTitleBlog.title;
    const privacyBlogsCount = req.privacyBlogs;
    const uniqueTitles = req.uniqueTitles;
    res.json({
        totalBlogs,
        longestTitle,
        privacyBlogsCount,
        uniqueTitles
    });
}

export default blogStat;

