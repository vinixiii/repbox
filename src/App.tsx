import { env } from './infra/env';

function App() {
  return (
    <>
      <h1>repbox</h1>

      <h2>APP_TITLE: {env.VITE_APP_TITLE}</h2>
    </>
  );
}

export default App;
