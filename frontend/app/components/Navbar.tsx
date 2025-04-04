import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    return (
        <nav className="flex justify-between p-4 bg-gray-100 dark:bg-gray-900">
            <h1 className="text-lg font-bold">My Site</h1>
            <ThemeToggle />
        </nav>
    );
}