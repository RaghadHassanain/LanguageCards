import './Card.css';

const Card = ({ name, img, options }) => {
  return (
    <div >
      
    <div className="card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <ul>
        {options.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Card;


