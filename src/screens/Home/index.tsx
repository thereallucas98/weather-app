import React from "react";

import * as HomeUI from "./styles";

function Home() {
  return (
    <HomeUI.Container>
      <HomeUI.Header>
        <HomeUI.Greetings>Olá, David Lucas</HomeUI.Greetings>
        <HomeUI.ProfileImage
          source={{ uri: "https://github.com/thereallucas98.png" }}
        />
      </HomeUI.Header>
    </HomeUI.Container>
  );
}

export { Home };
