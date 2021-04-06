import Feedback from './components/Feedback';
import Section from './components/Section';
import './App.css';

const App = () => {
  return (
    <div className="container">
    <Section title={'Please leave feedback'}>
      <Feedback />
    </Section>
    </div>
  );
}

export default App;
