import "./featured.css";
import React from 'react';

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Goa</h1>
          <h2>4273 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://awesomebooksforlife.files.wordpress.com/2013/07/amsterdam2_2516696b.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Amsterdam</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://media.istockphoto.com/photos/tea-plantations-picture-id1160316337?b=1&k=20&m=1160316337&s=170667a&w=0&h=j1Z1Z316HDQqKO6EzhI8mtkcwVT_ZSWzjpU5r-AIhXU="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Munnar</h1>
          <h2>276 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;