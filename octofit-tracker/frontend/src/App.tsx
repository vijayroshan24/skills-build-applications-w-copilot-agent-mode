import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [backendStatus, setBackendStatus] = useState('Checking...')

  useEffect(() => {
    // Check backend connection
    fetch('/api/health')
      .then(res => res.json())
      .then(data => setBackendStatus('Connected'))
      .catch(() => setBackendStatus('Disconnected'))
  }, [])

  return (
    <>
      <div>
        <h1>OctoFit Tracker</h1>
        <p>Backend Status: {backendStatus}</p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
