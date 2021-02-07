import { useRouter } from "next/router";
import { OptionItem } from "../options/OptionItem";
import { menuItems } from "../../../data";
import styled from "styled-components";

interface Props {
  close?: () => void;
}

export function MenuOptions(props: Props) {
  const { close } = props;

  const router = useRouter();
  const path = router.pathname.split("/");
  const mainPath = path[1];

  return (
    <>
      <OptionsContainer>
        {menuItems.map((item) => {
          const { option, url } = item;

          return (
            <OptionItem
              key={option}
              link={url}
              text={option.toUpperCase()}
              active={mainPath === option.replace("/", "").toLowerCase()}
              close={close}
            />
          );
        })}
      </OptionsContainer>
    </>
  );
}

const OptionsContainer = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
  display: inline-block;
  box-sizing: border-box;
  flex: 1;
`;
