import { useNavigate, useLocation } from 'react-router-dom';
import { useCallback } from 'react';

export function useScrollToSection() {
  const navigate = useNavigate();
  const location = useLocation();

  return useCallback((sectionId: string) => {
    const scrollTo = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete then scroll
      setTimeout(scrollTo, 100);
    } else {
      scrollTo();
    }
  }, [navigate, location]);
}
