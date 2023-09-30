import EspecialitiesListComponent from "./EspecialitiesList.component";
import '@/assets/css/especialities.style.css'

const  EspecialitesComponent = () => {
    return (
        <section className="especialities">
            <h3 className="especialities_title">Especialidades</h3>
            <div className="especialities_card">
                <EspecialitiesListComponent title={'Ejemplo'} description={'Lorem Ipsu'} link="#"/>
            </div>
        </section>
    );
}

export default EspecialitesComponent