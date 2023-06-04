import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";

const RecuperarCuenta3 = () => {

    const { register, formState: {errors} , watch, handleSubmit } = useForm();

    const onSubmit = (data) => {

        console.log(data);

    }
    

    return <div>

        <h2>Cambiar contraseña</h2>
        <form onSubmit={ handleSubmit(onSubmit) } >
            
            <div>
                <p>Escriba su nueva contraseña.</p>
                <label>Nueva contraseña</label>
                <input type="password" placeholder="Nueva contraseña" {...register('newContra', {

                    required: true

                } ) } />

                {errors.newContra?.type === 'required' && <p>La contraseña es requerida</p> }

            </div>

            <div>
            
                <label>Confirmar nueva contraseña</label>
                <input type="password" placeholder="Confirmar Contraseña" {...register('confNewContra', {

                    required: true,
                    validate: (val = string /*watch('newContra')*/ ) => { 

                        if (watch ('newContra') !=val ) {

                            return "Las contraseñas no coinciden";

                        }

                     }

                } ) } />

                

                {errors.confNewContra?.type === 'required' && <p>La contraseña es requerida</p> }
                {errors.confNewContra && <p>Las contraseñas no coinciden</p> }

            </div>

            <input type="submit" value="Enviar"/>

            <p>¿No tienes una cuenta? <Link to="/CrearCuenta">Crear ahora</Link> </p>

        </form>

    </div>

}

export default RecuperarCuenta3;