import { Icon } from '@/components/ui/Icon';

function PercBar({num, perc}) {
    return (
        <div className='flex gap-4 items-center'>
            {num}
            <div className='bg-gray/40 w-[400px] h-[5px] rounded-sm'>
                <div className='h-full bg-accent rounded-sm' style={{width: `${Math.ceil(perc * 100)}%`}}/>
            </div>
        </div>
    )
}

function RatingBars({ ratings, total }) {

    return (
        <div className='flex flex-col gap-1 pl-[50px] border-l-[1px] border-gray'>
            <PercBar perc={ratings[5]/total} num={5}/>
            <PercBar perc={ratings[4]/total} num={4}/>
            <PercBar perc={ratings[3]/total} num={3}/>
            <PercBar perc={ratings[2]/total} num={2}/>
            <PercBar perc={ratings[1]/total} num={1}/>
        </div>
    )
}

export function Ratings({ ratings }) {
    let total = 0;
    let sum = 0;

    for (let rate in ratings) {
        total += ratings[rate];
        sum += ratings[rate]*rate;
    }

    const avg = Math.ceil(10*sum / total)/10;

    return (
        <div className='flex gap-10'>
            <div className='flex flex-col gap-4 items-center w-fit h-full justify-center'>
                <div className='flex gap-2 items-center'>
                    <span className='text-6xl'>{avg}</span>
                    <Icon name='Star' fill className='text-2xl text-accent'/>
                </div>
                Reviewed by {total} users
            </div>
            <RatingBars ratings={ratings} total={total}/>
        </div>
    )
}