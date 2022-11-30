import { useState } from "react";


const CrudForm = () => {

    const [form, setForm] = useState([])

    const handleChange = (e) => {}

    const handleSubmit = (e) => {}

    const handleReset = (e) => {}

    return (
        <>
            <h3 className="text-center">Agregar nueva Película</h3>
            <form onSubmit={handleSubmit} className="form-size mb-5">
                <input type="text" name="name" placeholder='Ingrese nombre de película' onChange={handleChange} value={form.name} />
                <label for="cars">Seleccione Categoría:</label>
                <select name="category" id="category" value={form.category}>
                    <option value="volvo">Comedias</option>
                    <option value="saab">Drama</option>
                    <option value="mercedes">Acción</option>
                    <option value="audi">Ciencia Ficción</option>
                </select>
                <input type="text" name="url-image" placeholder='URL de la imagen de portada' value={form.image} />
                <input type="text" name="url-trailer" placeholder='URL del Trailer' value={form.trailer} />
                <textarea name="argument" for="argument" placeholder="Describe brevemente el argumento en menos de 300 carácteres" maxlength="300"></textarea>
                <input type="submit" value="Enviar" />
                <input type="reset" value="Limpiar" onClick={handleReset}/>
            </form>
        </>
  );
};

export default CrudForm;