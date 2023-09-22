import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDoubleDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

export default function PlatformSelector() {
  const { data, error } = usePlatforms();

  if (error) {
    return null;
  }

  let platformItem = data.map((platform) => {
    return <MenuItem key={platform.id}>{platform.name}</MenuItem>;
  });

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDoubleDown />}>
          Platforms
        </MenuButton>
        <MenuList>{platformItem}</MenuList>
      </Menu>
    </>
  );
}
