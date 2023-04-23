import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const NabarCom = () => {
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
         
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
             The News Times 
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link >
          <Link to={'/'}> <a className="text-gray-700 font-bold uppercase" > home</a></Link>
         
          </Navbar.Link>
          <Navbar.Link >
          <Link to={'/login'}> <a className="text-gray-700 font-bold uppercase" > log in</a></Link>
         
          </Navbar.Link>
          <Navbar.Link >
          <Link to={'/signup'}> <a className="text-gray-700 font-bold uppercase" > Sign Up </a></Link>
         
          </Navbar.Link>
         
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NabarCom;
