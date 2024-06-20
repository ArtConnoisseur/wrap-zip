export function SectionDivider() {
    const containerStyles = {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        gap: '5px',
        opacity: 0.2
    };

    return (
        <div className="section-divider" style={containerStyles}>
            <i class="fa-solid fa-minus" style={{fontSize: '2rem'}}></i>
            <i className="fa-solid fa-section" style={{fontSize: '2rem'}}></i>
            <i class="fa-solid fa-minus" style={{fontSize: '2rem'}}></i>
        </div>
    )
}