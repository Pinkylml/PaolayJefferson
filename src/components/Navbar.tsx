import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

export default function Nav() {
    return (
        <Navbar>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}
