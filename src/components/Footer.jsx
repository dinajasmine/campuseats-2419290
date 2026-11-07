function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className="footer">
        <p>&copy; {new Date().getFullYear()} CampusEats &middot; BICS 3301, IIUM</p>
        {/* &copy; = simbol ©, getFullYear() = current year (auto update) */}
        </footer>
    )
}

export default Footer