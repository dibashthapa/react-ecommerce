export const getNepaliPrice = (nums: number) => {
   const numbers = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
   const engNum = String(nums).split('').map(convert).join('');

   function convert(num: string) {
      return numbers[Number(num)];
   }

   return engNum;
};
