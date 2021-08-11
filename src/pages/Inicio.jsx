import { useEffect, useState } from "react";
import Card from "../components/Card";
import Loading from "../components/Loading";

const Inicio = () => {
  const [data, setData] = useState({});
  const [localGifts, setLocalGifts] = useState([]);
  const [load, setLoad] = useState(false);
  const [bloquear, setBloquear] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("gifs")) {
      setLocalGifts(JSON.parse(localStorage.getItem("gifs")));
    }
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("gifs", JSON.stringify(localGifts));
  }, [localGifts]);

  const fetchData = async () => {
    setBloquear(false);
    setLoad(true);
    try {
      const res = await fetch(
        "https://api.giphy.com/v1/gifs/random?tag=cat&api_key=ZcP0p3LbYNXF4DQlcNQ8jqy8kcrlNJVt"
      );
      const { data } = await res.json();

      setData({
        id: data.id,
        title: data.title,
        src: data.images?.downsized_medium.url,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  };

  const guardarGift = () => {
    setLocalGifts([...localGifts, data]);
    setBloquear(true);
  };

  return (
    <div className="row align-items-center inicio-central">
      <div className="col-12">
        <button
          className="btn btn-success btn-sm me-2 align-middle"
          disabled={bloquear}
          onClick={guardarGift}
        >
          <i className="bi bi-heart-fill"></i>
          {bloquear ? " Guardado" : " Guardar"}
        </button>
        <button
          className="btn btn-primary btn-sm align-middle"
          onClick={fetchData}
        >
          <i className="bi bi-card-image"></i> Siguiente{" "}
          <i className="bi bi-arrow-right"></i>
        </button>
        <div className="row justify-content-center mt-2">
          <div className="col-12 col-md-5">
            <div className="card">
              {load ? <Loading /> : <Card data={data} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
