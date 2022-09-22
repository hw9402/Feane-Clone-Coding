import './App.css';
import Header from './Header'
import Section from './Section'


function App() {
  return (
    <div className='container'>
      <div className='bg-img'>
        <img src='https://technext.github.io/feane/images/hero-bg.jpg' alt=''/>
      </div>
      <Header/>
      <Section/>
    </div>
  );
}

export default App;
