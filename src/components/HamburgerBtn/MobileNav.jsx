import { useState } from 'react';

const MobileNav = () => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={active ? 'hamburger  active' : 'hamburger classic'}
      onClick={() => setActive(!active)}
    >
      <span className="line" />
      <span className="line" />
      <span className="line" />
    </div>
  );
};

export default MobileNav;
