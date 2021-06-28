export const getNepaliPrice = (nums: string) => {
   const price = (Number(nums) * 118.17).toFixed(2);
   const numbers = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
   const engNum = String(price).split('').map(convert).join('');

   function convert(num: string) {
      if (num === '.') {
         return '.';
      } else {
         return numbers[Number(num)];
      }
   }

   return engNum;
};
