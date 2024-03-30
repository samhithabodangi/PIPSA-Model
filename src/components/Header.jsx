import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div style={styles.container}>
      <div style={styles.title}>
        <img src={logo}  alt="Logo" style={styles.logo}/>
        <div style={styles.logoTitle}>
          <p styles={styles.name}>PIPSA</p>
          <p styles={styles.acronym}><u>P</u>rediciting <u>I</u>ndirect <u>P</u>eptides with <u>S</u>olvent <u>A</u>ccessibility</p>
        </div>
      </div>
      <div style={styles.buttonsContainer}>
        <ul style={styles.navbarMenu}>
            <li style={styles.list}><Link to="/" style={styles.tab}>Home</Link></li>
            <li style={styles.list}><Link to="/research" style={styles.tab}>Research</Link></li>
            <li style={styles.list}><Link to="/about" style={styles.tab}>About</Link></li>
        </ul>
      </div>
    </div>
  );
}

const styles = {
  list: {
    margin: '0.4rem',
    padding: '0.5rem',
    display: 'block'
  },
  tab: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1.4vw'
  },
  navbarMenu: {
    display: 'flex',
    listStyleType: 'none',
    justifyContent: 'space-between',
    marginRight: 20
  },
  container: {
      backgroundColor: '#D54545',
      width: '98.9vw',
      paddingTop: '10px',
      paddingBottom: '10px',
      fontFamily: 'Familjen Grotesk, sans-serif',
      height: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: 'white',
    },
  title: {
      height: '80px',
      display: 'flex',
      alignItems: 'center',
    },
    logo: {
      width: 70,
      height: 80,
      marginLeft: 30,
      marginRight: 10,
    },
    name: {
      fontSize: 28,
    },
    buttonsContainer: {
      marginRight: 10,
    },
    button: {
      marginLeft: 10,
      padding: '5px 10px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    acronym: {
      marginTop: -6,
    },
    logoTitle: {
      fontSize: '1.4vw'
    }
};

export default Header;