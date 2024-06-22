import './index.css'

const TravelPlaceList = props => {
  const {travelDetails} = props
  const {name, imageUrl, description} = travelDetails
  return (
    <li className="place-container">
      <img src={imageUrl} alt={name} className="img" />
      <h1 className="heading">{name}</h1>
      <p className="description">{description}</p>
    </li>
  )
}

export default TravelPlaceList
