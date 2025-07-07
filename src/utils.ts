export const formatDescription = (text: string): string => {
  if (!text) return '';
  return text
    .replace(/\+?\d+(\.\d+)?%?★?\/?/g, (match: string) => {
      return `<span style='color: #eec554; font-weight: 800;'>${match}</span>`;
    })
    .replace(/Fire DMG/g, `<span style='color: #ee473d'>Fire DMG</span>`)
    .replace(/Guiying/g, `<span style='color: #ee473d'>Guiying</span>`)
    .replace(/Yalis/g, `<span style='color: #ee473d'>Yalis</span>`)
    .replace(/Path of Nihility/g, `<span style='color: #7e74eb'>Yalis</span>`)
};

