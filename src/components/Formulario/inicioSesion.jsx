import { useForm } from "react-hook-form";

const inicioSesion = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {

        console.log(data);

    }

    return <div>

        <h2>Inicio Sesion</h2>

        <form onSubmit={ handleSubmit(onSubmit) } >

            <div>
                <label>Correo</label>
                <input type="text" {...register('correo') } />
            </div>

            <div>
                <label>Contraseña</label>
                <input type="password" {...register('contrasena') } />
            </div>

            <input type="submit" value="Iniciar Sesion" />

        </form>

    </div>

}