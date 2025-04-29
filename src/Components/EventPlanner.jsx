import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling
import Footer from './footer.jsx'

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            
            {/* Heading of landing page */}
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>

            <section className='description'>
                <p>
                    Make every event memorable with our all-in-one event planning solution. Whether you're organizing a wedding, conference, or casual gathering, we simplify every step — from scheduling to guest management.
                </p>
                <button className='get-started-button'>Get Started</button>

            </section>

            <section className='events_categories'>
                <ul>
                    <h2>Social Events:</h2>
                    <li>Birthday parties</li>
                    <li>Anniversary celebrations</li>
                    <li>Wedding receptions</li>
                    <li>Baby showers</li>
                    <li>Graduation parties</li>
                    <li>Family reunions</li>
                </ul>
                <ul>
                    <h2> Entertainment Events:</h2>
                    <li>Concerts</li>
                    <li>Music festivals</li>
                    <li>Film screenings</li>
                    <li>Comedy shows</li>
                    <li>Art exhibitions</li>
                    <li>Cultural events</li>
                </ul>
                <ul>
                    <h2>Community Events:</h2>
                    <li>Fundraising events</li>
                    <li>Charity galas</li>
                    <li>Volunteer drives</li>
                    <li>Neighborhood block parties</li>
                    <li>Community festivals</li>
                    <li>Cultural celebrations</li>
                </ul>
                <ul>
                    <h2>Corporate Events:</h2>
                    <li>Conferences & Seminars</li>
                    <li>Product Launches</li>
                    <li>Team-building Retreats</li>
                    <li>Business Dinners</li>
                    <li>Award Ceremonies</li>
                    <li>Networking Events</li>
                </ul>
                <ul>
                    <h2>Virtual Events:</h2>
                    <li>Webinars</li>
                    <li>Online workshops</li>
                    <li>Virtual conferences</li>
                    <li>Live streaming events</li>
                    <li>Remote team meetings</li>
                    <li>Online networking sessions</li>
                </ul>
            </section>

            <section className='features'>
                <h2>Features</h2>
                <ul>
                    <li>Seamless event creation with intuitive interface</li>
                    <li>Fully customizable themes and templates for every occasion</li>
                    <li>Comprehensive guest list and RSVP management</li>
                    <li>Real-time collaboration with team members and vendors</li>
                    <li>Automated reminders and real-time notifications</li>
                    <li>Budget tracking and expense management tools</li>
                    <li>Venue suggestions with availability and booking support</li>
                    <li>Integrated calendar and scheduling system</li>
                </ul>
            </section>

            <section className="testimonials">
                <h2>Testimonials</h2>

                <div className="testimonial">
                    <p>"Event Planner made organizing my wedding a breeze. Highly recommended!"</p>
                    <p className="author">- Emily Johnson</p>
                </div>

                <div className="testimonial">
                    <p>"Planning our corporate conference was stress-free thanks to their professional tools and support."</p>
                    <p className="author">- Raj Patel</p>
                </div>

                <div className="testimonial">
                    <p>"I hosted a baby shower with zero hassle. The customizable templates were a game-changer!"</p>
                    <p className="author">- Sarah Thompson</p>
                </div>

                <div className="testimonial">
                    <p>"From guest lists to reminders, everything was handled smoothly. Perfect for busy people like me!"</p>
                    <p className="author">- Daniel Lee</p>
                </div>

                <div className="testimonial">
                    <p>"The platform helped me plan a successful virtual fundraiser for my community. Loved the experience!"</p>
                    <p className="author">- Ayesha Khan</p>
                </div>
            </section>


             <section className='contact'>
                <h2>Contact Us</h2>
                <form>
                    <input type='text' placeholder='Name'/>
                    <input type='email' placeholder='Email'/>
                    <textarea placeholder='Message'></textarea>
                    <button className='submit-button'>Send</button>
                </form>
            </section>

            <Footer/>
            
        </div>
    );
};

export default EventPlanner;
