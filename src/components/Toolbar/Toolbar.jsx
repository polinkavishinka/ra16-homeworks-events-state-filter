import PropTypes from 'prop-types';
import './Toolbar.css';

export function Toolbar(props) {
    const {filters, selected, onSelectFilter } = props;
    
    return (
        <ul className="toolbar-list">
            {filters.map((filter, index) =>
                <li key={index}
                    className={`toolbar-item${selected === filter ? ' toolbar-item__selected' : ''}`}
                    onClick={() => onSelectFilter(filter)}>
                    <span className="toDoListItem-title">{filter}</span>
                </li>
            )}
        </ul>
    );
}

Toolbar.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.string).isRequired,
    selected: PropTypes.string.isRequired,
    onSelectFilter: PropTypes.func.isRequired,
}

