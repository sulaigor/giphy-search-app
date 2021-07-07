import AppLayout from 'core/AppLayout';
import ContextProvider from 'core/ContextProvider';

const App = () => {
  return (
    <ContextProvider>
      <AppLayout />
    </ContextProvider>
  );
};

export default App;
