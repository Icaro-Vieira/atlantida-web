import React from "react";
import { useForm } from "react-hook-form";
import "./RegisterFormGlobal.css";
import styles from "./RegisterStep1.module.css";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="container">
      <div className="navbar">
        <img src="/logo.png" alt="Logo" className="logo" />
        <a href="/login" className="back-button">
          VOLTAR AO LOGIN
        </a>
      </div>
      <h1 className="title">Crie sua conta</h1>
      <p className="subtitle">
        O cadastro será realizado em duas etapas, preencha todos os campos
        atentamente
      </p>
      <div className="stepper">
        <div className="step active">1</div>
        <div className="step">2</div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label className="label">Nome</label>
        <input
          {...register("firstName", { required: true })}
          className="input"
          placeholder="Seu primeiro nome"
        />
        {errors.firstName && <p className="error">Nome é obrigatório.</p>}

        <label className="label">Sobrenome</label>
        <input
          {...register("lastName", { required: true })}
          className="input"
          placeholder="Seu último nome"
        />
        {errors.lastName && <p className="error">Sobrenome é obrigatório.</p>}

        <label className="label">Data de nascimento</label>
        <input
          {...register("dob", { required: true })}
          type="date"
          className="input"
          placeholder="dd/mm/aaaa"
        />
        {errors.dob && (
          <p className="error">Data de nascimento é obrigatória.</p>
        )}

        <label className="label">E-mail</label>
        <input
          {...register("email", { required: true })}
          type="email"
          className="input"
          placeholder="exemplo@seuemail.com"
        />
        {errors.email && <p className="error">E-mail é obrigatório.</p>}

        <label className="label">Senha</label>
        <div className="password-container">
          <input
            {...register("password", { required: true })}
            type="password"
            className="input"
            placeholder="Informe sua senha"
          />
          <button type="button" className="toggle-password">
            👁️
          </button>
        </div>
        {errors.password && <p className="error">Senha é obrigatória.</p>}

        <label className="label">Confirmar senha</label>
        <div className="password-container">
          <input
            {...register("confirmPassword", { required: true })}
            type="password"
            className="input"
            placeholder="Repita sua senha"
          />
          <button type="button" className="toggle-password">
            👁️
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="error">Confirmação de senha é obrigatória.</p>
        )}

        <button type="submit" className="submit-button">
          PRÓXIMA ETAPA
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
