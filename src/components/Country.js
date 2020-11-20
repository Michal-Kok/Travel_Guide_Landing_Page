import '../styles/Countries.css';


const Country = ({ name, description, src }) => {


    return (
        <div className="country welcomeAnimation">
            <h3 className="country__title">{name}</h3>
            <p className="country__description">{description}</p>
            <img className="country__photo" src={src} alt="obrazek" />
        </div>
    )
}

export default Country;