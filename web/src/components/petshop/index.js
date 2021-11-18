import './styles.css';

const Petshop = () => {
  return (
    <li className="petshop d-inline-block">
        <div className="d-inline-block">
      <img
        src="https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png"
        className="img-fluid petshop-image"
      />
        </div>
        <div className="d-inline-block">
      <b>PetLove</b>
      <div className="petshop-infos">
        <span className="mdi mdi-star"></span>
        <text>
          <b>2,8</b>
        </text>
        <span className="mdi mdi-cash"></span>
        <text>$$$</text>
        <span className="mdi mdi-crosshairs-gps"></span>
        <text>2,9 Km</text>
      </div>
      <label className="badge badge-primary">Frete Grátis</label>
      </div>
    </li>
  );
};

export default Petshop;
