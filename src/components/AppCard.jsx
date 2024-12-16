import style from "./AppCard.module.css";

const AppCard = ({title, image, content, tags, published}) => {
  if(!published) {
    return null;
  }
    const imagePath = `/images/${image}`

  //tags
  


  return (
    
      <div className={style.card}>
      <div className="cardTop">
        <img src={imagePath} alt="" />
      </div>
      <div className={style.cardBottom}>
        <h4 className={style.title}>{title}</h4> 
        {tags.map((curTag, index) => <span key={index}>{curTag}</span>)}
        
        <p>
          {content}
        </p>
        
        <button className={style.btn}>LEGGI DI PIU</button>
      </div>
      </div>
    
  );
};

export default AppCard;
