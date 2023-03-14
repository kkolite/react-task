import { Component } from 'react';

interface IProps {
  currentPage: () => void;
}

class About extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
    props.currentPage();
  }

  render() {
    return (
      <div className="about__page">
        <h1>About</h1>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quis eius facere ullam
          deleniti? Voluptatum tempora dolorum iure dolor unde? Consequuntur odio possimus suscipit
          eos mollitia inventore doloribus recusandae corrupti?
        </div>
        <h2>Our mission</h2>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, repudiandae amet aut
          aliquam repellat molestiae id explicabo quidem voluptatum sequi tenetur consequatur
          sapiente ipsa ipsam architecto, et blanditiis laudantium assumenda.
        </div>
      </div>
    );
  }
}

export default About;
