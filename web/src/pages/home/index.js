import './styles.css'
import Header from '../../components/header';
import Petshop from '../../components/petshop';

const Home = () =>{
    return (
        <div className="h-100">
            <Header/>
            <div className="container-fluid petshop-list-container">
                <div className="col-12 px-4 text-center">
                    <h5>Mais próximos de você</h5>
                </div>
                <ul className="col-12 petshop-list">
                    <Petshop/>
                </ul>
            </div>
        </div>
    )
}

export default Home;