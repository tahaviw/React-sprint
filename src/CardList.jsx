import Card from './Card.jsx'

function CardList() {
    return(
        <div className='card-list'>
            <Card title="Taha Belghiti" children="I'm a software Dev interested in AI"/>
            <Card title="Molay Ahmed" children="I'm a little boy I love Cars"/>
            <Card title="Salsabil" children="I'm the middle child"/>
            <Card title="Special Card">
                <p>This paragraph is passed as children</p>
                <button>Click me</button>
            </Card>

        </div>
    );
}

export default CardList