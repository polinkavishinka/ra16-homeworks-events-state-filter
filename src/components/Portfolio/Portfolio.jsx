import { useState, useEffect  } from 'react'
import { ProjectList } from '../ProjectList/ProjectList.jsx';
import { Toolbar } from '../Toolbar/Toolbar';
import cards from '../cards.js';


export function Portfolio(props) {
    const [selected, setSelected] = useState("All");
    const [projects, setProjects] = useState(cards);

    const onSelectFilter = (filter) => {
        setSelected(filter);
    }

    // Обновить отфильтрованные проекты, когда меняется selected
    useEffect(() => {
        if (selected === "All") {
            setProjects(cards);
        } else {
            setProjects(cards.filter(card => card.category === selected));
        }
    }, [selected]);

    return (
        <>
            <Toolbar
            filters={["All", "Websites", "Flayers", "Business Cards"]}
            selected={selected}
            onSelectFilter={onSelectFilter}/>
            <ProjectList projects={projects}></ProjectList>
        </>
    );
}

Portfolio.propTypes = {}
