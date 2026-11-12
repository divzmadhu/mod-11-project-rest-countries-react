export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <h1>Where in the world?</h1>

                <button className="theme-toggle">
                    <i className="fa-regular fa-moon"></i>
                    <span>Dark Mode</span>
                </button>
            </div>
        </header>
    );
}

