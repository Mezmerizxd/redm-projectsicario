export function CreateRandomText(size: number){
  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var result = '';
  for ( var i = 0; i < size; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}