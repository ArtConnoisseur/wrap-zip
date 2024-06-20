import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import "./globals.css";

export const metadata = {
  title: "WrapZip",
  description: "",
};

export default function RootLayout({ children }) {
  console.log(children);
  
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/b8d18904b7.js" crossorigin="anonymous" defer></script>
      </head>
      <body>{children}</body>
    </html>
  );
}

