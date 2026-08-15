import Card from './Card.jsx'

function CardList() {
    return(
        <div className='card-list'>
            <Card title="Taha Belghiti" desciption="I'm a software Dev interested in AI"/>
            <Card title="Molay Ahmed" desciption="I'm a little boy I love Cars"/>
            <Card title="Salsabil" desciption="I'm the middle child"/>
        </div>
    );
}

export default CardList