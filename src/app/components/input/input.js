import './input.css';

export function Input({ type, placeholder }) {
    return (
        <div className='input'>
            <input type={type || 'text'} placeholder={ placeholder || ''} />
        </div>
    )
}