import React from 'react';
import Styles from './AlumnusAt.module.css';

const AlumnusAt = () => {
    return (
        <>
            <div className={Styles.container}>
                <h2 className={Styles.heading}>Our Alumnus At</h2>
                <div className={Styles.grid}>
                    <img src="https://cdn-icons-png.flaticon.com/128/2702/2702602.png" alt="Company 1" className={Styles.companyLogo} />
                    <img src="https://cdn-icons-png.flaticon.com/128/732/732221.png" alt="Company 2" className={Styles.companyLogo} />
                    <img src="https://cdn-icons-png.flaticon.com/128/888/888835.png" alt="Company 3" className={Styles.companyLogo} />
                    <img src="https://cdn-icons-png.flaticon.com/128/15466/15466027.png" alt="Company 4" className={Styles.companyLogo} />
                    <img src="https://cdn-icons-png.flaticon.com/128/16183/16183638.png" alt="Company 5" className={Styles.companyLogo} />
                    <img src="https://cdn-icons-png.flaticon.com/128/2175/2175370.png" alt="Company 6" className={Styles.companyLogo} />
                </div>
            </div>
        </>
    );
};

export default AlumnusAt;
