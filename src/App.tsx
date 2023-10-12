import ReactMarkdown from "react-markdown";
import markdown from "./assets/markdown.md?raw";

function App() {
    return (
        <>
            <p className="m-4 text-xl font-bold underline">Portfolio</p>
            <ReactMarkdown className="markdown">{markdown}</ReactMarkdown>
        </>
    );
}

export default App;
