import { useForm } from "react-hook-form";

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

                {errors.nombre?.type === 'required' && <p>El nombre es requerido</p> }

            </div>

            <div>
                <label>Correo</label>
                <input type="text" placeholder="Correo" {...register('correo', {

                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i

                } ) } />

                {errors.correo?.type === 'required' && <p>El correo es requerido</p> }
                {errors.correo?.type === 'pattern' && <p>El formato del email es incorrecto</p> }

            </div>

            <div>
                <label>Telefono</label>
                <input type="text" placeholder="Telefono" {...register('telefono', {

                    required: true,
                    
                } ) } />

                {errors.telefono?.type === 'required' && <p>El telefono es requerido</p> }

            </div>

            <div>
                <label>Contraseña</label>
                <input type="password" placeholder="Contraseña"  {...register('contrasena', {

                    required: true

                } ) } />

                {errors.contrasena?.type === 'required' && <p>La contraseña es requerida</p> }

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

                

                {errors.confContrasena?.type === 'required' && <p>La contraseña es requerida</p> }
                {errors.confContrasena && <p>Las contraseñas no coinciden</p> }

            </div>

            <input type="submit" value="Crear Cuenta" />

        </form>

    </div>

}

export default CrearCuenta;