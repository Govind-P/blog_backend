# blog_backend
Backend for fetching blog details and doing sum analytical functions.

Developed a blog analytics and search tool using Express.js and Lodash.The goal is to create a middle ware that analyzes the data retrieved from a third-party blog API (provided via the given curl request) and provides insightful statistics to clients.
1. **Data Retrieval**:

   - Use Express to create a route at `/api/blog-stats`.

   - When a GET request is made to this route, your middleware should make the provided curl request to fetch the blog data.

curl --request GET \
  --url https://intent-kit-16.hasura.app/api/rest/blogs \
  --header 'x-hasura-admin-secret: 32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'

2. **Data Analysis**:

   - After fetching the data, use Lodash to performed the following analytics:

     - Calculate the total number of blogs fetched.

     - Find the blog with the longest title.

     - Determine the number of blogs with titles containing the word "privacy."

     - Create an array of unique blog titles (no duplicates).

3. **Response**:

   - Respond to the client with a JSON object containing the following statistics:

     - Total number of blogs.

     - The title of the longest blog.

     - Number of blogs with "privacy" in the title.

     - An array of unique blog titles.

4. **Blog Search Endpoint**:

   - Create an additional route at `/api/blog-search`.

   - This route should accept a query parameter, e.g., `/api/blog-search?query=privacy`.

   - Implement a search functionality that filters the blogs based on the provided query string (case-insensitive).


6. **Additional**:

   - Implement a caching mechanism using  to store the analytics results and search results for a certain period. If the same requests are made within the caching period, return the cached results instead of re-fetching and re-analyzing the data.

