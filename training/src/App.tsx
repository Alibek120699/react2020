import React, { useState } from 'react';

import Modal from './components/Modal';
import './App.css';

function App() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [counter, setCounter] = useState(0);
  const [open, setOpen] = useState(true);

  const incrementCounter = () => setCounter(counter+1);

  const confirm = () => setIsConfirmed(true);

  const closeModal = () => setOpen(false);

  const openModal = () => setOpen(true);

  return (
    <div className="App">
      <div>Counter: {counter}</div>
      <div>Confirmed: {isConfirmed ? "Registered" : "Not Registered"}</div>
      <button onClick={openModal}>open modal</button>
      { open ? (
      <Modal>
        <div className="modal">
          <button onClick={incrementCounter}>
            counter++
          </button>

          <button onClick={confirm}>
            confirm
          </button>

          <button onClick={closeModal}>
            close
          </button>
        </div>
      </Modal>
      ) : null }
    </div>
  );
}

export default App;
