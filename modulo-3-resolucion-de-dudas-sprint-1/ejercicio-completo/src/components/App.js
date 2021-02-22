import "./App.scss";
import ComponentChildren from "./ComponentChildren";
import ShowCard from "./ShowCard";

function App() {

  const apiData = 
    {
      "id":318,
      "name":"Community",
      "language":"English",
      "genres":["Comedy"],
      "status":"Ended",
      "premiered":"2009-09-17",
      "schedule":{"time":"","days":["Tuesday"]},
      "image":{
        "medium":"https://static.tvmaze.com/uploads/images/medium_portrait/2/5134.jpg",
        "original":"https://static.tvmaze.com/uploads/images/original_untouched/2/5134.jpg"
      },
      "summary":"<p><b>Community </b>is a smart, exuberant comedy that is consistently ranked as one of the most inventive and original half-hours on television. This ensemble comedy centers around a tight-knit group of friends who all met at what is possibly the world's worst educational institution - Greendale Community College.</p>"
    };

  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">Buscador de series</h1>
      </header>

      <main className="main">
        <section className="sectionTwo js__containerShows">
          <ul className="sectionTwo__ul">
            <ShowCard
              id={apiData.id}
              imgSrc={apiData.image.medium}
              name={apiData.name}
              >
                <ComponentChildren/>
            </ShowCard>
            
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
