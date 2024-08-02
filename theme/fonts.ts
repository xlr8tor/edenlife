import { Inter, PT_Serif } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const fonts = {
  heading: ptSerif.style.fontFamily,
};

export default fonts;
