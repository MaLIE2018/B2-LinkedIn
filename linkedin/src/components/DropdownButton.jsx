import {Dropdown,t} from "react-bootstrap";

const DropdownButton = () => {
	return (
		<Dropdown>
			<Dropdown.Toggle
				style={{borderRadius: "50px", marginRight: "10px"}}
				variant="primary"
				id="dropdown-basic"
			>
				Open to
			</Dropdown.Toggle>

			<Dropdown.Menu>
				<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
				<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
				<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
};
export default DropdownButton;
