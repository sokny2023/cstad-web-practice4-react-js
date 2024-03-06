
//import Link from 'next/link';
//import { Navbar } from 'flowbite-react';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';

export default function Navbars() {
    return (
        <Navbar fluid rounded className='w-[95%] md:w-[90%] mx-auto'>
          <Navbar.Brand href="https://flowbite-react.com">
            <img src="../public/assets/logo.png" className="mr-3 mt-2 h-6 sm:h-9" alt="Sport KH" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-[25px] text-sky-500">Sport KH</span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="User settings" img="../public/assets/taingey.jpg" rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Ly Taing Ey</span>
                <span className="block truncate text-sm font-medium">taingey@cstad.com</span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="#" active className='text-[20px] text-sky-500'>
              Home
            </Navbar.Link>
            <Navbar.Link href="#" className=' text-[20px] hover:text-sky-600' >About</Navbar.Link>
            <Navbar.Link href="#" className=' text-[20px] hover:text-sky-600'>Services</Navbar.Link>
            <Navbar.Link href="#" className='t text-[20px] hover:text-sky-600'>Pricing</Navbar.Link>
            <Navbar.Link href="#" className=' text-[20px] hover:text-sky-600'>Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      );
}
