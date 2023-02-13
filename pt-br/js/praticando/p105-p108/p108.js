/*
    Prática 108:

        1. Instale o node-fetch se sua versão do Node for inferior a 18 usando NPM, e importe-o no seu arquivo (estilo ES Module)
        2. Importe "fs" de "fs/promises", que é nativo do NodeJS (não precisa de uma instalação NPM)
        3. Vá ao "wallhaven.cc" e encontre um papel de parede que você goste. Visite a página do papel de parede e clique com o botão direito no papel de parede e "abra a imagem em uma nova guia" para ter apenas a imagem em uma guia. A URL deve terminar com .png ou .jpg. Exemplo: https://w.wallhaven.cc/full/7p/wallhaven-7p39gy.png
        4. Use fetch para obter esta imagem e parceá-la corretamente. Em seguida, use "fs" para escrever um arquivo em seu sistema de arquivos com a imagem em si, para que você possa abri-lo após executar o script. Observe que essas funções em fs retornam Promises.
        Isso é propositalmente desafiador e exigirá muitas pesquisas na internet para ver como parcear a imagem e salvar usando Node.
*/

import fetch from "node-fetch";
import fs from "fs/promises";

const downloadWallpaper = async (url, fileName) => {
    const fetching = await fetch(url);
    const wallpaper = await fetching.arrayBuffer();

    await fs.writeFile(fileName, Buffer.from(wallpaper));
    console.log(`Image saved as "${fileName}".`);
}

const url = "https://w.wallhaven.cc/full/5g/wallhaven-5g75d8.png";
const fileName = "wallpaper.png";

downloadWallpaper(url, fileName);