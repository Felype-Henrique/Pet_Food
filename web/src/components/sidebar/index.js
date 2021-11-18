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
                <div className="justify-content-between d-flex texto">
                  <b className="inline-block">Total</b>
                <h3 className="inline-block">R$ 90,00</h3>  
                </div>
                <button className="btn btn-block btn-lg btn-primary rounded-0 h-40 w-100 align-items-center">Finalizar Compra</button>
            </div>
            
        </div>
      </div>
    </Dock>
  );
};

export default Sidebar;
