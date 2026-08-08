function Footer() {
    const CurrentDate = new Date().getFullYear()
    return(
        <footer>
            <p>&copy; {CurrentDate} My Website Name</p>
        </footer>
    );
}
 
export default Footer