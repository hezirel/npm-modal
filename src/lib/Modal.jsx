import React from "react";

import { PropTypes } from "prop-types";

import "./Modal.css";

const Modal = ({ children }) => {

	return (
		<div className="modalOverlay">
			{children}
		</div>
	);
};

Modal.propTypes = {
	children: PropTypes.node
};

export {
	Modal,
};
