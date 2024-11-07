// src/App.jsx
import Product from "./Product";
import { Books, RandomText, Chease } from "./example";

export default function App() {
  return (
    <div>
           
      <Books />
      <RandomText>
        <h2>lalalalalala</h2>
        <p>tertetetet</p>
      </RandomText>
      <Chease>
        <h2>Rotmander</h2>
        <p>Italian</p>
      </Chease>
      <Product name="Gagaga" price={128} />
    </div>
  );
}
