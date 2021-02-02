import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './ProfilePage.scss';
import EnsoPortrait from '../../components/enso-portrait/EnsoPortrait';
import ProPic from '../../assets/pro-pic.jpg';
import IconHeader from '../../components/icon-w-header/IconHeader';
import jsLogo from '../../assets/js-logo.png';
import tsLogo from '../../assets/ts-logo.png';
import rubyLogo from '../../assets/ruby-logo.png';
import railsLogo from '../../assets/rails-logo.png';
import reactLogo from '../../assets/react-logo.png';
import reduxLogo from '../../assets/redux-logo.png';
import htmlLogo from '../../assets/html-logo.png';
import cssLogo from '../../assets/css-logo.png';
const ProfilePage: React.FC<RouteComponentProps> = function () {
    return (
        <div className="profile-page">
            <div className="profile-bg-top" />
            <div className="profile-bg-bottom" />
            <div className="profile-resume-container">
                <div className="profile-res-section-1">
                    <EnsoPortrait img={ProPic}>Kainan Doneson</EnsoPortrait>
                    <div className="profile-skills">
                        <h4> Main Programming Skills</h4>
                        <div className="profile-icon-zone">
                            <IconHeader title="JavaScript" icon={jsLogo} />
                            <IconHeader title="TypeScript" icon={tsLogo} />
                            <IconHeader title="Ruby" icon={rubyLogo} />
                            <IconHeader title="Rails" icon={railsLogo} />
                            <IconHeader title="React" icon={reactLogo} />
                            <IconHeader title="Redux" icon={reduxLogo} />
                            <IconHeader title="HTML5" icon={htmlLogo} />
                            <IconHeader title="CSS/SCSS" icon={cssLogo} />
                        </div>
                    </div>
                </div>
                <div className="profile-res-section-2">
                    <div className="profile-about-me">
                        <h2>How I became a Programmer</h2>
                        <p>
                            Hello, my name is Kainan Doneson, and I am an aspiring full stack developer and a graduate
                            of the Flatiron School Bootcamp. I started my coding journey around Christmas in 2019 when
                            my close friend, a Google software developer, gave me the book Eloquent JavaScript by Marijn
                            Haverbeke. I must admit getting introduced to concepts such as recursion only two weeks into
                            learning how to code was a bit intimidating. However, even more prominent than my initial
                            confusion were the embers of a more profound passion rapidly gaining heat inside me; I had
                            become hooked.
                        </p>
                        <p>
                            In between pockets of work, I would sift through the chapters absorbing all that I could,
                            dreaming of the day I could make software development into a career. And then it
                            happened—the pandemic took the world by storm, shattering our social norms and destroying
                            the industry I had been working in. It was now or never for me. And so, in the face of
                            tragedy, I enrolled in the Flatiron Bootcamp to pursue my dream of being a developer.
                        </p>
                        <h2>What my past careers have taught me</h2>
                        <p>
                            {`Before the pandemic, I worked primarily in the service industry and retail for the WTC
                            Apple store. I got to work both front and back of the house (full-stack, if you will) during
                            my time at the apple store, but I don't believe the physical tools translate to programming
                            much. Sadly, box-cutters and cardboard aren't entirely databases; selling iPhones doesn't
                            help develop react components, and I don't believe crafting alcoholic beverages is quite the
                            customer solution your tech companies are after.`}
                        </p>
                        <p>
                            However, these work experiences allowed me to work among diverse teams of both small and
                            large sizes. What does translate from my past work is interpersonal skills. Working retail
                            taught me how to work through ambiguity. For maximum efficiency, you base your actions the
                            current state of operations, cognizant of the present hierarchy of priorities. In contrast,
                            working in sales was more communication-oriented. Solving customer problems requires active
                            listening; I had to seek to understand rather than retort. Furthermore, efficiently managing
                            high customer volume requires the team to cooperate in evenly delegating responsibilities.
                            Lastly, working in service taught me not to take things personally. Meeting many people with
                            a broad spectrum of personalities and experiences reminds me to appreciate the vast world
                            around us.
                        </p>
                    </div>

                    <div className="profile-work">
                        <h2>Work Experience</h2>
                        <span>
                            <h3>Lounge 247:</h3>
                            <h4>Barback/tender 02/2019 - 03/2020</h4>
                            <ul>
                                <li>Interacted with customers and prepared beverages for high-volume bar patrons</li>
                                <li>
                                    Check customers identification to ensure compliance with all beverage regulations
                                </li>
                                <li>Maintained bar and storage areas and restocked bar inventory and supplies</li>
                            </ul>

                            <h3>Apple WTC, Manhattan NY:</h3>
                            <h4>Back of House Specialist 11/2018 - 01/2019:</h4>
                            <ul>
                                <li>
                                    Worked alongside team members rotating different BOH tasks to keep things running
                                    smoothly
                                </li>
                                <li>
                                    Receiving product shipments and orderly storing them for easy retrieval later on
                                </li>
                                <li>Document, label, and ship out product returns/repairs to the main depot</li>
                            </ul>
                            <h4>Retail Specialist 01/2018 - 11/2018:</h4>
                            <ul>
                                <li>
                                    Interacted with customers to target technical needs and suggest product solutions
                                </li>
                                <li>
                                    Advised customers and provided guidance and explanations on setting up their new
                                    technology
                                </li>
                                <li>
                                    Maintained visual merchandising and stayed updated on new products and initiatives
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
