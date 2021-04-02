import { useState, createRef } from "react";
import { QRCode } from "react-qrcode-logo";

import { useScreenshot } from "use-react-screenshot";

// import Screenshot from "react-screenshots";

function ImagetoPrint(source) {
  return (
    "<html><head><scri" +
    "pt>function step1(){\n" +
    "setTimeout('step2()', 10);}\n" +
    "function step2(){window.print();window.close()}\n" +
    "</scri" +
    "pt></head><body onload='step1()'>\n" +
    "<img src='" +
    source +
    "' /></body></html>"
  );
}

function PrintImage(source) {
  console.log(source);
  var Pagelink = "about:blank";
  var pwa = window.open(Pagelink, "_new");
  pwa.document.open();
  pwa.document.write(ImagetoPrint(source));
  pwa.document.close();
}

function Scrnshot(params) {
  const [data, setData] = useState("");
  const ref = createRef(null);
  const [image, takeScreenshot] = useScreenshot();
  const getImage = () => takeScreenshot(ref.current);
  return (
    <div>
      <div ref={ref}>
        <QRCode
          value={data}
          size={300}
          qrStyle="dots"
          fgColor="#111"
          logoWidth={50}
          logoHeight={50}
          logoOpacity={1}
          logoImage="https://shsteels.com/logo_round_border.png"
        />
        <h3>SH steels our product is valuable</h3>
      </div>

      <br />
      <input value={data} onChange={e => setData(e.target.value)} />
      <button
        style={{ marginBottom: "10px" }}
        onClick={e => {
          getImage();
          setTimeout(function () {
            PrintImage(image);
          }, 1000);
        }}
      >
        print
      </button>
    </div>
  );
}

export default Scrnshot;
