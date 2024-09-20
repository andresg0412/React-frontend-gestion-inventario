export default function LayoutDashboard({ children }) {
    return (
        <div className="containerDashboard">
            <main className="mainDashboard">
                <header>
                    <nav>
                        <a href="/">Home</a>
                        <a href="/login">Login</a>
                        <a href="/about">About</a>
                    </nav>
                </header>
                {children}</main>
        </div>
    );
}