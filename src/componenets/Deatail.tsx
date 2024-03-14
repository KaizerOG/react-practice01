import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import blogs from "../data/blog";
import "./Detail.css"

export default function Details() {
  interface Blog {
    id: number;
  }

  const { id } = useParams<{ id: string | undefined }>();

  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    if (id !== undefined) {
      const result = blogs.find((item: Blog) => item.id === parseInt(id));
       console.log(result);
       if(result){
       setTitle(result.title);
       setImg(result.image_url);
       setContent(result.content);
       setAuthor(result.author);
       }
    }
  }, []);
  return (
    <>
      <div className="container">
        <h2 className="title">{title}</h2>
        <img src={img} className="blog-img"/>
        <div className="blod-detail">
          <strong>{author}</strong>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
}
