import React, { useState, useEffect, MouseEventHandler } from 'react';
import PopoverWrapper from './index.style';

type PopoverProps = {
   className?: string;
   handler: React.ReactNode;
   content: React.ReactNode;
   direction?: 'left' | 'right';
   handleToggle?: () => void;
};

const Popover: React.FC<PopoverProps> = ({
   className,
   handler,
   content,
   direction,
}) => {
   const [state, setState] = useState(false);

   const addAllClasses: string[] = ['popover-wrapper'];

   // className prop checking
   if (className) {
      addAllClasses.push(className);
   }

   // Add direction class on popover content
   if (direction) {
      addAllClasses.push(direction);
   }

   const handleToggle: MouseEventHandler<HTMLElement> = (e) => {
      e.stopPropagation();
      setState((state) => !state);
   };

   const toggleDocumentClick = (e: MouseEvent) => {
      e.stopPropagation();
      if (state) {
         setState((state) => !state);
      }
   };

   useEffect(() => {
      window.addEventListener('click', toggleDocumentClick);
      return () => {
         window.removeEventListener('click', toggleDocumentClick);
      };
   });

   return (
      <PopoverWrapper className={addAllClasses.join(' ')}>
         <div className="popover-handler" onClick={handleToggle}>
            {handler}
         </div>
         {state && (
            <div className="popover-content">
               {content && (
                  <div className="inner-wrap" onClick={handleToggle}>
                     {content}
                  </div>
               )}
            </div>
         )}
      </PopoverWrapper>
   );
};

export default Popover;
