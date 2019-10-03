import React from 'react';

const SplashPage = () => {
    return (
    <div className="splash-page">
        <div className="splash-jumbo">
            <div>
                <h1>Appraise A Home's Value Instantly</h1>
            </div>
            <div>
                <h2>Signup for Appraiser BFF Now</h2>
                <h2>Learn More...</h2>
            </div>
        </div>
        <div className="product-description">
            {/*top content section*/}

            <div class="top-content-section">
                <h1>
                    Instant Appraisal Solution
                </h1>
                <p><b class="bold">Appraiser BFF</b> pinpoints a property's value based on credible county-registered tax assessment data, providing a lightning-fast appraisal that will take the guesswork out of your next real estate transaction! Just input the property details we’ll instantly provide an appraisal.</p>
            </div>

            {/*bottom content section*/}
            
            <div class="bottom-portion">
                <div class="massive-database">
                    <div class="database-image">
                        <img src="../../../images/splash_data.jpg" alt="analytics dashboard" />
                    </div>
                    
                    <div class="database-text">
                        <div class="aqua-line"></div>
                        <h2>Massive Database</h2>
                        <p>We reference millions of county tax assessment records to analyze your property's description and serve you the best possible appraisal.</p>
                    </div>
                </div>
            
                <div class="machine-learning">
                    <div class="machine-text">
                        <div class="aqua-line"></div>
                        <h2>Machine Learning</h2>
                        <p>Our machine learning model is trained on the most relevant inputs for determining a house's value, ensuring accurate results with only the most essential property details.</p>
                    </div>
                    <div class="machine-image">
                        <img src="../../../images/splash_circuitboard.jpg" alt="computer parts" />
                    </div>
                </div>
            </div>

        </div> {/* closes "product-description" div */}
    </div>
    );
    
};

export default SplashPage;