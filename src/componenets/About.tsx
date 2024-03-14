import about from "../images/about.svg";
export default function Home() {
  return (
    <>
      <div className="container">
        <h2>About us</h2>
        <img src={about} alt="about"></img>
      </div>
    </>
  );
}
