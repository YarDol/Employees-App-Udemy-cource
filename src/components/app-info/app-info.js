import './app-info.css';

const AppInfo = ({increased, employees}) => {
    return (
       <div className="app-info">
        <h1>Employee records N</h1>
        <h2>Total number of staff: {employees} </h2>
        <h2>Award: {increased}</h2>
       </div>
    )
}

export default AppInfo;