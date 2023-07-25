import { TodoList } from "./components/TodoList";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO</h1>
      </header>
      <main>
        <TodoList />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
