import React from "react";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
  object
} from "@storybook/addon-knobs";

//import styles from "../src/index.scss";
//import Popup from "../src/Popup";

import PopupElement from "./stories/PopupElement";
import PopupFunc from "./stories/PopupFunc";
import PopupInputFocus from "./stories/PopupInputFocus";
import Modal from "./stories/Modal";
import Menu from "./stories/Menu";

storiesOf("React Popup", module)
  .addDecorator(withKnobs)
  .add("simple tooltip  ", () => <PopupElement />)
  .add("function as child ", () => <PopupFunc />)
  .add("on input focus ", () => <PopupInputFocus />)
  .add("Menu use case ", () => <Modal />)
  .add("modal use case ", () => <Menu />);
