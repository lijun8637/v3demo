export function isEmpty(canvas){
  let empty = document.createElement('canvas');
  empty.width = canvas.width;
  empty.height = canvas.height;
  return empty.toDataURL() === canvas.toDataURL();
}