import React, { useEffect, useState } from "react";
import "./Blog.scss";

const Blog = () => {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    fetch("https://artyss.in/blog/wp-json/wp/v2/posts?per_page=3&_embed")
      .then((response) => response.json())
      .then((data) => setArr(data))
      .catch((error) => console.error("Error fetching media details:", error));
  }, []);
  return (
    <div className="Blog">
      <div className="head">
        <h1>Popular Blog Posts</h1>
        <br />
        <p>Get an insight into the designs and interior solutions in trend!</p>
      </div>
      <br />
      <br />
      <div className="cards">
        {arr?.map((item, index) => {
          return (
            <div className="card" key={item.id}>
              <div style={{overflow: 'hidden'}}>
                <img
                  src={item._embedded["wp:featuredmedia"][0].source_url}
                  alt={item.title.rendered}
                  style={{width: '100%'}}
                />
              </div>
              <br />
              <div>
                <h4>{item.title.rendered}</h4>
                <br />
                <p
                  dangerouslySetInnerHTML={{
                    __html: item.excerpt.rendered.slice(0, 200) + "...",
                  }}
                ></p>
                <br />
                <a href={item.link}>Readmore</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
