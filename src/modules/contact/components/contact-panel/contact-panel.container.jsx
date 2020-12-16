import { connect } from "react-redux";

import contactPanel from "./contact-panel.component";

import { postSendEmail } from "../../redux/crud-contact/crud-contact.actions";

const mapDispatchToProps = {
 postSendEmail
};

export default connect(null, mapDispatchToProps)(contactPanel);