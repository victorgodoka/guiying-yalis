export const formatDescription = (text: string): string => {
  if (!text) return '';
  return text
    .replace(/\+?\d+(\.\d+)?%?/g, (match: string) => {
      return `<span class='text-[#eec554]' style='font-weight: 800;'>${match}</span>`;
    })
    .replace(/Fire DMG/g, `<span class='text-red-400'>Fire DMG</span>`);
};