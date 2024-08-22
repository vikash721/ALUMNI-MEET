import React from 'react';
import Styles from './CenteredContent.module.css';

const CenteredContent = ({ children }) => {
    return (
        <div className={Styles.centeredContent}>
            {children}
        </div>
    );
};

export default CenteredContent;
