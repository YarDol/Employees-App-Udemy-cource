import './employees-list-item.css';
import { Component } from 'react';


class EmployeeListItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            increase: false,
            like: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }));
    }

    onLike = () => {
        this.setState(({like}) => ({
            like: !like
        }));
    }

    render(){
        const {name, salary, onDelete} = this.props;
        const {increase, like} = this.state;
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
                <span className="list-group-item-label" onClick={this.onLike}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onIncrease}>
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
}

export default EmployeeListItem;