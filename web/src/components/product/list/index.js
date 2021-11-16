const Product = () => {
    return(
        <div className="col-12">
            <div className="row">
                <div className="col-3">
                    <img src="https://staticpetz.stoom.com.br/fotos/1562333988694.jpg" className="img-fluid"/>
                </div>
                <div className="col-6">
                    <small>
                        <b>Nome do Produto</b>
                    </small>
                </div>
                <div className="col-3">
                    <button className="btn btn-secondary rounded-circle">-</button>
                </div>
            </div>
        </div>
    )
}

export default Product;