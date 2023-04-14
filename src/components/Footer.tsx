import { AddRounded, FlagCircleRounded } from '@mui/icons-material';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const [page, setPage] = useState('');

  const handleChange = (_e: unknown, page: string) => {
    setPage(page);
  };

  useEffect(() => {
    setPage(location.pathname.replace('/', ''));
  }, [location]);

  return (
    <BottomNavigation value={page} onChange={handleChange} showLabels>
      <BottomNavigationAction
        label={'Races'}
        value=""
        component={NavLink}
        icon={<FormatListBulletedRoundedIcon />}
        to={`/`}
      />

      <BottomNavigationAction
        label={'Setup race'}
        value="/setupRace"
        color="secondary"
        component={NavLink}
        icon={<AddRounded />}
        to={`/setupRace`}
      />

      <BottomNavigationAction
        label={'Tracks'}
        value="/tracks"
        color="secondary"
        component={NavLink}
        icon={<FlagCircleRounded />}
        to={`/tracks`}
      />
    </BottomNavigation>
  );
};

export default Footer;
