const Card = ({ data }) => {
  return (
    <>
      <img src={data.src} alt="" className="card-img" />
      <div className="card-body">
        <h5>{data.title}</h5>
      </div>
    </>
  );
};

export default Card;
