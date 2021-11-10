import logo from './logo.svg';
import './App.css';
import PersonCard from './Components/PersonCard'


const personArray = [
  {"firstName":"Jane", "lastName": "Doe", "age": 45, "hairColor":"Black"},
  {"firstName":"John", "lastName": "Smith", "age": 88, "hairColor":"Brown"},
  {"firstName":"Millard", "lastName": "Fillmore", "age": 50, "hairColor":"Black"},
  {"firstName":"Maria", "lastName":"Smith", "age": 62, "hairColor":"Brown"}

]

function App() {
  return (
    <div className="App">
      {personArray.map(person => {
        return <PersonCard header = {person.lastName +", " + person.firstName} firstName = {person.firstName} lastName = {person.lastName} age ={person.age} hairColor = {person.hairColor}/>
      })}

    </div>
  );
}
        


export default App;
