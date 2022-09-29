import './App.css';
import Travel from './components/Travel/Travel';

function App() {
  return (
    <div className="App">
        <Travel></Travel>
        <h1 className='question-title'>Important Question and Answer About React</h1>
        <div className='ans-cart'>
            <h2>1. How does react work?</h2>
            <p>React reads these objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM. So we'll have trees of objects on the virtual DOM and trees of objects on the real DOM. React automatically updates the associated DOM element when we change data on a React element.</p>
        </div>
        <div className='ans-cart'>
            <h2>2. What are the difference between Props and State?</h2>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
        <div className='ans-cart'>
            <h2>1. How does react work?</h2>
            <p>React reads these objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM. So we'll have trees of objects on the virtual DOM and trees of objects on the real DOM. React automatically updates the associated DOM element when we change data on a React element.</p>
        </div>
    </div>
  );
}

export default App;
