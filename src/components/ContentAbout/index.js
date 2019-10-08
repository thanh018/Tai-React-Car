import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';

class ContentAbout extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    componentDidMount(){
        AOS.init();
      }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="describe-block text-center">
                        <h1 className="describe-title" data-aos="fade-up">Our <span>Story</span></h1>
                        <div className="describe-text" data-aos="fade-up">
                            <p>One late evening, when I, a petroleum engineer, had to stay late at the office to work on a project. Suddenly I got  call from my wife using her mother tongue, not English, to say that she was in a dangerous taxi driven by an 50-year-old man.
                                <br></br> She could recognize his dark intention when he asked her many personal questions. I tried to calm her down and hurriedly took my car to pick her up as soon as possible.
                                <br></br>Unfortunately my work place was quite far from the taxi so it would take me at least haft an hour to go to the destination through the navigation system.
                                <br></br>Luckily, fifteen minutes later, I was relieved to be informed that she was safe by repeatedly requesting the driver to stop. Since then, I questioned my self, “What if my wife didn’t know how to save herself ?” and “What will other women do when they’re in the same situation?” and I realized that women were still waiting for men, to save them. 
                                <br></br>Men are given the strength by God to protect Women, not to hurt them, as all of them deserve to be save and live in a secure world. This strongly encouraged us to create this app.
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default ContentAbout;
