import notfound from "../images/notfound.svg"
export default function Notfound() {
return (
  <>
    <div className="container">
      <h2>Error 404:Page Not Found</h2>
      <img src={notfound} alt="notFound"></img>
    </div>
  </>
);
}