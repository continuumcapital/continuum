
// Here we use this function to be able to read html code and trasform them into html semantics
// This is needed for the Greenhouse Job board - where the WYSIWYG editor is a bit wonky and handles how it renders code from the API

export const decodeHTML = (html: string) => {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

// This function is used to account for empty spaces and lines within the WYSIWYG editor in the Greenhouse Admin panel
// Same as the descprtion in the above function

export const processLines = (text: string) => {
  const lines = text.split('\n');
  const nonEmptyLines = lines.filter(line => line.trim() !== '');
  return nonEmptyLines.map(line => ({ title: line.trim() }));
}