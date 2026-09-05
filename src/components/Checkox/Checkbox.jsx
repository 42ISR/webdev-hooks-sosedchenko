const Checkbox = ({ checked, onChange }) => {
    return (
        <span 
            className={`switch${checked ? ' on' : ''}`} 
            onClick={onChange}>
        </span>
    )
};

export default Checkbox;