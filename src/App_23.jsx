import { ToastContainer } from 'react-toastify';
import { nanoid } from 'nanoid';
import Form_23 from './Form_23';
import Items_23 from './Items_23';
import { useState } from 'react';
const defaultItems = [
  { id: nanoid(), title: 'walk the dog', isDone: false },
  { id: nanoid(), title: 'wash dishes', isDone: false },
  { id: nanoid(), title: 'drink coffee', isDone: true },
  { id: nanoid(), title: 'take a nap', isDone: false },
];
const App_23 = () => {
  const [items, setItems] = useState(defaultItems);
  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form_23 />
      <Items_23 items={items} />
    </section>
  );
};
export default App_23;
