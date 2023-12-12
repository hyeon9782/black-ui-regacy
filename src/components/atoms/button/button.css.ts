import { style } from "@vanilla-extract/css";

export const basicButton = style({
  backgroundColor: "white",
  borderStyle: "none",
  ":hover": {
    backgroundColor: "red",
  },
  ":disabled": {
    // opacity: "70%",
  },
});
