import './review.css';

export function Review({name='Reviewer Name', review='Review Text'}) {
    return (
        <div className='reviews'>
             <b>{name}</b><br></br>
             <br></br>
            {review}
        </div>
    )
}