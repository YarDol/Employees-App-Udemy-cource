import './employees-list-item.css';


const EmployeeListItem = (props) => {
        const {name, salary, onDelete, onToggleIncrease, onToggleRise, increase, like} = props;
        let className;

        if(like === false){
            className = "list-group-item d-flex justify-content-between";
        }else{
            className = "list-group-item d-flex justify-content-between like"
        }
        
        if(increase){
            className += ' increase';
        }

        return (
            <li className={className}>
                <span className="list-group-item-label" onClick={onToggleRise}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
}

export default EmployeeListItem;