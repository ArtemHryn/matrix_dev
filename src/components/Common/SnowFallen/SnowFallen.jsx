import Particles, { initParticlesEngine } from '@tsparticles/react';

import snowConfig from './snowConfig.json'
import { useEffect, useState } from 'react';
import { loadFull } from 'tsparticles';

const SnowFallen = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async engine => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, [init]);
  return <div>{init && <Particles options={snowConfig} />}</div>;
};

export default SnowFallen;
