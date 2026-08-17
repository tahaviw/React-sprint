import Card from './Card.jsx'

function CardList() {
    return(
        <div className='card-list'>
            <Card title="Taha Belghiti" >I'm a software Dev interested in AI</Card>
            <Card title="Molay Ahmed" >I'm a little boy I love Cars</Card>
            <Card title="Salsabil" >I'm the middle child</Card>
            <Card title="Special Card">
                <p>This paragraph is passed as children</p>
                <button className="btn">Click me</button>
            </Card>
        </div>
    );
}

export default CardList