const searchStat= (req, res) => {
    const searchBlogs = req.searchBlogs;
    res.json({
        searchBlogs,
    });
}

export default searchStat;

