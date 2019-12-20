import { css } from 'lit-element';

export default css`
:host {
  display: inline-block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
  font-family: inherit;
}

.battery-low {
  display: inline-block;
  width: 60px;
  height: 64px;
  text-align: center;
  color: #43f578;
  background: rgb(218, 99, 20);
  font-size: 30px;
  line-height: 64px;
}

.battery-medium {
  display: inline-block;
  width: 60px;
  height: 64px;
  text-align: center;
  color: #43f578;
  background: rgb(199, 241, 82);
  font-size: 30px;
  line-height: 64px;
}

.battery-high {
  display: inline-block;
  width: 60px;
  height: 64px;
  text-align: center;
  color: #43f578;
  background: rgb(42, 223, 81);
  font-size: 30px;
  line-height: 64px;
}

.battery-container {
  display: inline-block;
  width: 180px;
  height: 80px;
  text-align: center;
  border-color: #245a34;
  border-style: solid;
  border-width: medium;
  font-size: 30px;
  line-height: 64px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}`;
