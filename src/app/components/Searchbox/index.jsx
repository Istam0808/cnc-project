import { FaSearch } from 'react-icons/fa';
import "./style.scss"

function Searchbox() {
    return (
        <div className="search-box">
            <input type="text" placeholder="Поиск..." />
            <button type="button">
                <FaSearch />
            </button>
        </div>
    );
}

export default Searchbox;