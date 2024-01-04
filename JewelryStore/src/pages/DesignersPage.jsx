import Banner from "../components/Banner";
import greenRing from "../assets/rings-green-display.jpg";
import DesignerDisplay from "../components/DesignerDisplay";
import drop from "../assets/ring-drop.jpeg";
import green from "../assets/ring-drop-green.jpeg";
import eternity from "../assets/ring-eternity.jpeg";
import fashion from "../assets/ring-fashion.jpeg";
import plug from "../assets/ring-ball.jpeg";
import bird from "../assets/ring-bird.jpeg";
import dragon from "../assets/ring-dragon.jpeg";
import gRing from "../assets/ring-green.jpeg";
import necklace from "../assets/necklace-gold.jpeg";
import neckHeart from "../assets/necklace-heart.jpeg";
import neckFashion from "../assets/necklace-fasion.jpeg";

import "../styles/designerpage.css";
function DesignersPage() {
  const sterlingProductList = [
    { prodImg: drop, prodName: "Drop In Love", prodPrice: "$3,234" },
    { prodImg: green, prodName: "Drop In Green", prodPrice: "$5,655" },
    { prodImg: eternity, prodName: "Eternity", prodPrice: "$1,221" },
    { prodImg: fashion, prodName: "Let Go", prodPrice: "$3,456" },
  ];
  const opProductList = [
    { prodImg: bird, prodName: "Bird In Love", prodPrice: "$3,234" },
    { prodImg: dragon, prodName: "Bird In Love", prodPrice: "$3,234" },
    { prodImg: gRing, prodName: "Bird In Love", prodPrice: "$3,234" },
  ];

  const gemsProductList = [
    { prodImg: necklace, prodName: "Bird In Love", prodPrice: "$3,234" },
    { prodImg: neckHeart, prodName: "Bird In Love", prodPrice: "$3,234" },
    { prodImg: neckFashion, prodName: "Bird In Love", prodPrice: "$3,234" },
  ];

  return (
    <div className="designer-main-container">
      <Banner
        img={greenRing}
        title="Designers"
        desc="At the intersection of imagination and expertise, our designers bring you jewelry that transcends the ordinary. Uncover the beauty of our thoughtfully crafted designs."
        side={true}
        position="0 47%"
      />
      <div className="designer-desc-container">
        <h1 className="font4 f2">Designer Experience</h1>
        <p className="f-8 m0 font2">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
          Curabitur vel libero nec nisi suscipit pharetra. Duis vel risus eu sem
          fringilla euismod at at tortor. Nullam nec urna in arcu tristique
          facilisis. Sed fringilla velit at turpis aliquam, nec vestibulum
          libero ullamcorper.
        </p>
        <div className="designer-underline"></div>
      </div>
      <DesignerDisplay
        name="Sophia Sterling"
        desc="  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
          Curabitur vel libero nec nisi suscipit pharetra. Duis vel risus eu sem
          fringilla euismod at at tortor. Nullam nec urna in arcu tristique
          facilisis. Sed fringilla velit at turpis aliquam, nec vestibulum
          libero ullamcorper."
        bigImg={plug}
        productList={sterlingProductList}
        top={true}
      />
      <DesignerDisplay
        name="Oliver Opulence"
        desc="  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
          Curabitur vel libero nec nisi suscipit pharetra. Duis vel risus eu sem
          fringilla euismod at at tortor. Nullam nec urna in arcu tristique
          facilisis. Sed fringilla velit at turpis aliquam, nec vestibulum
          libero ullamcorper."
        bigImg={dragon}
        productList={opProductList}
      />
      <DesignerDisplay
        name="Isabella Gems"
        desc="  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
          Curabitur vel libero nec nisi suscipit pharetra. Duis vel risus eu sem
          fringilla euismod at at tortor. Nullam nec urna in arcu tristique
          facilisis. Sed fringilla velit at turpis aliquam, nec vestibulum
          libero ullamcorper."
        bigImg={neckFashion}
        productList={gemsProductList}
        bottom={true}
      />
    </div>
  );
}

export const designersRoute = {
  element: <DesignersPage />,
};
