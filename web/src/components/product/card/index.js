import "./styles.css";

const Product = () => {
  return (
    <div className="product col-3">
      <img
        src="https://www.petlove.com.br/images/products/247712/product/Ra%C3%A7%C3%A3o_Affinity_PetCare_GranPlus_Choice_Frango_e_Carne_para_C%C3%A3es_Adultos.jpg?1633376271"
        className="img-fluid align-center"
      />
      <button className="btn btn-primary rounded-circle ">+</button>
      <h4>
        <label className="badge badge-primary">R$ 90,00</label>
      </h4>
      <small>
        <b>Ração GranPlus Choice Frango e Carne para Cães Adultos</b>
      </small>
      </div>
  );
};

export default Product;
