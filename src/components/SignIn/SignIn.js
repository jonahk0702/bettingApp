import React from "react";
import "./SignIn.css";
class signIn extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="mw5 mw7-ns center br5 black">
        <br />
        <br />

        <article className="br3 ba --black-10 w-100 w-100-m center shadow-5 solidBR">
          <main className="pa4 black-80 tc">
            <div className="">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 ph0 mh0">Sign In</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">
                    Password
                  </label>
                  <input //onChange={this.onPasswordChange}
                    className="b pa2 input-reset ba bg-transparent hover-bg-black w-100"
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
              </fieldset>
              <div className="">
                <input //onClick={this.onSubmitSignIn}
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Sign in"
                />
              </div>
              <div className="lh-copy mt3">
                <p
                  onClick={() => this.props.onSwitch()}
                  className="f6 link dim black db pointer"
                >
                  Register
                </p>
              </div>
            </div>
          </main>
        </article>
      </div>
    );
  }
}

export default signIn;
