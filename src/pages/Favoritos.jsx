import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Favoritos = () => {
    const router = useHistory();

    const [data, setData] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("gifs")) {
            setData(JSON.parse(localStorage.getItem("gifs")));
        }
    }, []);

    const deleteGift = (id) => {
        const arrayFiltrado = data.filter((item) => item.id !== id);
        setData(arrayFiltrado);
        localStorage.setItem("gifs", JSON.stringify(arrayFiltrado));
    };

    return (
        <>
            <h1>Favoritos</h1>
            {data.length === 0 && (
                <>
                    <p className="lead">🤷‍♀️ Aún no has guardado Gif 🤷‍♂️</p>
                    <button
                        className="btn btn-primary"
                        onClick={() => router.push("/")}
                    >
                        Volver
                    </button>
                </>
            )}
            <div className="row">
                {data.map(({ id, title, src }) => (
                    <div className="col-12 col-sm-6 offset-sm-3 mb-3" key={id}>
                        <div className="card">
                            <img src={src} alt="" className="card-img-top" />
                            <div className="card-body">
                                <h5>{title}</h5>
                                <button
                                    className="btn btn-dark"
                                    onClick={() => deleteGift(id)}
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Favoritos;
