import blogs from "../data/blog";
import "./Blog.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Blogs() {
    interface Blog {
      id: number;
      title: string;
      image_url: string;
      content: string;
      author: string;
    }
  const [search, setSearch] = useState("");
  const [filterFind, setFilterFind] = useState<Blog[]>([]);
  useEffect(
    () => {
      const result = blogs.filter((item) => item.title.includes(search));
      console.log(result)
      setFilterFind(result)
    },
    [ search ]
  );
  return (
    <>
      <div className="blogs-container">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Find the Article"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <article>
          {filterFind.map((item) => (
            <Link to={`/blog/${item.id}`} key={item.id}>
              <div className="card">
                <h2>{item.title}</h2>
                <p>{item.content.substring(0, 299)}</p>
                <hr />
              </div>
            </Link>
          ))}
        </article>
      </div>
    </>
  );
}
