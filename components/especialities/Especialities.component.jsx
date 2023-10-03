import EspecialitiesListComponent from "./EspecialitiesList.component";
import '@/assets/css/especialities.style.css'

const  EspecialitesComponent = () => {
    return (
        <section className="especialities">
            <h3 className="especialities_title">Especialidades</h3>
            <div className="especialities_card">
                <EspecialitiesListComponent title={'Ejemplo'} description={'Lorem Ipsu'} link="#"/>
                <EspecialitiesListComponent title={'Ejemplo 1'} description={'Lorem Ipsu'} link="#"/>
                <EspecialitiesListComponent title={'Ejemplo 2'} description={'Lorem Ipsu'} link="#"/>
                <EspecialitiesListComponent title={'Ejemplo 3'} description={'Lorem Ipsu'} link="#"/>
                <EspecialitiesListComponent title={'Ejemplo 4'} description={'Lorem Ipsu'} link="#"/>
                <EspecialitiesListComponent title={'Ejemplo 5'} description={'Lorem Ipsu'} link="#"/>
            </div>
        </section>
    );
}

export default EspecialitesComponent