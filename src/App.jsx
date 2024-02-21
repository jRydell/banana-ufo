import './App.css';
import UfoList from "./Components/UfoList/UfoList.jsx";
import Header from "./Components/Header/Header.jsx";
import Button from "./Components/Button/Button.jsx";


const App = () => {
    return (
    <>
    <main className='Home'>
        <Header />
        <Button />
        <UfoList />
    </main>    
        
        
        
    </>
    );
};

export default App;