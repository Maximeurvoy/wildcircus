import React from 'react';

const ContactUs = () => {
  return (
    <>
      <div>
        <h2 id="Contact">Contact Us</h2>
        <form method="post" action="traitement.php">

          <div id="identification_reservation">
            <fieldset id="identification">

              <legend>Identification</legend>
              <label for="first_name">First Name</label>:<input type="text" name="first_name" id="first_name" />
              <label for="last_name">Last Name</label>:<input type="text" name="last_name" id="last_name" />
              <label for="country">Country</label>:
          <select name="country" id="country">
                <option value="germany">Germany</option>
                <option value="france" selected>France</option>
                <option value="italy">Italy</option>
                <option value="united_kingdom">United Kingdom</option>
                <option value="spain">Spain</option>
                <option value="poland">Poland</option>
                <option value="romania">Romania</option>
                <option value="netherlands">Netherlands</option>
                <option value="greece">Greece</option>
                <option value="portugal">Portugal</option>
                <option value="belgium">Belgium</option>
                <option value="czech Republic">Czech Republic</option>
                <option value="hungary">Hungary</option>
                <option value="sweden">Sweden</option>
                <option value="austria">Austria</option>
                <option value="switzerland">Switzerland</option>
                <option value="bulgaria">Bulgaria</option>
                <option value="denmark">Denmark</option>
                <option value="slovakia">Slovakia</option>
                <option value="finland">Finland</option>
                <option value="norway">Norway</option>
                <option value="ireland">Ireland</option>
                <option value="lithuania">Lithuania</option>
                <option value="latvia">Latvia</option>
                <option value="slovenia">Slovenia</option>
                <option value="estonia">Estonia</option>
                <option value="cyprus">Cyprus</option>
                <option value="luxembourg">Luxembourg</option>
                <option value="malta">Malta</option>
                <option value="other_country">Other country</option>
              </select>
              <label for="email">Email</label>:<input type="email" name="email" id="email" placeholder="Yourname@mailbox.com" />
            </fieldset>

            <fieldset id="your_reservation">
              <legend>Your reservation</legend>
              <label for="adult_number">Adult number</label> : <input type="number" name="adult_number" min="0" id="adult_number" />
              <label for="child_number">Child number</label> : <input type="number" name="child_number" min="0" id="child_number" />
              <label for="your_message">For group réservation please contact us</label>
            </fieldset>
          </div>

          <fieldset id="message">
            <legend><label for="your_message">Your message</label></legend>
            <textarea name="your_message" id="your_message" rows="8" cols="100">your text here</textarea>
          </fieldset>

          <input type="validate" value="validate" id="submit" />
        </form>

      </div>

    </>
  )
};

export default ContactUs;