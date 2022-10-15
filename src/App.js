import UncontrolledExample from "./components/UncontrolledExample";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const user = { firstName: "Ibrahim", lastName: "Maghraoui" };
  const firstName = user.firstName;
  const lastName = user.lastName;
  return (
    <>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="titleRed">
          My name is : {firstName} {lastName}
        </h1>
        <UncontrolledExample />
      </div>
      <div className="iframe">
        <iframe
          width={320}
          height={240}
          controls
          src="https://www.youtube.com/embed/0OLIink2zvs"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </>
  );
}

export default App;
