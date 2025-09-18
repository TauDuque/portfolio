// src/components/ScrollToTop.tsx (ou onde preferir organizar seus hooks/utilitários)
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Sempre que o pathname mudar, rola para o topo

  return null; // Este componente não renderiza nada
}

export default ScrollToTop;
