# INSTALAR REACT NATIVE
Nos usamos o Expo, ele é um conjunto de ferramentas desenvolvidas em torno do React Native que facilita o desenvolvimento.

A outra opcao eh o React Native CLI que eh recomendado para desenvolvedores mobile mais experientes.

-Baixe o Node.js https://nodejs.org/en/download/

-Baixe o git https://git-scm.com/downloads

-Abra o console e digite:

```npm install -g expo-cli```


-Crie uma pasta e clone o repositorio:

``` git clone https://github.com/pku-monitor/pkumonitor-frontend.git ```


# INICIE O EXPO
Pelo cmd entre na pasta do projeto e digite:

 ``` expo start ```
 
Apos iniciar, abrira uma guia no navegador, entao escolha visualizar o aplicativo pelo Android Studio ou pelo telefone pessoal.

## ANDROID STUDIO

 Para instalar e configurar o Android Studio so siga o video.
 
 https://www.youtube.com/watch?v=eSjFDWYkdxM&ab_channel=Rocketseat
 
## TELEFONE PESSOAL

 Baixe o expo na play store
 
 Escaneie o QRCode 

# REACT NATIVE USA A ARQUITETURA FLUX

https://medium.com/engenharia-arquivei/arquitetura-flux-26a419871ade

![Arquitetura](https://github.com/EricAKPM/PKU/blob/gh-pages/imagensPKU/Arquitetura.png)

Na tela eh chamado o hook chamado dispatch, entao eh chamado a funcao (uma action) **DataProductSuggestionRequest** que monta um objeto para ser passado para o hook. A action monta um objeto com dois campos(nesse caso), type e payload. Entao a funcao **DataProductSuggestionRequest** retorna esse objeto e o hook chama o reducer

No reducer ha um switch que usa o campo type do objeto passado para escolher qual codigo executar, e o payload sao os dados que serao atualizados.

Quando um switch eh executado o saga intercepta ele e executa determinada funcao, por exemplo:
```takeLatest(homeActionTypes.SEND_SUGGESTION_PRODUCT_NAME_REQUEST, sendProduct)```
ele intercepta o objeto com o campo type == homeActionTypes.SEND_SUGGESTION_PRODUCT_NAME_REQUEST e executa a funcao sendProduct. A funcao sendProduct pode ter o metodo GET ou POST e conectar com o back end e tambem chamar outra action, por exemplo, chamamos a action **DataProductSuggestionSucess** caso a operacao foi concluida e **DataProductSuggestionFailure** caso aconteca algo errado.

### Hook
![hook](https://github.com/EricAKPM/PKU/blob/gh-pages/imagensPKU/hook.png)

### Action
![action](https://github.com/EricAKPM/PKU/blob/gh-pages/imagensPKU/action.png)

### Reducer
![reducer](https://github.com/EricAKPM/PKU/blob/gh-pages/imagensPKU/reducer.png)

### 
![image](https://user-images.githubusercontent.com/64378964/144171992-295cc8a2-32f6-44ee-9978-e0fd5ababd08.png)

### Sagas
![sagas](https://github.com/EricAKPM/PKU/blob/gh-pages/imagensPKU/sagas.png)

# PROJETO

![Diretorio](https://github.com/EricAKPM/PKU/blob/gh-pages/imagensPKU/Diretorio.png)

Screen ficam as telas e components ficam os componentes usados em varias telas, como calendario leitor de codigo de barra e tambem estilos que sao prodronizados, como botoes, textos e etc.

