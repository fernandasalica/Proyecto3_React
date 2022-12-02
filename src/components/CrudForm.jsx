import { useState } from "react";
import Card from 'react-bootstrap/Card';


const CrudForm = () => {

    const [form, setForm] = useState([])

    const handleChange = (e) => {}

    const handleSubmit = (e) => {}

    const handleReset = (e) => {
        form.name="";
        form.category="";
        form.year="";
        form.directedby="";
        form.actors="";
        form.story="";
        form.image="";
        form.tariler="";
    }

    return (
        <>
            <h3 className="text-center my-4">Agregar nueva Película</h3>
            <form onSubmit={handleSubmit} className="form-size mb-5">
                <input type="text" name="name" placeholder='Ingrese nombre de película' value={form.name} />
                <label for="cars">Seleccione Categoría:</label>
                <select className="mb-4" name="category" id="category" value={form.category}>
                <option value="volvo">Elija una opción</option>
                    <option value="volvo">Comedias</option>
                    <option value="saab">Drama</option>
                    <option value="mercedes">Acción</option>
                    <option value="audi">Ciencia Ficción</option>
                </select>
                <input className="mb-4" type="text" name="url-year" placeholder='Año de la película' value={form.year} />
                <input className="mb-4" type="text" name="url-directedby" placeholder='Dirigida por..' value={form.directedby} />
                <input className="mb-4" type="text" name="url-actors" placeholder='Actores..' value={form.actors} />
                <textarea className="mb-4" name="story" for="story" placeholder="Describe brevemente el argumento en menos de 300 carácteres" maxlength="300" value={form.story}></textarea>
                <input className="mb-4" type="text" name="url-image" placeholder='URL de la imagen de portada' value={form.image} />
                <input className="mb-4" type="text" name="url-trailer" placeholder='URL del Trailer' value={form.trailer} />
                <input className="mb-4"type="submit" value="Enviar" formAction="http://localhost:3004"/>
                <input type="reset" value="Limpiar" onClick={handleReset}/>
            </form>
        </>
  );
};

export default CrudForm;