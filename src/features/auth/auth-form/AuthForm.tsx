import React from "react";

import { useForm } from "react-hook-form";

export const AuthForm = (): React.ReactElement => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data: any) => console.log(data);

    return (
        <div className="app-auth-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Login" {...register("login", { required: true })} />
                <input placeholder="Password" {...register("password", { required: true, maxLength: 6, minLength: 4 })} />
                <button type="submit">Enter</button>
            </form>
        </div>
    )
}