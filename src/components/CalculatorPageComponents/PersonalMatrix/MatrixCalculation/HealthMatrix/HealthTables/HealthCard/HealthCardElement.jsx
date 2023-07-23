import { useRef } from 'react';
import { ChakraElement, ChakraText, Exclamation } from '../../HealthMatrix.styled';
import { OverlayPanel } from 'primereact/overlaypanel';

import 'primereact/resources/primereact.min.css';
import HealthCardTip from './HealthCardTip';

const HealthCardElement = ({ index, partners, chakraElement, total, length }) => {
  const op = useRef(null);
  const { chakraName, physics, energy, emotions, color, partner1, partner2, couple, tip } =
    chakraElement;
  return (
    <ChakraElement
      key={chakraName}
      border={index === length - 1 && !total ? ['none', 'none', 'none'] : null}
    >
      <Exclamation type="button" onClick={e => op.current.toggle(e)} bg={color}>
        !
      </Exclamation>
      <OverlayPanel ref={op}>
        <HealthCardTip tip={tip} />
      </OverlayPanel>
      <ChakraText flex="2" justifyContent="flex-start" fontFamily="bona">
        {chakraName}
      </ChakraText>

      <ChakraText>{partners ? partner1 : energy}</ChakraText>
      <ChakraText>{partners ? partner2 : physics}</ChakraText>
      <ChakraText border={['none', 'none', 'none']}>{partners ? couple : emotions}</ChakraText>
    </ChakraElement>
  );
};

export default HealthCardElement;
