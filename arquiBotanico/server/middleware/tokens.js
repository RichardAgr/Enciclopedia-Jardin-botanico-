import jwt from 'jsonwebtoken';

const requireAdmin = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Acceso no autorizado' });
  }

  jwt.verify(token, 'secreto', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token no válido' });
    }

    if (decoded.isAdmin) {
      next(); // Permite pasar al siguiente middleware o ruta
    } else {
      return res.status(403).json({ error: 'Acceso denegado' });
    }
  });
};

export { requireAdmin };