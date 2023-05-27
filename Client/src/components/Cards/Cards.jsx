import Card from '../Card/Card';
import './Cards.css'

export default function Cards(props) {
   const { characters, onClose } = props
   return (
      <div className='cards-container'>{
         characters.map(character => {
            return (
               <Card
               key={character.id}
               id={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               image={character.image}
               onClose={onClose}
              />
              )
              })
            }
      </div>
   )
}
