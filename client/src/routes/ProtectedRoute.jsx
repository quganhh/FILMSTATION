import { Navigate, useLocation } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

function ProtectedRoute({ children }) {
  const auth = getAuth();
  const location = useLocation();

  if (!auth.currentUser) {
    return <Navigate 
      to="/login" 
      state={{ 
        from: location.pathname,
        message: 'Vui lòng đăng nhập để tiếp tục thanh toán'
      }} 
      replace 
    />;
  }

  return children;
}

export default ProtectedRoute;