import image from "./assets/simple_image.jpg";
import {
  TextBlock,
  TitleBlock,
  ColumnsBlock,
  ImageBlock,
} from "./classes/blocks";

const text =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.";
const colTextArr = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
];

export const model = [
  new TitleBlock("Pure JavaScript Website Builder", {
    tag: "h1",
    styles: {
      background: "linear-gradient(to right, #5e52bb, #493240)",
      padding: "1.3rem",
      color: "#fff",
      "box-shadow": "0px 3px 10px -1px rgba(0,0,0,0.75)",
      "text-align": "center",
    },
  }),
  new ImageBlock(image, {
    styles: {
      "margin-top": "1rem",
    },
    imageStyles: {
      width: "700px",
      height: "auto",
      margin: "auto",
    },
  }),
  new TextBlock(text, {
    tag: "p",
    styles: {
      color: "white",
      margin: "auto",
    },
    rowStyles: {
      background:
        "linear-gradient(90deg, rgba(44,56,145,1) 0%, rgba(54,21,21,1) 91%)",
      "box-shadow": "0px -3px 10px -1px rgba(0,0,0,0.75)",
      padding: "1rem",
      "margin-top": "1rem",
    },
  }),
  new ColumnsBlock(colTextArr, {
    styles: {
      background: "#944336",
      color: "white",
      padding: "1rem",
    },
  }),
];
