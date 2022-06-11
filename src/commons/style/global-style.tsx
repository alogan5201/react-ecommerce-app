import { createGlobalStyle } from './styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  button.profile-dropdown:after {
    opacity: 0 !important;
    display: none !important
  }
  .profile-dropdown.btn-check:active+.profile-dropdown.btn-light:focus, .profile-dropdown.btn-check:checked+.profile-dropdown.btn-light:focus, .profile-dropdown.btn-light.active:focus, .profile-dropdown.btn-light:active:focus, .profile-dropdown.show>.profile-dropdown.btn-light.dropdown-toggle:focus {
    box-shadow: 0 !important
}
button.profile-dropdown:active, button.profile-dropdown:focus {
  box-shadow: 0 !important
}
.profile-dropdown.btn-check:focus+.btn, .profile-dropdown.btn:focus {
  outline: 0;
  box-shadow: 0 !important
}
.profile-dropdown.btn-check:focus+.profile-dropdown.btn, .btn:focus {
  outline: 0;
  box-shadow: 0 !important
}
.profile-dropdown.btn-check:focus+.btn, .profile-dropdown.btn:focus {
  outline: 0;
  box-shadow: 0 !important;
}
button#dropdownMenuButton1:focus {
  border: 0 !important;
  box-shadow: none !important;
}
.icon-check {
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  text-align: center;
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;
  margin-top: -75px;
  background: #4caf50;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  animation: fall-in 0.75s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.icon-check span, .icon-check span {
  postion: absolute;
  font-size: 4em;
  color: #fff;
  text-align: center;
  padding-top: 20px;
}
.glyphicon {
  position: relative;
  top: 1px;
  display: inline-block;
  font-family: 'Glyphicons Halflings';
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

export default GlobalStyle;
