import React from "react";
import "../App.css";

function Home() {
  return (
    <div className="container">
      <h1>About Me</h1>
      <div className="top-about">
        <p>
          <span className="bold">Full Name:</span> Addison Hill
        </p>
        <p>
          <span className="bold">Job:</span> Freelancer
        </p>
        <p>
          <span className="bold">Location:</span> Evansville, IN
        </p>
        <p>
          <span className="bold">Status:</span> Available
        </p>
        <p>
          <span className="bold">Email:</span> adddison.hill@gmail.com
        </p>
        <p>
          <span className="bold">Zoom:</span> adddison.hill@gmail.com
        </p>
      </div>
      <div className="about-description">
        <h2>I'm a Web Developer</h2>
        <p>
          Hi, Im Addison. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Pellentesque sit amet volutpat erat, ac venenatis lectus.
          Maecenas vitae ante et nunc luctus bibendum. Vivamus eu risus iaculis,
          feugiat velit vitae, faucibus risus. Ut in facilisis tellus. Donec at
          metus quis nisl euismod porta. Quisque nec dignissim massa. Sed
          rhoncus, ipsum non convallis tempus, magna arcu interdum arcu, sit
          amet eleifend tortor augue non diam. Donec dictum vulputate dictum.
        </p>
        <p>
          Quisque sit amet nisi suscipit, elementum diam ut, sodales ligula.
          Nullam pulvinar ipsum vitae cursus porta. Aliquam augue arcu,
          dignissim sed lobortis nec, tristique id leo. Sed efficitur vel magna
          a ornare. In iaculis semper fermentum. Vivamus et turpis mattis,
          tincidunt quam at, interdum libero. Sed vitae mi eget nunc convallis
          aliquet fringilla vitae mauris. Morbi maximus lectus at accumsan
          maximus.
        </p>
      </div>
    </div>
  );
}

export default Home;
