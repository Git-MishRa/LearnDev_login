import React from "react";
import styled from "styled-components";

function Loginform() {
  return (
    <PageCenter>
      <Wrapper>
        <div className="login">
          <div className="head">
            <h1>LOGIN</h1>
          </div>
          <form className="loginform">
            <div className="form-control">
              <input
                className="inputtag"
                type="text"
                placeholder="Your Username"
              />
            </div>
            <div className="form-control">
              <input
                className="inputtag"
                type="text"
                placeholder="Your Password"
              />
            </div>
            <div className="form-control">
              <button className="cssButton" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </Wrapper>
    </PageCenter>
  );
}

const PageCenter = styled.div`
  display: flex;
  height: 90vh;
  justify-content: center;
  align-items: center;
  background-color: #245e50;
`;

const Wrapper = styled.div`
  .login {
    height: 400px;
    width: 350px;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    background-color: #e0f3ee;
    border: #c2cecb;
    border-radius: 5px;
  }
  .loginform {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    background-color: #d3e8e3;
    margin: 20px;
    padding: 20px;
    border: solid #d3e8e330;
    border-radius: 5px;
  }
  .form-control {
    display: flex;
    justify-content: center;
    height: 30px;
    align-items: center;
    border: #c2cecb66;
    border-radius: 5px;
  }
  .head {
    display: flex;
    align-self: center;
    color: #245e50;
  }
  .inputtag {
    width: 80%;
    height: 100%;
    border: #c2cecb66;
    border-radius: 3px;
    background-color: #d3e8e3;
    text-align: center;
  }
  .cssButton {
    color: #245e50;
    width: 70px;
    /* background-color: #245e50; */
  }
  /* @media (min-width: 1200px) {
    .login {
      width: 90%;
    }
  } */

  /* @media (min-width: 800px) {
    .login {
      width: 100%;
    }
  } */
`;

export default Loginform;
