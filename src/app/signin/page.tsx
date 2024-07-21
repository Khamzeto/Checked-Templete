import React from 'react';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import Input from '../components/ui/Input/Input';
import Button from '../components/ui/Button/Button';
import styles from './Auth.module.css';

export default function Auth() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <img src="./logo.svg" alt="Logo" className={styles.logo} />
        <div className={styles.header}>
          <h1 className={styles.title}>Вход</h1>
        </div>
        <div className={styles.inputs}>
          <Input
            type="email"
            placeholder="abc@email.com"
            icon="email"
            label=""
            className={styles.input}
          />
          <Input
            type="password"
            placeholder="Your password"
            icon="password"
            label=""
            className={styles.input}
          />
        </div>
        <div className={styles.forgotPassword_container}>
          <p className={styles.forgotPassword}>Забыли пароль?</p>
        </div>
        <Button text="ВОЙТИ" className={styles.button} />
        <p className={styles.or}>или</p>
        <p className={styles.signup}>
          Нет аккаунта?{' '}
          <a href="/signup" className={styles.signupLink}>
            Зарегистрироваться
          </a>
        </p>
      </div>
    </main>
  );
}
