import './ratings.css';

function Star({ percent }) { 
    return (
        <div className='star-container'>
            <div className='star-rate' style={{width: `${percent}%`}}>

            </div>
        </div>
    )
}

function Stars({ rating }) {
    rating = Number(rating);
    const fullStars = Math.trunc(rating);
    const remaining = rating - fullStars;

    const stars = [];
    for (let i = 0; i < fullStars; ++i) {
        stars.push(<Star percent='100' />);
    }

    stars.push(<Star percent={`${100*remaining}`}/>)

    return (
        <div className='stars'>
            {stars}
        </div>
    )
}

function Bar({ percent }) {
    return (
        <div className='bar-parent-contianer'>
            <div className='bar-contianer'>
                <div className='bar' style={{width: `${percent}%`}}></div>
            </div>
            {`${percent}%`} 
        </div>
    )
}

function RatingBars( {five = 0, four = 0, three = 0, two = 0, one = 0} ) {
    let check = (five + four + three + two + one) === 100;
    
    if (!check) {
        return (
            <>
                There is an error in your percentages, they should add to 100%
            </>
        )
    } else {
        return (
            <div className='rating-bars'>
                <Bar percent={five} />
                <Bar percent={four} />
                <Bar percent={three} />
                <Bar percent={two} />
                <Bar percent={one} />
            </div>
        )
    }
}

export function Ratings({ rating }) {
    return (
        <div className='ratings'>
            Rating:
            <Stars rating={`${rating}`} />
            <div>
                <RatingBars five={90} four={10}/>
            </div>
        </div>
    )
}