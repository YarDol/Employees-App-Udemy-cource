import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import './app.css';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../emloyees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: "Alex C.", salary: 800, increase: false, like: true, id: 1},
                {name: "Stella M.", salary: 1500, increase: true, like: false, id: 2},
                {name: "Kevin D.", salary: 3000, increase: false, like: false, id: 3},
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);
            
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);

            // const newArr = [...before, ...after] 

            return {
                data: data.filter(item => item.id !== id)
            }
        });
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newIttem = {...old, increase: !old.increase};
            const newArr = [...data.slice(0, index), newIttem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    onToggleRise = (id) => {
        console.log(`Rise ${id}`);
    }

    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>
                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList data={this.state.data}
                onDelete={this.deleteItem}
                onToggleIncrease={this.onToggleIncrease}
                onToggleRise={this.onToggleRise}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;