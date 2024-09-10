import React from "react";
// import "./Gallery.css";

export const images = [
  "https://images.unsplash.com/photo-1649640547107-6bf197e3a30f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByaXZhdGUlMjBiYXJ0ZW5kaW5nfGVufDB8MHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1649640547107-6bf197e3a30f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByaXZhdGUlMjBiYXJ0ZW5kaW5nfGVufDB8MHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1649640547107-6bf197e3a30f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByaXZhdGUlMjBiYXJ0ZW5kaW5nfGVufDB8MHwwfHx8MA%3D%3D"
];

export const Gallery = () => {
  return (
    <section className="gallery container">
      <h2 className="text-center mb-5">Our Craft</h2>
      <div className="row">
        {images.map((img, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <img
              src={img}
              alt="Craft Cocktails"
              className="img-fluid rounded shadow"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
