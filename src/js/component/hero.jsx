
import React from "react";
const Jumbotron = () => {
  return (
    <div className="p-4 shadow-4 rounded-3 mb-4 border solid black mx-3ˇ" style={{ backgroundColor: "hsl(0, 0%, 94%)"}}>
      <h1 style={{ fontSize: '4rem' }}>A Warm Welcome</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil officia ipsam provident libero aliquid temporibus est blanditiis explicabo reprehenderit velit? Obcaecati earum inventore consectetur maiores ullam quis sapiente sint tempora?
      </p>
      <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary">
        Call to action!
      </button>
    </div>
  );
};
export default Jumbotron;