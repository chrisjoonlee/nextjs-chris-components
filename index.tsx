// dev/index.tsx
import ReactDOM from "react-dom/client";
import Button from "./components/Button";

const App = () => (
    <div className="p-8 space-y-4">
        <Button
            text="Test"
            onClick={() => { }}
        />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);