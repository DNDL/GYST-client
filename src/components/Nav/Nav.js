import React from 'react';
import { Link } from 'react-router-dom';

// TODO insert real paths into Links

export default function Nav() {
  return (
    <nav>
      <Link to={'/home'}><img src="../../../assets/home.png"></img></Link>
      <Link to={'/addHabit'}><img src="../../../assets/add.png"></img></Link>
      <Link to={'/friendsList'}><img src="../../../assets/multiple-users-silhouette.png"></img></Link>
    </nav>
  );
}

