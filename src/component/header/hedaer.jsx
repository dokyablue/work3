import React from 'react';
import styles from './header.module.css'

const Header = ({onLogout}) => (
            <header className={styles.header}>
                {onLogout && (<button className={styles.logout} onClick={onLogout}>logout</button>)}
                <img className={styles.logo} src="/images/logo.png" alt="logo" />
                <h1 className={styles.title}>Biz Card Maker</h1>
            </header>
    );

export default Header;