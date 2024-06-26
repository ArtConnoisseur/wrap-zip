import './order-summary.css'; 

function LabelData({ label, data, isTotal }) {
    let totalClass='';
    
    if (isTotal) {
        totalClass='total-label';
    }

    return (
        <div className={('order-summary-data ' + totalClass)}>
            <span>{label}:</span>
            <span>₹ {data}</span>
        </div>
    );
}

export function OrderSummary({ subtotal, taxes, discounts }) {
    const dataPoints = {
        'Subtotal': subtotal,
        'Taxes': taxes,
        'After Tax': subtotal + taxes,
        'Discounts': discounts,
        'Total': subtotal + taxes - discounts
    };

    return (
        <div className='order-summary-container'>
            <div className='order-summary-header'>
                <h4>Order Summary</h4>
            </div>
            <div className='order-summary-info'>
                {Object.keys(dataPoints).map((key, index) => (
                    <LabelData key={index} label={key} data={dataPoints[key].toFixed(2)} isTotal={key==="Total"}/>
                ))}
            </div>
        </div>
    );
}
