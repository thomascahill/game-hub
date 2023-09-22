import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDoubleDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

export default function PlatformSelector({
  onSelectPlatform,
  selectedPlatform,
}: Props) {
  const { data, error } = usePlatforms();

  if (error) {
    return null;
  }

  let platformItem = data.map((platform) => {
    return (
      <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>
        {platform.name}
      </MenuItem>
    );
  });

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDoubleDown />}>
          {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>{platformItem}</MenuList>
      </Menu>
    </>
  );
}
