import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";
import "./errorPagina_styles.css";

const CrearCuenta = () => {

    const { register, formState: {errors} , watch, handleSubmit } = useForm();

    const onSubmit = (data) => {

        console.log(data);

    }
    

    return <div>

        <h2>Crear Cuenta</h2>
        <form onSubmit={ handleSubmit(onSubmit) } >

            <div>
                <label>Nombre</label>
                <input type="text" placeholder="Nombre" {...register('nombre', {

                    required: true,
                    
                } ) } />

                {errors.nombre?.type === 'required' && <p class="errorP">El nombre es requerido</p> }

            </div>

            <div>
                <label>Correo</label>
                <input type="text" placeholder="Correo" {...register('correo', {

                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i

                } ) } />

                {errors.correo?.type === 'required' && <p class="errorP" >El correo es requerido</p> }
                {errors.correo?.type === 'pattern' && <p class="errorP" >El formato del email es incorrecto</p> }

            </div>

            <div>
                <label>Telefono</label>
                <input type="text" placeholder="Telefono" {...register('telefono', {

                    required: true,
                    pattern: /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/
                    
                } ) } />

                {errors.telefono?.type === 'required' && <p class="errorP" >El telefono es requerido</p> }
                {errors.telefono?.type === 'pattern' && <p class="errorP" >El formato del telefono es incorrecto</p> }

            </div>

            <div>
                <label>Contraseña</label>
                <input type="password" placeholder="Contraseña"  {...register('contrasena', {

                    required: true,
                    minLength: 8

                } ) } />

                {errors.contrasena?.type === 'required' && <p class="errorP" >La contraseña es requerida</p> }
                {errors.contrasena?.type === 'minLength' && <p class="errorP" >La contraseña debe tener al menos 8 caracteres</p> }

            </div>

            <div>
            
                <label>Confirmar Contraseña</label>
                <input type="password" placeholder="Confirmar Contraseña" {...register('confContrasena', {

                    required: true,
                    validate: (val = string /*watch('confContrasena')*/ ) => { 

                        if (watch ('contrasena') !=val ) {

                            return "Las contraseñas no coinciden";

                        }

                     }

                } ) } />

                

                {errors.confContrasena?.type === 'required' && <p class="errorP" >La contraseña es requerida</p> }
                {errors.confContrasena && <p class="errorP" >Las contraseñas no coinciden</p> }

            </div>

            <input type="submit" value="Crear Cuenta" />

            <p>¿Tienes una cuenta? <Link to="/IniciarSesion">Iniciar sesión</Link> </p>

        </form>

    </div>

}

export default CrearCuenta;