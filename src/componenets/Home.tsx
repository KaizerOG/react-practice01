import home from "../images/home.svg"
export default function Home(){
  return (
    <>
      <div className="container">
        <h2>First Page of website</h2>
        <img src={home} alt="home" />
      </div>
    </>
  );
}