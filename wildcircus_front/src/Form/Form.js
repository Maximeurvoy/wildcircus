import React from 'react';
import emailjs from 'emailjs-com';



class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      message: 'oh le joli texte',
      display: false
    }
  }

  sendEmail = (e) => {
    // e.preventDefault();
    this.setState({ display: !this.state.display })
    console.log(e.target)
    emailjs.sendForm('gmail', 'template_mVSf728k', e.target, 'user_uQXbrMDSIfdRK5JzuZ140')
      .then((result) => {
        console.log(result.text);

      }, (error) => {
        console.log(error.text);
      });

  }
  render() {

    return (
      <>
        <form className="contact-form" onSubmit={this.sendEmail}>
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <input type="text" name="from_name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
          <label>Email</label>
          <input type="email" name="user_email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
          <label>Message</label>
          <textarea name="message_html" value={this.state.message} onChange={e => this.setState({ message: e.target.value })} />
          <input className='submitMail' type="submit" value="Send"/>
        </form>
        {this.state.display && 
          <div > 
            <div className="successModal"> Send with success </div>
            </div>}
      </>

    );
  }
}

export default Form;

