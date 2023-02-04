import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <Wrapper>
      <div className="nav">
        <div className="nav-head">
          <h3>Navbar</h3>
        </div>
        <div className="nav-comps">
          <div>Logout</div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @media screen and (max-width: 600px) {
    .nav {
      width: 100%;
    }
  }
  .nav {
    height: 10vh;
    display: flex;
    background-color: #78c5b7;
  }
  .nav-head {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .nav-comps {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;
export default Navbar;
