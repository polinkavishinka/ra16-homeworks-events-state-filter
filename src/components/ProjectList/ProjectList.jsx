import PropTypes from 'prop-types';
import './ProjectList.css';

export function ProjectList(props) {
    const { projects } = props;
    
    return (
        <main className="project-list">
            {projects.map((project, index) =>
                <img  key={index} className="project-list-item" src={project.img} alt={project.description || ""} data-category={project.category}/>
            )}
        </main>
    );
}


ProjectList.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            img: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            description: PropTypes.string
        })
    ).isRequired
}

