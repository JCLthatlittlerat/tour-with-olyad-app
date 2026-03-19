import React from "react";
import Tour from "./Tour";

function Tours({ data, removeOneItem, refresh }) {
  if (!data || data.length === 0) {
    return (
      <div className="App">
        <h1>No Tours Left</h1>
        <button
          className="refresh-btn"
          onClick={() => {
            refresh();
          }}
        >
          Refresh
        </button>
      </div>
    );

    // return(

    //   <h1>No Data found, <br /> Please check your Internet connection!</h1>
    // )
  }

  return (
    <main>
      <header>
        <h1 className="our-tours">Our Tours</h1>
        <div className="underline"></div>
      </header>
      <section className="cards grid grid-cols-2 sm:bg-red-50 border">
        {data.map((tour) => {
          return (
            <Tour
              key={tour.id}
              id={tour.id}
              image={tour.image}
              info={tour.info}
              name={tour.name}
              price={tour.price}
              removeTour={removeOneItem}
            />
          );
        })}
        {/* !data ? <Loading/> : data.map((data) =>{ return (<Tour key={data.id} info ={data} /> )}) */}
      </section>
    </main>
  );
}

export default Tours;
