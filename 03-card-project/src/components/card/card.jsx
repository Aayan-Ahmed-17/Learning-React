function Card({title , description, src}) {
  return (
    <>
      <div className="card">
        <img src={src} style={{
           width: "200px",
           objectFit: "cover"
        }}/>
        <p className="title">{title}</p>
      </div>
    </>
  );
}

export default Card;
