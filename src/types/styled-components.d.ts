// Importando a `const` do arquivo `theme` que acabamos de criar:
import theme from "./assets/styles/theme";

// Vamos criar um tipo Theme que receberá todas as configurações do theme que criamos anteriormente
type Theme = typeof theme;

// Por fim, vamos delcarar um módulo chamado `styled-components` que irá exportar uma interface chamada `DefaultTheme` que receberá todas as configurações de `Theme`:
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

// O arquivo styled-components.d.ts deve ficar assim
import theme from "assets/styles/theme";

type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
