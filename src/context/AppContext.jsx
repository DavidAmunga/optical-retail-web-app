import { createContext, useEffect, useState, useMemo } from 'react';

// Create Context
const AppContext = createContext({
  data: {},
  setData: () => {},
});

export default AppContext;
