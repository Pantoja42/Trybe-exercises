function createLists(s, repeat) {
  const ordenList = document.createElement('ol'); 
  const elementoPai = document.body;
  elementoPai.appendChild(ordenList);
  
    for (let i = 0; i < repeat; i += 1) {
        const listItens =  document.createElement('li'); 
        ordenList.appendChild(listItens);
    }
}
createLists('s', 10);