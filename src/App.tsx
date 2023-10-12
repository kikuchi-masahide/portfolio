import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <p className="h1 underline">Portfolio</p>
            <p>{count}</p>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
                className="btn btn-primary"
            >
                push
            </button>
        </>
    );
}

export default App;
