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
                    The Instant Appraisal Solution
                </h1>
                <p><b class="bold">Appraiser BFF</b> pinpoints a property's value based on credible county-registered tax assessment data, providing a lightning-fast appraisal that takes the guesswork out of your next real estate transaction! Just input the property details we’ll instantly provide an appraisal.</p>
            </div>

            {/*middle content section*/}

            <div class="middle-content-section">
                <div class="stats-top">
                    <div id="about-section-link"></div>
                    <p class="green-4"><b>53.4%</b> of Kickstarter campaigns are successful</p>

                    <p class="green-3"><b>$4.5M</b> raised on Kickstarter to date</p>

                    <p class="green-2">Successful campains on average last <b>32</b> days</p>
                </div>

                <div class="stats-bot">
                    <p class="green-1"><b>Tabletop Games</b> is the top category on Kickstarter</p>

                    <p class="green-2">Successful campaigns had an average of <b>289</b> backers</p>

                    <p class="green-3b">Campaigns that were successful raised an average of <b>$15k</b> above their goal!</p>
                </div>
            </div>

            {/*bottom content section*/}
            
            <div class="bottom-portion">
                <div class="natural-language">
                        <img src="../../../images/splash_book.jpg" alt="zoomed in view of book" />
            
                        
                        <div class="natural-text">
                            <div class="aqua-line"></div>
                            <h2>Natural Language Processing</h2>
                            <p>From our database of over 280K kickstarter campaigns, we use natural language processing (NLP) to analyze the campaign names and descriptions. The NLP outputs new features used to train our models in order to understand what words and phrases impact a campaign’s performance.</p>
                        </div>
                    </div>
            
                    <div class="machine-learning">
                        <div class="machine-text">
                            <div class="aqua-line"></div>
                            <h2>Machine Learning</h2>
                            <p>Our machine learning model is trained on the kickstarter dataset of over 280K campaigns including information like the campaign name, short description,  category, monetary goal, duration, and country to make predictions on the outcome of your campaign.</p>
                        </div>
            
                        <img src="../../../images/splash_circuitboard.jpg" alt="computer parts" />
                    </div>
            
            
                    <div class="data-analysis">
            
                        <img src="../../../images/splash_data.jpg" alt="" />
                        <div class="data-text">
                            <div class="aqua-line"></div>
                            <h2>Data Analysis</h2>
                            <p>We use SQL to query our Database tailored to each user’s project design. It allows for unique results that continuously provide feedback based on the current set-up or any changes that the user would like to make.</p>
                        </div>
                    </div>
            </div>

        </div> {/* closes "product-description" div */}
    </div>
    );
    
};

export default SplashPage;