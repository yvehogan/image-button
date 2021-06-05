import image from './img/pic04.jpg';
import image2 from './img/pic06.jpg';
import DynamicImage from './DynamicImage';


function App() {
  return (
    <>
    <h1> Hello world</h1>
    <DynamicImage w='100'  h='100' source={image} />
    <DynamicImage w='100'  h='100' source={image2} />
    </> 
  );
}
export default App;
