import React from "react";

import { Container } from "./styles";

interface iMessageBoxProps {
  title: string;
  description: string;
  footText: string;
  icon: string;
}

const MessageBox: React.FC<iMessageBoxProps> = ({
  title,
  description,
  footText,
  icon,
}) => (
  <Container>
    <header>
      <h1>
        {title} <img src={icon} alt={title} />
      </h1>
      <p>{description}</p>
    </header>
    <footer>
        <span>{footText}</span>
      </footer>
  </Container>
);

export default MessageBox;
