import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import './app.css';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../emloyees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App() {
    const data = [
        {name: "Alex C.", salary: 800, increase: false, id: 1},
        {name: "Stella M.", salary: 1500, increase: true, id: 2},
        {name: "Kevin D.", salary: 3000, increase: false, id: 3},
    ];

    return (
        <div className="app">
            <AppInfo/>
            <div className='search-panel'>
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    )
}

export default App;