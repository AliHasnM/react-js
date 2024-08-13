import Card from "./components/Card";
import "./index.css";
import flokiImage from "../public/images/floki.jpeg";
import helgaImage from "../public/images/helga.jpeg";
const App = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-2xl bg-slate-300 w-[300px] text-center py-1 font-bold">
          TailwindCSS
        </h1>
        <Card
          actorName="Floki"
          actorAbout="A brilliant and eccentric shipbuilder, Floki is known for his deep connection to the Norse gods, often seen as a visionary with a wild and unpredictable nature."
          actorImage={flokiImage}
          btnText="Click Me"
        />
        <Card
          actorName="Helga"
          actorAbout="Helga is a gentle and compassionate woman, deeply devoted to her husband Floki, balancing his chaotic energy with her calm and nurturing presence."
          actorImage={helgaImage}
        />
      </div>
    </>
  );
};

export default App;
