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
.move-animation {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  user-select: none;
  font-family: 'Raleway', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f0f0;
  cursor: url('https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png') 39 39,
    auto;
}

.draggable-main {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  user-select: none;
  font-family: 'Raleway', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f0f0;
}

.content {
  position: relative;
  width: 320px;
  height: 240px;
}

.content > div {
  position: absolute;
  width: 320px;
  height: 90px;
  overflow: visible;
  pointer-events: auto;
  transform-origin: 50% 50% 0px;
  border-radius: 5px;
  color: white;
  line-height: 90px;
  padding-left: 32px;
  font-size: 14.5px;
  background: lightblue;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.content > div:nth-child(1) {
  background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
}
.content > div:nth-child(2) {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}
.content > div:nth-child(3) {
  background: linear-gradient(135deg, #5ee7df 0%, #b490ca 100%);
}
.content > div:nth-child(4) {
  background: linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%);
}

@-webkit-keyframes show {
  100% {
    opacity: 1;
    transform: none;
  }
}

@keyframes show {
  100% {
    opacity: 1;
    transform: none;
  }
}
@-webkit-keyframes fading {
  from {
      opacity: 0;
  }
  to {
       opacity: 1;   
  }
}
@-moz-keyframes fading {
  from {
      opacity: 0;
  }
  to {
       opacity: 1;   
  }
}

@keyframes fading {
  from {
      opacity: 0;
  }
  to {
       opacity: 1;   
  }
}
.searchbar-nav {
  -webkit-animation: fading ease-in 1s;
  animation: fading ease-in 1s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
}

.searchbar-menu {
  top: 100%;
    z-index: 999;
}

.navbar .navbar-toggler:focus {

  box-shadow: 0 !important; 
}
`;

export default GlobalStyle;
