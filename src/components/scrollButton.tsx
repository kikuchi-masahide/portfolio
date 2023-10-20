export default function ScrollButton() {
    const onclick = () => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div
            className="border border-gray-400 rounded-full bg-gray-200 opacity-50 p-2 w-12 h-12 fixed bottom-4 right-4 text-sm flex items-center justify-items-center"
            onClick={onclick}
        >
            <p className="w-full h-full text-center p-1">top</p>
        </div>
    );
}
