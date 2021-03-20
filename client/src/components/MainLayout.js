import Navbar from './Navbar';
import Footer from './Footer';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
const MainLayout = ({ children }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </DndProvider>
  );
};

export default MainLayout;
