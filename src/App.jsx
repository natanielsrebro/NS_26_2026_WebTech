import technologies from './components/komp';
import InfoBox from './components/InfoBox';
import TechnologyList from './components/komp';

const App = () => {
  const technologies = ['React', 'JavaScript', 'CSS', 'TypeScript'];

  const handleTechClick = (techName) => {
    console.log(`Kliknięto technologię: ${techName}`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Wybierz technologię, aby zalogować ją w konsoli:</h2>
      
      <div>
        
        {technologies.map((tech, index) => (
          <InfoBox 
            key={index} 
            name={tech} 
            onClick={() => handleTechClick(tech)} 
          />
        ))}
        
      </div>
      <div>
        <TechnologyList/>
      </div>
    </div>
    
  );
  
  
};

export default App;