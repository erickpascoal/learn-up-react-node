import React, { useCallback, useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa'
import { Link, useRouteMatch } from 'react-router-dom';
import { Container } from './styles';

const Header: React.FC = () => {
  let isFirstRoute = useRouteMatch({ path: '/', exact: true });
  const [showBackButtton, setShowbackButton] = useState(true);

  const goBack = useCallback(() => {
    window.history.back();
  }, []);

  useEffect(() => {
    if (isFirstRoute) {
      setShowbackButton(false);
    } else {
      setShowbackButton(true);
    }
  }, [isFirstRoute, showBackButtton]);


  return (
    <Container >
      <header>
        <Link to="/">Learn-up</Link>
        {showBackButtton &&
          <button onClick={goBack}>
            <FaArrowLeft size={14} />
            <h3> Voltar</h3>
          </button>
        }
      </header>
    </Container>

  );
}

export default Header;