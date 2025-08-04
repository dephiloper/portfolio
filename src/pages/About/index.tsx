import React from 'react';
import '../Home/styles.css';
import './styles.css'
import Navigation from '../../components/navigation';

export default function About() {
    return (
        <div className="project-list">
            <Navigation />

            <section className="about-container">
                <h2 className="about-heading">About Me</h2>

                <img
                    src="/portrait_p.webp"
                    alt="Portrait of Philipp Bönsch"
                    className="about-avatar"
                />

                <div className="about-text">
                    <p>
                        Hello there, it's a pleasure to meet you <span className="wave-emoji">✌️</span>!
                    </p>
                    <p>
                        My name is <strong>Philipp Bönsch</strong>, I'm an indie game developer with a focus on <strong>technical art</strong> and <strong>game design</strong>.
                    </p>

                    <div className="about-inline-image-wrapper">
                        <img
                            src="/screen_02.webp"
                            alt="Screenshot from Haunted Cleaner"
                            className="about-inline-image"
                        />
                        <div className="about-inline-image-caption">
                            prototype screenshot - Haunted Cleaner
                        </div>
                    </div>

                    <p>
                        I'm currently co-designing on my first game project <a href="/?project=1" className="about-inline-link"><strong>Haunted Cleaner</strong></a>, which is a wholesome game about tidying up rooms to help the ghosts living in them 👻.
                    </p>

                    <br />

                    <img
                        src="/Headkino_logo_positive.webp"
                        alt="HeadKino Games logo"
                        className="about-headkino-logo"
                    />

                    <p>
                        At the same time, I'm in the process of co-founding{' '}
                        <a
                            href="https://headkino.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="about-inline-link"
                        >
                            <strong>HeadKino Games</strong>
                        </a>{' '}
                        — an indie game studio, where we create inspiring and beautiful games that tell meaningful and relatable stories with elements of mystery and the goal to captivate our future players.
                    </p>


                </div>

                <a href="/CV.pdf" className="project-modal-link about-button">
                    View My CV
                </a>

                <hr className="about-divider" />

                <div className="about-socials">
                    <a
                        href="https://www.linkedin.com/in/pboensch/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-modal-link about-social-link"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/dephiloper"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-modal-link about-social-link"
                    >
                        GitHub
                    </a>
                </div>
            </section>
        </div>
    );
}
