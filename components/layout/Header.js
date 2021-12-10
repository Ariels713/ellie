import styled, { keyframes } from "styled-components"
import Head from "next/head"
function Header() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </Head>
      <HeroWrapper>
        <HeroContent>Ellie</HeroContent>
      </HeroWrapper>
    </>
  )
}

export default Header

const rainbow = keyframes`
    0% {
        text-shadow: 8px 8px 0px var(--pink), 16px 16px 0px var(--purple),
        24px 24px 0 var(--yellow), 32px 32px 0px var(--blue);
    }
  25% {
    text-shadow: 8px 8px 0px var(--blue), 16px 16px 0px var(--pink),
      24px 24px 0 var(--purple), 32px 32px 0px var(--yellow);
  }
  50% {
    text-shadow: 8px 8px 0px var(--yellow), 16px 16px 0px var(--blue),
      24px 24px 0 var(--pink), 32px 32px 0px var(--purple);
  }
  75% {
    text-shadow: 8px 8px 0px var(--purple), 16px 16px 0px var(--yellow),
      24px 24px 0 var(--blue), 32px 32px 0px var(--pink);
  }
  100% {
    text-shadow: 8px 8px 0px var(--pink), 16px 16px 0px var(--purple),
      24px 24px 0 var(--yellow), 32px 32px 0px var(--blue);
  }
`
const HeroWrapper = styled.div``

const HeroContent = styled.h1`
  --pink: hsla(324, 84%, 65%, 1);
  --purple: hsla(267, 72%, 63%, 1);
  --yellow: hsla(52, 99%, 62%, 1);
  --blue: hsla(195, 99%, 49%, 1);
  font-family: "Pacifico", cursive;
  font-size: clamp(5rem, 33vw, 20rem);
  text-shadow: 8px 8px 0px var(--pink), 16px 16px 0px var(--purple),
    24px 24px 0 var(--yellow), 32px 32px 0 var(--blue);

  animation: ${rainbow} 2500ms ease-in-out infinite;
`
