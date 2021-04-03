import '../styles/main.scss';
import printApp from './components/printApp';
import printProjects from './components/printProjects';
import getProjects from './helpers/data/projectData';

const init = () => {
  printApp();
  getProjects().then((projects) => printProjects(projects));
};

init();
