import '../styles/main.scss';
import bioPage from './components/bioPage';
import contactPage from './components/contactPage';
import printApp from './components/printApp';
import printProjects from './components/printProjects';
import getProjects from './helpers/data/projectData';

const init = () => {
  printApp();
  bioPage();
  getProjects().then((projects) => printProjects(projects));
  contactPage();
};

init();
