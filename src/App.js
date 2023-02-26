import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={BackComponent}>
        <Home />
      </ErrorBoundary>
    </div>
  );
}

const BackComponent = ({ error, resetErrorBoundary }) => {
  return (<div role="alert" style={{ color: "red" }}>
    <p>{error.message}</p>
    <button onClick={resetErrorBoundary}>Reset!</button>
  </div>)
}

export default App;