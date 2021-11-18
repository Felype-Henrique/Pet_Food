import { useState, useEffect } from "react";
import Dock from "react-dock";

import Product from "../product/list";

import "./styles.css";

const Sidebar = () => {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    window.addEventListener("openCart", () => {
      setOpened(true);
    });
  }, []);

  return (
    <Dock
      isVisible={opened}
      position="right"
      onVisibleChange={(visibled) => {
        setOpened(visibled);
      }}
    >
      <div className="container-fluid h-100 pt-4 sidebar">
        <h5>Minha Sacola (5)</h5>
        <div className="row products">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => (
            <Product />
          ))}
        </div>
        <div className="row footer">
            <div className="col-12">
                <b>Total</b>
                <h3>R$ 90,00</h3>
            </div>
        </div>
      </div>
    </Dock>
  );
};

export default Sidebar;
