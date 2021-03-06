import classes from './App.module.css';
import Counter from './components/Counter.jsx';


function App() {
  return (
    <div className={classes.App}>
        <h1 className={classes.title}>Counter</h1>
        <Counter />
    </div>
  );
}

export default App;
